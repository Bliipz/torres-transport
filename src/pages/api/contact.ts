// ============================================================
// API ROUTE : POST /api/contact
// Reçoit les demandes de devis (estimation enrichie ou contact simple)
// et les envoie par email à Ludovic + email de confirmation au client.
// ============================================================

import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

// ==================== HELPERS ====================

function escapeHtml(str: string): string {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string): boolean {
  const cleaned = phone.replace(/[\s.\-]/g, '');
  return /^(\+33|0)[1-9]\d{8}$/.test(cleaned);
}

// Construit "rue, CP ville" si les 3 champs sont valides, sinon ''
function buildAddress(rue: string, cp: string, ville: string): string {
  const r = (rue || '').trim();
  const c = (cp || '').trim();
  const v = (ville || '').trim();
  if (r.length < 3 || !/^\d{5}$/.test(c) || v.length < 2) return '';
  return `${r}, ${c} ${v}`;
}

const SERVICE_LABELS: Record<string, string> = {
  demenagement: 'Déménagement',
  transport: 'Transport simple',
  'montage-meubles': 'Montage de meubles',
  manutention: 'Manutention',
  debarras: 'Débarras',
  'location-vehicule': 'Location utilitaire avec chauffeur',
  nettoyage: 'Nettoyage fin de chantier',
};

const ASCENSEUR_LABELS: Record<string, string> = {
  aucun: 'Sans ascenseur',
  '2p': 'Ascenseur 2 personnes',
  '4p': 'Ascenseur 4 personnes',
  grand: 'Ascenseur +4 personnes',
};

const TYPE_LIEU_LABELS: Record<string, string> = {
  appartement: 'Appartement',
  maison: 'Maison',
  local: 'Local commercial',
  bureau: 'Bureau',
};

// Construit la section "détails de la prestation" selon le service
function buildDetailsHtml(service: string, fd: FormData): string {
  const get = (k: string) => (fd.get(k)?.toString().trim() || '');
  const rows: Array<[string, string]> = [];

  // Champs spécifiques selon le service
  switch (service) {
    case 'demenagement':
    case 'transport': {
      const vol = get('volume_m3');
      if (vol) rows.push(['Volume estimé', `${vol} m³`]);
      const tarifM3 = service === 'transport' ? '~30,90 €/m³ (transport simple)' : '47,50 €/m³';
      rows.push(['Tarif de référence', tarifM3]);
      if (get('demontage') === 'on') rows.push(['Démontage / remontage', 'Oui']);
      if (get('debarras_opt') === 'on') rows.push(['Débarras / déchetterie', 'Oui']);
      if (service === 'transport') {
        const tc = get('type_client');
        if (tc) rows.push(['Type de client', tc === 'entreprise' ? 'Entreprise' : 'Particulier']);
        const objs = get('objets_transport');
        if (objs) rows.push(['Objets à transporter', objs]);
      }
      break;
    }
    case 'montage-meubles': {
      const meubles = get('meubles_liste');
      if (meubles) rows.push(['Meubles à monter', meubles]);
      break;
    }
    case 'manutention': {
      const desc = get('description_manutention');
      if (desc) rows.push(['Description', desc]);
      break;
    }
    case 'debarras': {
      const desc = get('description_debarras');
      if (desc) rows.push(['Description', desc]);
      const lieu = get('lieu_debarras');
      if (lieu) {
        const map: Record<string, string> = {
          cave: 'Cave / grenier', appartement: 'Appartement',
          maison: 'Maison', local: 'Local pro',
        };
        rows.push(['Type de lieu', map[lieu] || lieu]);
      }
      break;
    }
    case 'location-vehicule': {
      const duree = get('duree_location');
      if (duree) {
        const map: Record<string, string> = {
          'demi-journee': '1/2 journée', journee: 'Journée', 'multi-jours': 'Plusieurs jours',
        };
        rows.push(['Durée souhaitée', map[duree] || duree]);
      }
      const desc = get('description_location');
      if (desc) rows.push(['Description', desc]);
      break;
    }
    case 'nettoyage': {
      const surface = get('surface_m2');
      if (surface) rows.push(['Surface', `${surface} m²`]);
      const desc = get('description_nettoyage');
      if (desc) rows.push(['Description', desc]);
      break;
    }
  }

  // Adresses (commun) — reconstituées depuis les 3 champs séparés
  const addrDepart = buildAddress(get('rue_depart'), get('cp_depart'), get('ville_depart'));
  if (addrDepart) {
    const typeLabel = TYPE_LIEU_LABELS[get('type_depart')] || '';
    const etage = get('etage_depart');
    const ascLabel = ASCENSEUR_LABELS[get('ascenseur_depart')] || '';
    const meta = [typeLabel, etage ? `${etage}e étage` : '', ascLabel].filter(Boolean).join(' · ');
    const addrLabel = (service === 'demenagement' || service === 'transport') ? 'Adresse de départ' : "Adresse d'intervention";
    rows.push([addrLabel, addrDepart + (meta ? ` (${meta})` : '')]);
  }
  const addrArrivee = buildAddress(get('rue_arrivee'), get('cp_arrivee'), get('ville_arrivee'));
  if (addrArrivee && (service === 'demenagement' || service === 'transport')) {
    const typeLabel = TYPE_LIEU_LABELS[get('type_arrivee')] || '';
    const etage = get('etage_arrivee');
    const ascLabel = ASCENSEUR_LABELS[get('ascenseur_arrivee')] || '';
    const meta = [typeLabel, etage ? `${etage}e étage` : '', ascLabel].filter(Boolean).join(' · ');
    rows.push(["Adresse d'arrivée", addrArrivee + (meta ? ` (${meta})` : '')]);
  }

  // Date
  const date = get('date_prestation') || get('date');
  if (date) rows.push(['Date souhaitée', date]);

  // Avantages
  const avantages: string[] = [];
  if (get('senior') === 'on') avantages.push('Sénior / PMR (−10 %)');
  if (get('anticipee') === 'on') avantages.push('Réservation anticipée (−5 %)');
  if (avantages.length) rows.push(['Avantages applicables', avantages.join(', ')]);

  // Estimation prix (envoyée par le formulaire)
  const prix = get('estimation_prix');
  if (prix) rows.push(['Estimation indicative (calculée en ligne)', `${prix} €`]);

  if (rows.length === 0) return '';

  return `
    <h2 style="color: #1a1a1a; font-size: 16px; margin: 24px 0 12px;">📋 Détails de la prestation</h2>
    <table style="width: 100%; border-collapse: collapse;">
      ${rows.map(([k, v]) => `
        <tr>
          <td style="padding: 6px 0; font-weight: 600; width: 40%; vertical-align: top; color: #4a5568;">${escapeHtml(k)}&nbsp;:</td>
          <td style="padding: 6px 0; color: #1a1a1a;">${escapeHtml(v).replace(/\n/g, '<br>')}</td>
        </tr>
      `).join('')}
    </table>
  `;
}

// ==================== ROUTE HANDLER ====================

export const POST: APIRoute = async ({ request }) => {
  const headers = { 'Content-Type': 'application/json' };

  try {
    const formData = await request.formData();

    // 🍯 Honeypot anti-spam
    const honeypot = formData.get('website')?.toString().trim();
    if (honeypot) {
      return new Response(JSON.stringify({ ok: true }), { status: 200, headers });
    }

    // Champs requis
    const nom = formData.get('nom')?.toString().trim() || '';
    const email = formData.get('email')?.toString().trim() || '';
    const telephone = formData.get('telephone')?.toString().trim() || '';
    const service = formData.get('service')?.toString().trim() || '';
    const message = formData.get('message')?.toString().trim() || '';
    const rgpd = formData.get('rgpd')?.toString().trim() === 'on';
    const adresseDepart = buildAddress(
      formData.get('rue_depart')?.toString() || '',
      formData.get('cp_depart')?.toString() || '',
      formData.get('ville_depart')?.toString() || '',
    );
    const adresseArrivee = buildAddress(
      formData.get('rue_arrivee')?.toString() || '',
      formData.get('cp_arrivee')?.toString() || '',
      formData.get('ville_arrivee')?.toString() || '',
    );

    // Services qui exigent une adresse complète (rue, code postal, ville)
    const SERVICES_NEED_DEPART = ['demenagement', 'transport', 'montage-meubles', 'manutention', 'debarras', 'nettoyage'];
    const SERVICES_NEED_ARRIVEE = ['demenagement', 'transport'];

    // ==================== VALIDATION ====================
    const errors: string[] = [];
    if (!nom || nom.length < 2) errors.push('Nom requis (2 caractères min)');
    if (!isValidEmail(email)) errors.push('Email invalide');
    if (!isValidPhone(telephone)) errors.push('Téléphone invalide (format français)');
    if (!service || !SERVICE_LABELS[service]) errors.push('Service à sélectionner');
    if (!rgpd) errors.push("Vous devez accepter la politique de confidentialité");
    if (SERVICES_NEED_DEPART.includes(service) && !adresseDepart) {
      errors.push('Adresse de départ incomplète : rue, code postal (5 chiffres) et ville requis');
    }
    if (SERVICES_NEED_ARRIVEE.includes(service) && !adresseArrivee) {
      errors.push("Adresse d'arrivée incomplète : rue, code postal (5 chiffres) et ville requis");
    }

    if (errors.length > 0) {
      return new Response(JSON.stringify({ ok: false, errors }), { status: 400, headers });
    }

    // ==================== ENVOI EMAIL ====================
    const apiKey = import.meta.env.RESEND_API_KEY;
    const fromEmail = import.meta.env.RESEND_FROM_EMAIL || 'devis@torrestransport.fr';
    const toEmail = import.meta.env.CONTACT_TO_EMAIL || 'contact@torrestransport.fr';

    if (!apiKey) {
      console.error('RESEND_API_KEY manquante');
      return new Response(
        JSON.stringify({ ok: false, errors: ['Configuration serveur incomplète. Merci de nous appeler.'] }),
        { status: 500, headers }
      );
    }

    const resend = new Resend(apiKey);
    const serviceLabel = SERVICE_LABELS[service];
    const subject = `[Devis ${serviceLabel}] Demande de ${nom}`;
    const detailsHtml = buildDetailsHtml(service, formData);

    const html = `
      <!DOCTYPE html>
      <html lang="fr">
        <head><meta charset="UTF-8" /></head>
        <body style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; padding: 20px; color: #333;">
          <div style="background: #1a1a1a; color: #f5de7e; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 22px;">📩 Nouvelle demande de devis</h1>
            <p style="margin: 8px 0 0; color: white; font-size: 14px;">${escapeHtml(serviceLabel)}</p>
          </div>

          <div style="background: #fff; padding: 24px; border: 1px solid #e2e8f0; border-top: none;">
            <h2 style="color: #1a1a1a; font-size: 16px; margin: 0 0 12px;">👤 Coordonnées</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 6px 0; font-weight: 600; width: 40%; color: #4a5568;">Nom :</td><td>${escapeHtml(nom)}</td></tr>
              <tr><td style="padding: 6px 0; font-weight: 600; color: #4a5568;">Email :</td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
              <tr><td style="padding: 6px 0; font-weight: 600; color: #4a5568;">Téléphone :</td><td><a href="tel:${escapeHtml(telephone)}">${escapeHtml(telephone)}</a></td></tr>
            </table>

            ${detailsHtml}

            ${message ? `
              <h2 style="color: #1a1a1a; font-size: 16px; margin: 24px 0 12px;">💬 Message libre</h2>
              <div style="background: #f7f7f7; padding: 14px 16px; border-left: 3px solid #f5de7e; white-space: pre-wrap;">${escapeHtml(message)}</div>
            ` : ''}

            <div style="margin-top: 24px; padding: 14px 16px; background: #fdf9e7; font-size: 13px; color: #4a5568;">
              <strong>💡 Action recommandée :</strong> rappeler sous 24 h au numéro ci-dessus.
            </div>

            <hr style="margin: 24px 0; border: none; border-top: 1px solid #e2e8f0;" />
            <p style="font-size: 12px; color: #888; text-align: center; margin: 0;">
              📨 Reçu via torrestransport.fr, ${new Date().toLocaleString('fr-FR', { dateStyle: 'long', timeStyle: 'short' })}
            </p>
          </div>
        </body>
      </html>
    `;

    const { data, error } = await resend.emails.send({
      from: `Torres Transport <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
      subject,
      html,
    });

    if (error) {
      console.error('Erreur Resend:', error);
      return new Response(
        JSON.stringify({ ok: false, errors: ["Erreur lors de l'envoi. Merci de réessayer ou de nous appeler au 06 59 92 68 14."] }),
        { status: 500, headers }
      );
    }

    // ==================== EMAIL DE CONFIRMATION CLIENT ====================
    const confirmationHtml = `
      <!DOCTYPE html>
      <html lang="fr">
        <head><meta charset="UTF-8" /></head>
        <body style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; padding: 20px; color: #333;">
          <div style="background: #1a1a1a; color: #f5de7e; padding: 24px; text-align: center;">
            <h1 style="margin: 0; font-size: 22px;">✅ Demande bien reçue</h1>
            <p style="margin: 8px 0 0; color: white; font-size: 14px;">Merci de votre confiance, ${escapeHtml(nom)}</p>
          </div>

          <div style="background: #fff; padding: 28px; border: 1px solid #e2e8f0; border-top: none;">
            <p style="font-size: 15px; line-height: 1.7;">Bonjour <strong>${escapeHtml(nom)}</strong>,</p>
            <p style="font-size: 15px; line-height: 1.7;">
              Nous avons bien reçu votre demande pour <strong>${escapeHtml(serviceLabel)}</strong>.
              Notre équipe revient vers vous <strong>sous 24 h</strong> au numéro indiqué.
            </p>

            <div style="background: #fdf9e7; border-left: 4px solid #f5de7e; padding: 16px 20px; margin: 24px 0;">
              <p style="margin: 0; font-size: 14px; line-height: 1.6;">
                <strong>📞 Une urgence ?</strong> Appelez Ludovic au
                <a href="tel:+33659926814" style="color: #1a1a1a;">06 59 92 68 14</a>
                (Lundi-Samedi, 8h-19h).
              </p>
            </div>

            ${detailsHtml}

            <hr style="margin: 28px 0; border: none; border-top: 1px solid #e2e8f0;" />

            <p style="font-size: 13px; color: #666; line-height: 1.6;">
              <strong>Pourquoi Torres Transport ?</strong><br>
              ✓ 20 ans d'expérience en Haute-Savoie<br>
              ✓ Équipe locale basée à Ville-la-Grand · pas de sous-traitance<br>
              ✓ Devis transparent · pas d'acompte demandé<br>
              ✓ Tarif sénior/PMR · réservation anticipée
            </p>

            <hr style="margin: 24px 0 16px; border: none; border-top: 1px solid #e2e8f0;" />
            <p style="font-size: 11px; color: #aaa; text-align: center; margin: 0;">
              <strong>Torres Transport</strong> · 8 rue Fernand David, 74100 Ville-la-Grand · SIRET 528 686 330 00051<br>
              <a href="https://torrestransport.fr/mentions-legales" style="color: #aaa;">Mentions légales</a>
            </p>
          </div>
        </body>
      </html>
    `;

    try {
      await resend.emails.send({
        from: `Torres Transport <${fromEmail}>`,
        to: [email],
        replyTo: toEmail,
        subject: 'Confirmation de votre demande, Torres Transport',
        html: confirmationHtml,
      });
    } catch (confirmErr) {
      console.warn('Email de confirmation échoué (non-bloquant):', confirmErr);
    }

    return new Response(
      JSON.stringify({ ok: true, message: 'Demande envoyée. Réponse sous 24 h.', id: data?.id }),
      { status: 200, headers }
    );
  } catch (err) {
    console.error('Erreur API contact:', err);
    return new Response(
      JSON.stringify({ ok: false, errors: ['Erreur serveur. Merci de réessayer.'] }),
      { status: 500, headers }
    );
  }
};
