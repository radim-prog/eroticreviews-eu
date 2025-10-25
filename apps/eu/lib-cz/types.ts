// Datové modely pro EroticReviews.cz

export type PersonType = "divka" | "maserka" | "domina" | "digitalmodelka";
export type OrganizationType = "podnik" | "masazni_salon" | "bdsm_studio" | "escort_agentura";
export type ReviewStatus = "pending" | "approved" | "rejected";
export type UserReputation = "bronze" | "silver" | "gold";
export type PublishStatus = "publish" | "draft";

export interface Person {
  id: string;
  type: PersonType;
  name: string;
  age: number;
  height_cm: number;
  weight_kg: number;
  breast: string;
  eyes: string;
  tattoos: "yes" | "no";
  piercing: "yes" | "no";
  languages: string[]; // např. ["CZ", "EN", "DE"]
  location: string;
  services: string[]; // např. ["BJ", "Kissing", "69", "GFE"]
  pricing_note: string;
  short_claim: string; // krátký popisek pro výpis
  description: string; // plný popis
  gallery: string[]; // pole URL obrázků
  alt_texts: string[]; // alt texty pro obrázky
  org_id?: string; // ID organizace, pokud patří k nějaké
  reviews_count: number;
  avg_rating: number;
  slug: string; // URL friendly
  status: PublishStatus;
  is_featured: boolean; // Placená TOP pozice
  created_at: Date;
  updated_at: Date;
}

export interface Organization {
  id: string;
  type: OrganizationType;
  name: string;
  location: string;
  contacts: {
    phone?: string;
    web?: string;
    address?: string;
    email?: string;
  };
  description: string;
  gallery: string[];
  people_ids: string[]; // array ID osob
  reviews_count: number;
  avg_rating: number;
  slug: string;
  status: PublishStatus;
  is_featured: boolean; // Placená TOP pozice
  created_at: Date;
  updated_at: Date;
}

export interface Review {
  id: string;
  target_type: "person" | "organization";
  target_id: string;
  target_name: string; // pro snadnější zobrazení
  target_slug: string; // pro linky
  title: string;
  body: string;
  rating: 1 | 2 | 3 | 4 | 5;
  author_alias: string;
  author_uid: string;
  verified: boolean; // ověřená návštěva
  status: ReviewStatus;
  created_at: Date;
  updated_at: Date;
}

export interface User {
  uid: string;
  email: string;
  alias: string;
  reputation: UserReputation;
  reviews_count: number;
  gdpr_consent: boolean;
  created_at: Date;
}

// Pomocné typy pro filtry
export interface SearchFilters {
  type?: PersonType | OrganizationType;
  location?: string;
  services?: string[];
  minRating?: number;
  maxRating?: number;
  language?: string;
  priceLevel?: "low" | "medium" | "high";
  availability?: "solo" | "podnik";
}

// Konstanty pro lokality
export const LOCATIONS = [
  "Praha 1", "Praha 2", "Praha 3", "Praha 4", "Praha 5",
  "Praha 6", "Praha 7", "Praha 8", "Praha 9", "Praha 10",
  "Brno", "Ostrava", "Plzeň", "Liberec", "Olomouc",
  "České Budějovice", "Hradec Králové", "Ústí nad Labem",
  "Pardubice", "Zlín"
];

// Konstanty pro služby
export const SERVICES = {
  divka: [
    "BJ", "Kissing", "69", "GFE", "Anal", "CIM", "COB",
    "Striptease", "Masáž", "Duo", "Escort", "Party"
  ],
  maserka: [
    "Klasická masáž", "Tantric", "Nuru", "Body-to-body",
    "Olejová masáž", "Happy end", "Prostatická masáž"
  ],
  domina: [
    "Bondage", "Spanking", "Trampling", "CBT", "Electro",
    "Strap-on", "Sissification", "Findom", "Feminizace"
  ],
  digitalmodelka: [
    "OnlyFans", "Fansly", "Patreon", "Custom Content",
    "Video Calls", "Sexting", "Dick Ratings", "JOI",
    "Foot Fetish", "Roleplay", "GF Experience"
  ]
};

// Konstanty pro kategorie
export const PERSON_TYPES = {
  divka: {
    label: "Holky na sex",
    slug: "holky-na-sex",
    description: "Profesionální společnice pro dospělé"
  },
  maserka: {
    label: "Erotické masáže",
    slug: "eroticke-masaze",
    description: "Smyslné a relaxační masáže"
  },
  domina: {
    label: "Dominy",
    slug: "dominy",
    description: "BDSM a dominance"
  },
  digitalmodelka: {
    label: "Digitální modelky",
    slug: "digitalni-modelky",
    description: "OnlyFans, Fansly a další platformy"
  }
};

export const ORG_TYPES = {
  podnik: {
    label: "Podniky / Priváty",
    slug: "podniky",
    description: "Erotické podniky a priváty"
  },
  masazni_salon: {
    label: "Masážní salony",
    slug: "masazni-salony",
    description: "Salony erotických masáží"
  },
  bdsm_studio: {
    label: "BDSM studia",
    slug: "bdsm-studia",
    description: "Profesionální BDSM studia"
  },
  escort_agentura: {
    label: "Escort agentury",
    slug: "escort-agentury",
    description: "Profesionální escort agentury"
  }
};
