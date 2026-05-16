// ============================================================
// HELPERS JSON-LD - SCHEMA.ORG
// Évite de dupliquer la construction de BreadcrumbList, FAQPage,
// ContactPage etc. dans chaque page. Importer la fonction qu'il
// faut au lieu de copier-coller 10 lignes de boilerplate.
// ============================================================

import { COMPANY } from "../data/company";

export const SITE_URL = COMPANY.url;
export const BUSINESS_ID = `${SITE_URL}/#business`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

// ==================== BREADCRUMB ====================

export interface BreadcrumbItem {
  name: string;
  item: string; // URL absolue ou relative (les relatives seront préfixées par SITE_URL)
}

export function makeBreadcrumb(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((entry, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: entry.name,
      item: entry.item.startsWith("http")
        ? entry.item
        : `${SITE_URL}${entry.item.startsWith("/") ? "" : "/"}${entry.item}`,
    })),
  };
}

// ==================== FAQ PAGE ====================

export interface FaqEntry {
  question: string;
  reponse: string;
}

export function makeFAQPage(faqs: FaqEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.reponse },
    })),
  };
}

// ==================== CONTACT PAGE ====================

export interface ContactPageInput {
  pageUrl: string;
  name?: string;
  description?: string;
  primaryImage?: string;
}

export function makeContactPage(input: ContactPageInput) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${input.pageUrl}#contactpage`,
    url: input.pageUrl,
    name: input.name || `Contact ${COMPANY.name}`,
    inLanguage: "fr-FR",
    isPartOf: { "@id": WEBSITE_ID },
    mainEntity: { "@id": BUSINESS_ID },
  };
  if (input.description) schema.description = input.description;
  if (input.primaryImage) {
    schema.primaryImageOfPage = {
      "@type": "ImageObject",
      url: input.primaryImage.startsWith("http")
        ? input.primaryImage
        : `${SITE_URL}${input.primaryImage}`,
    };
  }
  return schema;
}

// ==================== ABOUT PAGE ====================

export interface AboutPageInput {
  pageUrl: string;
  name?: string;
  description?: string;
  primaryImage?: string;
}

export function makeAboutPage(input: AboutPageInput) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${input.pageUrl}#aboutpage`,
    url: input.pageUrl,
    name: input.name || `À propos de ${COMPANY.name}`,
    inLanguage: "fr-FR",
    isPartOf: { "@id": WEBSITE_ID },
    mainEntity: { "@id": BUSINESS_ID },
    about: { "@id": BUSINESS_ID },
  };
  if (input.description) schema.description = input.description;
  if (input.primaryImage) {
    schema.primaryImageOfPage = {
      "@type": "ImageObject",
      url: input.primaryImage.startsWith("http")
        ? input.primaryImage
        : `${SITE_URL}${input.primaryImage}`,
    };
  }
  return schema;
}

// ==================== SERVICE ====================

export interface ServiceInput {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
  areaServed?: string[]; // ex: ["Annemasse", "Haute-Savoie"]
  image?: string;
}

export function makeService(input: ServiceInput) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: input.url.startsWith("http") ? input.url : `${SITE_URL}${input.url}`,
    provider: { "@id": BUSINESS_ID },
    serviceType: input.serviceType || input.name,
  };
  if (input.areaServed?.length) {
    schema.areaServed = input.areaServed.map((a) => ({ "@type": "City", name: a }));
  }
  if (input.image) {
    schema.image = input.image.startsWith("http") ? input.image : `${SITE_URL}${input.image}`;
  }
  return schema;
}

// ==================== HOW-TO ====================

export interface HowToStep {
  name: string;
  text: string;
  url?: string;
  image?: string;
}

export interface HowToInput {
  name: string;
  description: string;
  steps: HowToStep[];
  totalTime?: string; // ISO 8601 duration, ex: "PT2H30M"
}

export function makeHowTo(input: HowToInput) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: input.name,
    description: input.description,
    step: input.steps.map((s, idx) => {
      const step: Record<string, unknown> = {
        "@type": "HowToStep",
        position: idx + 1,
        name: s.name,
        text: s.text,
      };
      if (s.url) step.url = s.url;
      if (s.image) step.image = s.image.startsWith("http") ? s.image : `${SITE_URL}${s.image}`;
      return step;
    }),
  };
  if (input.totalTime) schema.totalTime = input.totalTime;
  return schema;
}

// ==================== ITEMLIST (carousel) ====================

export interface ListEntry {
  name: string;
  url: string;
  description?: string;
  image?: string;
}

export function makeItemList(items: ListEntry[], listName?: string) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      url: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
      name: item.name,
      ...(item.description && { description: item.description }),
      ...(item.image && {
        image: item.image.startsWith("http") ? item.image : `${SITE_URL}${item.image}`,
      }),
    })),
  };
  if (listName) schema.name = listName;
  return schema;
}
