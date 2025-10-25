// Centrální úložiště demo dat pro celou aplikaci
import { Person, Organization, Review } from "./types";

// DEMO OSOBY - HOLKY NA SEX
export const demoGirls: Person[] = [
  {
    id: "1",
    type: "divka",
    name: "Laura",
    age: 22,
    height_cm: 168,
    weight_kg: 52,
    breast: "2",
    eyes: "green",
    tattoos: "no",
    piercing: "no",
    languages: ["CZ", "EN"],
    location: "Praha 3",
    services: ["BJ", "Kissing", "69", "GFE", "Striptease"],
    pricing_note: "Od 2000 Kč/hod",
    short_claim: "Elegantní blondýnka s úsměvem, který si zamiluješ",
    description: `Laura je mladá společnice s přirozeným šarmem a pozitivní energií.

Nabízí diskrétní a profesionální služby pro náročné gentlemany, kteří hledají nejen fyzické potěšení, ale také příjemnou konverzaci a GFE zážitek.

Laura je vzdělaná, komunikativní a má smysl pro humor. Každé setkání s ní je unikátní a nezapomenutelné.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Laura elegantní portrét"],
    reviews_count: 12,
    avg_rating: 4.8,
    slug: "laura-praha-3",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-10"),
    updated_at: new Date("2025-01-10")
  },
  {
    id: "1b",
    type: "divka",
    name: "Kristýna",
    age: 21,
    height_cm: 165,
    weight_kg: 50,
    breast: "2",
    eyes: "brown",
    tattoos: "no",
    piercing: "no",
    languages: ["CZ"],
    location: "Praha 4",
    services: ["BJ", "Kissing", "69", "GFE"],
    pricing_note: "Od 1800 Kč/hod",
    short_claim: "Mladá studentka s nevinným vzhledem",
    description: `Kristýna je studentka, která si přivydělává společnictvím. Je milá, естественная a upřímná.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Kristýna"],
    reviews_count: 8,
    avg_rating: 4.6,
    slug: "kristyna-praha-4",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-12"),
    updated_at: new Date("2025-01-12")
  },
  {
    id: "1c",
    type: "divka",
    name: "Karolína",
    age: 28,
    height_cm: 175,
    weight_kg: 62,
    breast: "4",
    eyes: "blue",
    tattoos: "yes",
    piercing: "yes",
    languages: ["CZ", "EN", "RU"],
    location: "Praha 2",
    services: ["BJ", "Kissing", "69", "GFE", "Anal", "Duo", "PSE"],
    pricing_note: "Od 3000 Kč/hod",
    short_claim: "Zkušená luxury escort pro VIP klienty",
    description: `Karolína je profesionální escort s 8 lety zkušeností. Luxusní společnice pro náročné.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Karolína"],
    reviews_count: 24,
    avg_rating: 4.9,
    slug: "karolina-praha-2",
    status: "publish",
    is_featured: true, // ⭐ PLACENÁ TOP POZICE
    created_at: new Date("2025-01-08"),
    updated_at: new Date("2025-01-08")
  },
  {
    id: "1d",
    type: "divka",
    name: "Simona",
    age: 23,
    height_cm: 170,
    weight_kg: 55,
    breast: "3",
    eyes: "green",
    tattoos: "no",
    piercing: "yes",
    languages: ["CZ", "EN"],
    location: "Brno",
    services: ["BJ", "Kissing", "69", "GFE", "Striptease"],
    pricing_note: "Od 2200 Kč/hod",
    short_claim: "Sexy brunetka z Brna s vášnivou náturou",
    description: `Simona je temperamentní dívka, která miluje svou práci a rádá dělá potěšení.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Simona"],
    reviews_count: 15,
    avg_rating: 4.7,
    slug: "simona-brno",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-11"),
    updated_at: new Date("2025-01-11")
  },
  {
    id: "1e",
    type: "divka",
    name: "Veronika",
    age: 26,
    height_cm: 168,
    weight_kg: 53,
    breast: "2",
    eyes: "blue",
    tattoos: "yes",
    piercing: "no",
    languages: ["CZ", "EN"],
    location: "Ostrava",
    services: ["BJ", "Kissing", "69", "GFE"],
    pricing_note: "Od 1900 Kč/hod",
    short_claim: "Přátelská a uvolněná společnice",
    description: `Veronika je usměvavá dívka, která vytváří příjemnou atmosféru.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Veronika"],
    reviews_count: 10,
    avg_rating: 4.5,
    slug: "veronika-ostrava",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-09"),
    updated_at: new Date("2025-01-09")
  },
  {
    id: "1f",
    type: "divka",
    name: "Adéla",
    age: 24,
    height_cm: 162,
    weight_kg: 48,
    breast: "1",
    eyes: "brown",
    tattoos: "no",
    piercing: "no",
    languages: ["CZ"],
    location: "Plzeň",
    services: ["BJ", "Kissing", "69", "GFE"],
    pricing_note: "Od 1700 Kč/hod",
    short_claim: "Drobná a jemná dívka",
    description: `Adéla je citlivá společnice s jemnou povahou.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Adéla"],
    reviews_count: 6,
    avg_rating: 4.4,
    slug: "adela-plzen",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-13"),
    updated_at: new Date("2025-01-13")
  },
  {
    id: "1g",
    type: "divka",
    name: "Denisa",
    age: 27,
    height_cm: 173,
    weight_kg: 60,
    breast: "3",
    eyes: "brown",
    tattoos: "yes",
    piercing: "yes",
    languages: ["CZ", "EN", "DE"],
    location: "Praha 5",
    services: ["BJ", "Kissing", "69", "GFE", "Anal", "Duo"],
    pricing_note: "Od 2600 Kč/hod",
    short_claim: "Divočina s neukojitelnou touhou",
    description: `Denisa je vášnivá žena, která miluje experimenty.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Denisa"],
    reviews_count: 18,
    avg_rating: 4.8,
    slug: "denisa-praha-5",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-07"),
    updated_at: new Date("2025-01-07")
  },
  {
    id: "1h",
    type: "divka",
    name: "Barbora",
    age: 22,
    height_cm: 169,
    weight_kg: 54,
    breast: "2",
    eyes: "green",
    tattoos: "no",
    piercing: "yes",
    languages: ["CZ", "EN"],
    location: "Praha 6",
    services: ["BJ", "Kissing", "69", "GFE", "Striptease"],
    pricing_note: "Od 2100 Kč/hod",
    short_claim: "Sportovní tělo a pozitivní energie",
    description: `Barbora je fitness trenérka, která má skvělou postavu a energii.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Barbora"],
    reviews_count: 14,
    avg_rating: 4.7,
    slug: "barbora-praha-6",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-06"),
    updated_at: new Date("2025-01-06")
  },
  {
    id: "1i",
    type: "divka",
    name: "Patricie",
    age: 29,
    height_cm: 171,
    weight_kg: 58,
    breast: "3",
    eyes: "blue",
    tattoos: "yes",
    piercing: "yes",
    languages: ["CZ", "EN"],
    location: "Praha 1",
    services: ["BJ", "Kissing", "69", "GFE", "Anal", "Duo"],
    pricing_note: "Od 2800 Kč/hod",
    short_claim: "Zkušená profesionálka s šarmem",
    description: `Patricie je zkušená společnice, která ví, co muži chtějí.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Patricie"],
    reviews_count: 21,
    avg_rating: 4.8,
    slug: "patricie-praha-1",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-05"),
    updated_at: new Date("2025-01-05")
  },
  {
    id: "1j",
    type: "divka",
    name: "Lenka",
    age: 23,
    height_cm: 166,
    weight_kg: 51,
    breast: "2",
    eyes: "brown",
    tattoos: "no",
    piercing: "no",
    languages: ["CZ"],
    location: "Praha 7",
    services: ["BJ", "Kissing", "69", "GFE"],
    pricing_note: "Od 1900 Kč/hod",
    short_claim: "Usměvavá holka s přirozenou krásou",
    description: `Lenka je přirozená kráska bez operací a s milou povahou.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Lenka"],
    reviews_count: 9,
    avg_rating: 4.5,
    slug: "lenka-praha-7",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-11"),
    updated_at: new Date("2025-01-11")
  },
  {
    id: "1k",
    type: "divka",
    name: "Michaela",
    age: 25,
    height_cm: 170,
    weight_kg: 56,
    breast: "3",
    eyes: "green",
    tattoos: "yes",
    piercing: "no",
    languages: ["CZ", "EN"],
    location: "Praha 8",
    services: ["BJ", "Kissing", "69", "GFE", "Striptease"],
    pricing_note: "Od 2200 Kč/hod",
    short_claim: "Zelené oči a vášnivá povaha",
    description: `Michaela je vášnivá dívka s krásnýma očima.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Michaela"],
    reviews_count: 13,
    avg_rating: 4.6,
    slug: "michaela-praha-8",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-10"),
    updated_at: new Date("2025-01-10")
  },
  {
    id: "1l",
    type: "divka",
    name: "Sabina",
    age: 26,
    height_cm: 174,
    weight_kg: 61,
    breast: "4",
    eyes: "blue",
    tattoos: "no",
    piercing: "yes",
    languages: ["CZ", "EN", "DE"],
    location: "Brno",
    services: ["BJ", "Kissing", "69", "GFE", "Anal", "PSE"],
    pricing_note: "Od 2700 Kč/hod",
    short_claim: "Vysoká blondýna s dokonalou postavou",
    description: `Sabina je modelka s perfektní postavou a zkušenostmi.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Sabina"],
    reviews_count: 19,
    avg_rating: 4.9,
    slug: "sabina-brno",
    status: "publish",
    is_featured: true, // ⭐ PLACENÁ TOP POZICE
    created_at: new Date("2025-01-04"),
    updated_at: new Date("2025-01-04")
  },
  {
    id: "1m",
    type: "divka",
    name: "Klára",
    age: 21,
    height_cm: 163,
    weight_kg: 49,
    breast: "1",
    eyes: "brown",
    tattoos: "no",
    piercing: "no",
    languages: ["CZ"],
    location: "Brno",
    services: ["BJ", "Kissing", "GFE"],
    pricing_note: "Od 1600 Kč/hod",
    short_claim: "Mladá a nezkušená, ale nadšená",
    description: `Klára je mladá začátečnice s přirozeným šarmem.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Klára"],
    reviews_count: 5,
    avg_rating: 4.3,
    slug: "klara-brno",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-13"),
    updated_at: new Date("2025-01-13")
  },
  {
    id: "1n",
    type: "divka",
    name: "Eliška",
    age: 27,
    height_cm: 168,
    weight_kg: 55,
    breast: "2",
    eyes: "blue",
    tattoos: "yes",
    piercing: "yes",
    languages: ["CZ", "EN"],
    location: "Ostrava",
    services: ["BJ", "Kissing", "69", "GFE", "Anal"],
    pricing_note: "Od 2300 Kč/hod",
    short_claim: "Modrooká kráska s rock'n'roll stylem",
    description: `Eliška má alternativní styl a vášnivou povahu.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Eliška"],
    reviews_count: 16,
    avg_rating: 4.7,
    slug: "eliska-ostrava",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-07"),
    updated_at: new Date("2025-01-07")
  },
  {
    id: "1o",
    type: "divka",
    name: "Dominika",
    age: 24,
    height_cm: 167,
    weight_kg: 53,
    breast: "2",
    eyes: "green",
    tattoos: "no",
    piercing: "no",
    languages: ["CZ", "EN"],
    location: "Plzeň",
    services: ["BJ", "Kissing", "69", "GFE"],
    pricing_note: "Od 2000 Kč/hod",
    short_claim: "Inteligentní studentka s krásným úsměvem",
    description: `Dominika studuje medicínu a přivydělává si jako společnice.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Dominika"],
    reviews_count: 11,
    avg_rating: 4.6,
    slug: "dominika-plzen",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-09"),
    updated_at: new Date("2025-01-09")
  },
  {
    id: "1p",
    type: "divka",
    name: "Žaneta",
    age: 30,
    height_cm: 172,
    weight_kg: 59,
    breast: "3",
    eyes: "brown",
    tattoos: "yes",
    piercing: "yes",
    languages: ["CZ", "EN", "RU"],
    location: "Praha 2",
    services: ["BJ", "Kissing", "69", "GFE", "Anal", "Duo", "PSE"],
    pricing_note: "Od 3200 Kč/hod",
    short_claim: "VIP escort s mezinárodní zkušeností",
    description: `Žaneta je top tier escort, která cestuje po celé Evropě.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Žaneta"],
    reviews_count: 27,
    avg_rating: 4.9,
    slug: "zaneta-praha-2",
    status: "publish",
    is_featured: true, // ⭐ PLACENÁ TOP POZICE
    created_at: new Date("2025-01-03"),
    updated_at: new Date("2025-01-03")
  },
  {
    id: "1q",
    type: "divka",
    name: "Andrea",
    age: 23,
    height_cm: 169,
    weight_kg: 54,
    breast: "2",
    eyes: "blue",
    tattoos: "no",
    piercing: "yes",
    languages: ["CZ", "EN"],
    location: "Praha 5",
    services: ["BJ", "Kissing", "69", "GFE"],
    pricing_note: "Od 2000 Kč/hod",
    short_claim: "Mladá blondýnka s anděískou tváří",
    description: `Andrea je milá dívka s přirozenou krásou.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Andrea"],
    reviews_count: 8,
    avg_rating: 4.5,
    slug: "andrea-praha-5",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-11"),
    updated_at: new Date("2025-01-11")
  },
  {
    id: "1r",
    type: "divka",
    name: "Markéta",
    age: 26,
    height_cm: 171,
    weight_kg: 57,
    breast: "3",
    eyes: "brown",
    tattoos: "yes",
    piercing: "no",
    languages: ["CZ"],
    location: "Praha 5",
    services: ["BJ", "Kissing", "69", "GFE", "Striptease"],
    pricing_note: "Od 2200 Kč/hod",
    short_claim: "Vášnivá brunetka s temperamentem",
    description: `Markéta je temperamentní dívka, která miluje svou práci.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Markéta"],
    reviews_count: 12,
    avg_rating: 4.6,
    slug: "marketa-praha-5",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-10"),
    updated_at: new Date("2025-01-10")
  },
  {
    id: "1s",
    type: "divka",
    name: "Natálie",
    age: 24,
    height_cm: 168,
    weight_kg: 53,
    breast: "2",
    eyes: "green",
    tattoos: "no",
    piercing: "yes",
    languages: ["CZ", "EN"],
    location: "Ostrava",
    services: ["BJ", "Kissing", "69", "GFE"],
    pricing_note: "Od 1900 Kč/hod",
    short_claim: "Zelené oči a úsměv, který očaruje",
    description: `Natálie je usměvavá dívka s přirozeným šarmem.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Natálie"],
    reviews_count: 7,
    avg_rating: 4.4,
    slug: "natalie-ostrava",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-12"),
    updated_at: new Date("2025-01-12")
  },
  {
    id: "1t",
    type: "divka",
    name: "Lucie",
    age: 25,
    height_cm: 167,
    weight_kg: 52,
    breast: "2",
    eyes: "blue",
    tattoos: "no",
    piercing: "no",
    languages: ["CZ"],
    location: "Ostrava",
    services: ["BJ", "Kissing", "GFE"],
    pricing_note: "Od 1800 Kč/hod",
    short_claim: "Jemná a citlivá společnice",
    description: `Lucie je citlivá dívka, která vytváří intimní atmosféru.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Lucie"],
    reviews_count: 6,
    avg_rating: 4.3,
    slug: "lucie-ostrava",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-13"),
    updated_at: new Date("2025-01-13")
  },
  {
    id: "1u",
    type: "divka",
    name: "Renata",
    age: 27,
    height_cm: 173,
    weight_kg: 60,
    breast: "3",
    eyes: "brown",
    tattoos: "yes",
    piercing: "yes",
    languages: ["CZ", "EN"],
    location: "Plzeň",
    services: ["BJ", "Kissing", "69", "GFE", "Anal"],
    pricing_note: "Od 2300 Kč/hod",
    short_claim: "Zkušená společnice s vášnivou povahou",
    description: `Renata je zkušená profesionálka, která ví, co muži chtějí.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Renata"],
    reviews_count: 14,
    avg_rating: 4.7,
    slug: "renata-plzen",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-08"),
    updated_at: new Date("2025-01-08")
  },
  {
    id: "1v",
    type: "divka",
    name: "Iveta",
    age: 22,
    height_cm: 165,
    weight_kg: 50,
    breast: "2",
    eyes: "blue",
    tattoos: "no",
    piercing: "no",
    languages: ["CZ"],
    location: "Plzeň",
    services: ["BJ", "Kissing", "69", "GFE"],
    pricing_note: "Od 1700 Kč/hod",
    short_claim: "Mladá a nevinná studentka",
    description: `Iveta je mladá studentka s přirozenou krásou.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Iveta"],
    reviews_count: 5,
    avg_rating: 4.4,
    slug: "iveta-plzen",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-13"),
    updated_at: new Date("2025-01-13")
  },
  {
    id: "2",
    type: "divka",
    name: "Nikol",
    age: 25,
    height_cm: 172,
    weight_kg: 58,
    breast: "3",
    eyes: "blue",
    tattoos: "yes",
    piercing: "yes",
    languages: ["CZ", "EN", "DE"],
    location: "Praha 1",
    services: ["BJ", "Kissing", "69", "GFE", "Anal", "Duo"],
    pricing_note: "Od 2500 Kč/hod",
    short_claim: "Zkušená společnice pro náročné gentlemany",
    description: `Nikol je zkušená escort s několikaletou praxí v oboru.

Specializuje se na GFE služby a doprovod na společenské akce. Její elegantní vystupování a inteligentní konverzace z ní dělají ideální společnici pro businessmeny.

Diskrétnost a profesionalita jsou pro Nikol samozřejmostí.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Nikol profesionální foto"],
    reviews_count: 8,
    avg_rating: 4.6,
    slug: "nikol-praha-1",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-08"),
    updated_at: new Date("2025-01-08")
  },
  {
    id: "3",
    type: "divka",
    name: "Tereza",
    age: 20,
    height_cm: 165,
    weight_kg: 50,
    breast: "2",
    eyes: "brown",
    tattoos: "no",
    piercing: "no",
    languages: ["CZ"],
    location: "Praha 5",
    services: ["BJ", "Kissing", "GFE", "Striptease"],
    pricing_note: "Od 1800 Kč/hod",
    short_claim: "Mladá studentka s přirozeným šarmem",
    description: `Tereza je mladá studentka, která si přivydělává jako společnice.

Nabízí příjemné chvíle v uvolněné atmosféře. Je milá, usměvavá a ráda se baví o různých tématech.

Ideální volba pro ty, kteří hledají autentický GFE zážitek s mladou dívkou.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Tereza portrét"],
    reviews_count: 5,
    avg_rating: 4.4,
    slug: "tereza-praha-5",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-12"),
    updated_at: new Date("2025-01-12")
  },
  {
    id: "4",
    type: "divka",
    name: "Kateřina",
    age: 28,
    height_cm: 175,
    weight_kg: 62,
    breast: "3",
    eyes: "green",
    tattoos: "yes",
    piercing: "no",
    languages: ["CZ", "EN", "RU"],
    location: "Praha 2",
    services: ["BJ", "Kissing", "69", "GFE", "Anal", "COB", "Escort"],
    pricing_note: "Od 3000 Kč/hod",
    short_claim: "VIP escort pro náročnou klientelu",
    description: `Kateřina je top tier escort s mezinárodní zkušeností.

Pravidelně cestuje po Evropě a poskytuje služby pouze vybrané klientele. Její elegance, inteligence a schopnost adaptovat se na jakoukoliv situaci z ní dělají perfektní společnici.

Kateřina mluví plynně třemi jazyky a je ideální volbou pro businessmeny a VIP klienty.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Kateřina VIP foto"],
    reviews_count: 15,
    avg_rating: 4.9,
    slug: "katerina-praha-2",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-05"),
    updated_at: new Date("2025-01-05")
  }
];

// DEMO OSOBY - EROTICKÉ MASÁŽE
export const demoMasseurs: Person[] = [
  {
    id: "5",
    type: "maserka",
    name: "Michaela",
    age: 26,
    height_cm: 170,
    weight_kg: 55,
    breast: "2",
    eyes: "blue",
    tattoos: "no",
    piercing: "no",
    languages: ["CZ", "EN"],
    location: "Praha 4",
    services: ["Klasická masáž", "Tantric", "Body-to-body", "Happy end"],
    pricing_note: "Od 1500 Kč/60 min",
    short_claim: "Certifikovaná masérka s smyslem pro detail",
    description: `Michaela je profesionální masérka s certifikátem a několikaletou praxí.

Specializuje se na erotické a tantrické masáže, které kombinují relaxaci s smyslným prožitkem. Její dotek je jemný, ale zároveň pevný a cílený.

V jejím salonu vás čeká diskrétní prostředí, aromaterapie a nezapomenutelný zážitek.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Michaela masérka"],
    reviews_count: 18,
    avg_rating: 4.7,
    slug: "michaela-praha-4",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-07"),
    updated_at: new Date("2025-01-07")
  },
  {
    id: "5b",
    type: "maserka",
    name: "Petra",
    age: 29,
    height_cm: 168,
    weight_kg: 57,
    breast: "3",
    eyes: "brown",
    tattoos: "yes",
    piercing: "no",
    languages: ["CZ", "EN"],
    location: "Brno",
    services: ["Tantric", "Body-to-body", "Nuru", "Happy end"],
    pricing_note: "Od 1600 Kč/60 min",
    short_claim: "Tantrická masérka s hlubokou energií",
    description: `Petra praktikuje tantru již 5 let. Její masáže jsou duchovní zážitek spojený s fyzickým potěšením.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Petra"],
    reviews_count: 22,
    avg_rating: 4.8,
    slug: "petra-brno",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-05"),
    updated_at: new Date("2025-01-05")
  },
  {
    id: "5c",
    type: "maserka",
    name: "Lucie",
    age: 24,
    height_cm: 165,
    weight_kg: 52,
    breast: "2",
    eyes: "green",
    tattoos: "no",
    piercing: "yes",
    languages: ["CZ"],
    location: "Praha 1",
    services: ["Klasická masáž", "Body-to-body", "Happy end"],
    pricing_note: "Od 1400 Kč/60 min",
    short_claim: "Mladá masérka s něžným dotykem",
    description: `Lucie je mladá, ale zkušená masérka, která vás uvolní svým jemným přístupem.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Lucie"],
    reviews_count: 12,
    avg_rating: 4.6,
    slug: "lucie-praha-1",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-08"),
    updated_at: new Date("2025-01-08")
  },
  {
    id: "5d",
    type: "maserka",
    name: "Ivana",
    age: 32,
    height_cm: 172,
    weight_kg: 60,
    breast: "3",
    eyes: "blue",
    tattoos: "yes",
    piercing: "yes",
    languages: ["CZ", "EN", "DE"],
    location: "Praha 3",
    services: ["Tantric", "Body-to-body", "Nuru", "Prostate", "Happy end"],
    pricing_note: "Od 1800 Kč/60 min",
    short_claim: "Expertka na tantrické rituály",
    description: `Ivana je mezinárodně uznávaná tantrická terapeutka s certifikáty z Indie.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Ivana"],
    reviews_count: 28,
    avg_rating: 4.9,
    slug: "ivana-praha-3",
    status: "publish",
    is_featured: true, // ⭐ PLACENÁ TOP POZICE
    created_at: new Date("2025-01-04"),
    updated_at: new Date("2025-01-04")
  },
  {
    id: "5e",
    type: "maserka",
    name: "Monika",
    age: 27,
    height_cm: 169,
    weight_kg: 56,
    breast: "2",
    eyes: "brown",
    tattoos: "no",
    piercing: "no",
    languages: ["CZ", "EN"],
    location: "Ostrava",
    services: ["Klasická masáž", "Body-to-body", "Happy end"],
    pricing_note: "Od 1300 Kč/60 min",
    short_claim: "Profesionální přístup a příjemná atmosféra",
    description: `Monika nabízí kvalitní masáže v klidném prostředí.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Monika"],
    reviews_count: 14,
    avg_rating: 4.5,
    slug: "monika-ostrava",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-09"),
    updated_at: new Date("2025-01-09")
  },
  {
    id: "5f",
    type: "maserka",
    name: "Zuzana",
    age: 30,
    height_cm: 167,
    weight_kg: 54,
    breast: "2",
    eyes: "green",
    tattoos: "no",
    piercing: "no",
    languages: ["CZ"],
    location: "Plzeň",
    services: ["Tantric", "Body-to-body", "Happy end"],
    pricing_note: "Od 1400 Kč/60 min",
    short_claim: "Tantrická masáž pro uvolnění těla i mysli",
    description: `Zuzana kombinuje klasické techniky s tantrickými prvky.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Zuzana"],
    reviews_count: 9,
    avg_rating: 4.4,
    slug: "zuzana-plzen",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-10"),
    updated_at: new Date("2025-01-10")
  },
  {
    id: "5g",
    type: "maserka",
    name: "Radka",
    age: 28,
    height_cm: 169,
    weight_kg: 56,
    breast: "3",
    eyes: "brown",
    tattoos: "yes",
    piercing: "no",
    languages: ["CZ", "EN"],
    location: "Praha 2",
    services: ["Tantric", "Body-to-body", "Nuru", "Happy end"],
    pricing_note: "Od 1700 Kč/60 min",
    short_claim: "Energická masérka s intuitivním dotykem",
    description: `Radka pracuje s energií těla a umí najít správné body.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Radka"],
    reviews_count: 17,
    avg_rating: 4.7,
    slug: "radka-praha-2",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-06"),
    updated_at: new Date("2025-01-06")
  },
  {
    id: "5h",
    type: "maserka",
    name: "Jana",
    age: 31,
    height_cm: 171,
    weight_kg: 59,
    breast: "2",
    eyes: "blue",
    tattoos: "no",
    piercing: "yes",
    languages: ["CZ", "EN"],
    location: "Praha 6",
    services: ["Klasická masáž", "Body-to-body", "Happy end"],
    pricing_note: "Od 1500 Kč/60 min",
    short_claim: "Profesionální masérka s lékařským vzděláním",
    description: `Jana je certifikovaná fyzioterapeutka, která nabízí i erotické masáže.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Jana"],
    reviews_count: 20,
    avg_rating: 4.8,
    slug: "jana-praha-6",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-05"),
    updated_at: new Date("2025-01-05")
  },
  {
    id: "5i",
    type: "maserka",
    name: "Tereza",
    age: 25,
    height_cm: 166,
    weight_kg: 53,
    breast: "2",
    eyes: "green",
    tattoos: "no",
    piercing: "no",
    languages: ["CZ"],
    location: "Brno",
    services: ["Tantric", "Body-to-body", "Happy end"],
    pricing_note: "Od 1400 Kč/60 min",
    short_claim: "Mladá tantrička s jemným přístupem",
    description: `Tereza je mladá masérka, která se věnuje tantrickým technikám.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Tereza"],
    reviews_count: 10,
    avg_rating: 4.5,
    slug: "tereza-masaze-brno",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-09"),
    updated_at: new Date("2025-01-09")
  },
  {
    id: "6",
    type: "maserka",
    name: "Simona",
    age: 30,
    height_cm: 168,
    weight_kg: 58,
    breast: "3",
    eyes: "brown",
    tattoos: "yes",
    piercing: "yes",
    languages: ["CZ"],
    location: "Praha 6",
    services: ["Nuru", "Body-to-body", "Tantric", "Prostatická masáž"],
    pricing_note: "Od 2000 Kč/90 min",
    short_claim: "Specialistka na Nuru a tantrické masáže",
    description: `Simona se specializuje na nejintenzivnější typy erotických masáží.

Její Nuru masáže jsou legendární - používá pouze prémiové oleje a věnuje se každému klientovi s maximální péčí. Tantric masáže s ní jsou duchovním i fyzickým zážitkem.

Zkušenost a profesionalita jsou u Simony samozřejmostí.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Simona masérka"],
    reviews_count: 22,
    avg_rating: 4.8,
    slug: "simona-praha-6",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-04"),
    updated_at: new Date("2025-01-04")
  },
  {
    id: "7",
    type: "maserka",
    name: "Petra",
    age: 24,
    height_cm: 166,
    weight_kg: 52,
    breast: "2",
    eyes: "green",
    tattoos: "no",
    piercing: "no",
    languages: ["CZ", "EN"],
    location: "Brno",
    services: ["Klasická masáž", "Olejová masáž", "Body-to-body", "Happy end"],
    pricing_note: "Od 1200 Kč/60 min",
    short_claim: "Mladá masérka s citlivým přístupem",
    description: `Petra je mladá masérka, která kombinuje klasické masérské techniky s erotickými prvky.

Její masáže jsou jemné a soustředěné na maximální relaxaci. Petra má dar vytěšit napětí a zároveň navodit smyslnou atmosféru.

Ideální volba pro ty, kteří hledají kombinaci relaxace a erotiky.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Petra masérka"],
    reviews_count: 9,
    avg_rating: 4.5,
    slug: "petra-brno",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-11"),
    updated_at: new Date("2025-01-11")
  },
  {
    id: "5j",
    type: "maserka",
    name: "Kateřina",
    age: 26,
    height_cm: 168,
    weight_kg: 55,
    breast: "2",
    eyes: "blue",
    tattoos: "no",
    piercing: "yes",
    languages: ["CZ", "EN"],
    location: "Praha 7",
    services: ["Klasická masáž", "Tantric", "Body-to-body", "Happy end"],
    pricing_note: "Od 1500 Kč/60 min",
    short_claim: "Šikovné ruce a pozitivní energie",
    description: `Kateřina je masérka, která do své práce vkládá pozitivní energii a profesionalitu. Její masáže kombinují relaxační techniky s erotickými prvky.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Kateřina"],
    reviews_count: 13,
    avg_rating: 4.6,
    slug: "katerina-masaze-praha-7",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-07"),
    updated_at: new Date("2025-01-07")
  },
  {
    id: "5k",
    type: "maserka",
    name: "Veronika",
    age: 29,
    height_cm: 170,
    weight_kg: 58,
    breast: "3",
    eyes: "brown",
    tattoos: "yes",
    piercing: "no",
    languages: ["CZ"],
    location: "Praha 9",
    services: ["Body-to-body", "Tantric", "Nuru", "Happy end"],
    pricing_note: "Od 1600 Kč/60 min",
    short_claim: "Specialistka na Nuru masáže",
    description: `Veronika se specializuje na Nuru masáže a používá pouze prémiové oleje. Její masáže jsou známé pro svou intenzitu a smyslnost.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Veronika"],
    reviews_count: 19,
    avg_rating: 4.8,
    slug: "veronika-masaze-praha-9",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-05"),
    updated_at: new Date("2025-01-05")
  },
  {
    id: "5l",
    type: "maserka",
    name: "Andrea",
    age: 25,
    height_cm: 165,
    weight_kg: 53,
    breast: "2",
    eyes: "green",
    tattoos: "no",
    piercing: "no",
    languages: ["CZ", "EN"],
    location: "Praha 10",
    services: ["Klasická masáž", "Body-to-body", "Happy end"],
    pricing_note: "Od 1300 Kč/60 min",
    short_claim: "Jemný dotyk a příjemná atmosféra",
    description: `Andrea je mladá masérka s jemným přístupem. Její masáže jsou ideální pro relaxaci a uvolnění stresu.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Andrea"],
    reviews_count: 8,
    avg_rating: 4.4,
    slug: "andrea-masaze-praha-10",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-10"),
    updated_at: new Date("2025-01-10")
  },
  {
    id: "5m",
    type: "maserka",
    name: "Denisa",
    age: 28,
    height_cm: 167,
    weight_kg: 56,
    breast: "2",
    eyes: "brown",
    tattoos: "yes",
    piercing: "yes",
    languages: ["CZ", "EN"],
    location: "Plzeň",
    services: ["Tantric", "Body-to-body", "Prostate", "Happy end"],
    pricing_note: "Od 1500 Kč/60 min",
    short_claim: "Tantrička s intuitivním přístupem",
    description: `Denisa praktikuje tantru s důrazem na energii a spojení. Její masáže jsou více než jen fyzický zážitek.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Denisa"],
    reviews_count: 15,
    avg_rating: 4.7,
    slug: "denisa-masaze-plzen",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-06"),
    updated_at: new Date("2025-01-06")
  },
  {
    id: "5n",
    type: "maserka",
    name: "Barbora",
    age: 30,
    height_cm: 172,
    weight_kg: 60,
    breast: "3",
    eyes: "blue",
    tattoos: "no",
    piercing: "yes",
    languages: ["CZ", "EN", "DE"],
    location: "Brno",
    services: ["Tantric", "Body-to-body", "Nuru", "Prostate", "Happy end"],
    pricing_note: "Od 1800 Kč/60 min",
    short_claim: "Zkušená tantrička s mezinárodní praxí",
    description: `Barbora má zkušenosti z tantrických kurzů v Asii. Její masáže kombinují tradiční techniky s moderním přístupem.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Barbora"],
    reviews_count: 21,
    avg_rating: 4.8,
    slug: "barbora-masaze-brno",
    status: "publish",
    is_featured: true, // ⭐ PLACENÁ TOP POZICE
    created_at: new Date("2025-01-04"),
    updated_at: new Date("2025-01-04")
  },
  {
    id: "5o",
    type: "maserka",
    name: "Markéta",
    age: 27,
    height_cm: 168,
    weight_kg: 55,
    breast: "2",
    eyes: "green",
    tattoos: "no",
    piercing: "no",
    languages: ["CZ"],
    location: "Ostrava",
    services: ["Klasická masáž", "Body-to-body", "Happy end"],
    pricing_note: "Od 1200 Kč/60 min",
    short_claim: "Profesionální masérka s lékařským vzděláním",
    description: `Markéta je certifikovaná fyzioterapeutka, která nabízí kombinaci léčebných a erotických masáží.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Markéta"],
    reviews_count: 12,
    avg_rating: 4.5,
    slug: "marketa-masaze-ostrava",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-08"),
    updated_at: new Date("2025-01-08")
  },
  {
    id: "5p",
    type: "maserka",
    name: "Lenka",
    age: 23,
    height_cm: 163,
    weight_kg: 50,
    breast: "1",
    eyes: "blue",
    tattoos: "no",
    piercing: "no",
    languages: ["CZ", "EN"],
    location: "Praha 5",
    services: ["Klasická masáž", "Body-to-body", "Happy end"],
    pricing_note: "Od 1400 Kč/60 min",
    short_claim: "Mladá a milá masérka",
    description: `Lenka je začínající masérka s přirozenou jemností a pozitivním přístupem k práci.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Lenka"],
    reviews_count: 6,
    avg_rating: 4.3,
    slug: "lenka-masaze-praha-5",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-11"),
    updated_at: new Date("2025-01-11")
  },
  {
    id: "5q",
    type: "maserka",
    name: "Kristýna",
    age: 31,
    height_cm: 169,
    weight_kg: 57,
    breast: "2",
    eyes: "brown",
    tattoos: "yes",
    piercing: "yes",
    languages: ["CZ", "EN"],
    location: "Praha 8",
    services: ["Tantric", "Body-to-body", "Nuru", "Happy end"],
    pricing_note: "Od 1700 Kč/60 min",
    short_claim: "Expertka na smyslné masáže",
    description: `Kristýna se specializuje na smyslné masáže, které kombinují tantrické prvky s moderními technikami pro maximální relaxaci.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Kristýna"],
    reviews_count: 17,
    avg_rating: 4.7,
    slug: "kristyna-masaze-praha-8",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-06"),
    updated_at: new Date("2025-01-06")
  },
  {
    id: "5r",
    type: "maserka",
    name: "Nikola",
    age: 26,
    height_cm: 166,
    weight_kg: 54,
    breast: "2",
    eyes: "blue",
    tattoos: "no",
    piercing: "yes",
    languages: ["CZ"],
    location: "Plzeň",
    services: ["Klasická masáž", "Body-to-body", "Happy end"],
    pricing_note: "Od 1300 Kč/60 min",
    short_claim: "Příjemná atmosféra a profesionální přístup",
    description: `Nikola nabízí kvalitní masáže v příjemném prostředí. Její přístup je profesionální a zároveň osobní.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Nikola"],
    reviews_count: 11,
    avg_rating: 4.5,
    slug: "nikola-masaze-plzen",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-09"),
    updated_at: new Date("2025-01-09")
  }
];

// DEMO OSOBY - DOMINY
export const demoDominas: Person[] = [
  {
    id: "8",
    type: "domina",
    name: "Mistress Viktorie",
    age: 32,
    height_cm: 178,
    weight_kg: 65,
    breast: "3",
    eyes: "blue",
    tattoos: "yes",
    piercing: "yes",
    languages: ["CZ", "EN", "DE"],
    location: "Praha 1",
    services: ["Bondage", "Spanking", "CBT", "Strap-on", "Trampling", "Feminizace"],
    pricing_note: "Od 2500 Kč/hod",
    short_claim: "Zkušená domina s vlastním studiem",
    description: `Mistress Viktorie je profesionální domina s 10letou praxí v BDSM komunitě.

Ve svém plně vybaveném studiu nabízí širokou škálu BDSM praktik od lehčích až po hardcore sessions. Bezpečnost a komunikace jsou pro ni prioritou.

Viktorie pracuje pouze s klienty, kteří respektují pravidla SSC (Safe, Sane, Consensual) a jsou schopni jasně komunikovat své hranice.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Mistress Viktorie"],
    reviews_count: 25,
    avg_rating: 4.9,
    slug: "mistress-viktorie-praha-1",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-03"),
    updated_at: new Date("2025-01-03")
  },
  {
    id: "9",
    type: "domina",
    name: "Lady Anastázie",
    age: 28,
    height_cm: 172,
    weight_kg: 60,
    breast: "2",
    eyes: "brown",
    tattoos: "yes",
    piercing: "yes",
    languages: ["CZ", "EN"],
    location: "Praha 3",
    services: ["Bondage", "Spanking", "Electro", "Findom", "Trampling"],
    pricing_note: "Od 2000 Kč/hod",
    short_claim: "Kreativní domina s psychologickým přístupem",
    description: `Lady Anastázie je domina, která klade důraz na psychologickou stránku dominance.

Její sessions jsou vždy individuálně přizpůsobené a kombinují fyzickou i mentální dominanci. Anastázie dokáže vycítit, co sub potřebuje, a dovede ho k jeho hranicím.

Pro ni je BDSM umění, ne jen fyzická aktivita.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Lady Anastázie"],
    reviews_count: 14,
    avg_rating: 4.7,
    slug: "lady-anastazie-praha-3",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-09"),
    updated_at: new Date("2025-01-09")
  },
  {
    id: "9b",
    type: "domina",
    name: "Domina Sabrina",
    age: 35,
    height_cm: 175,
    weight_kg: 63,
    breast: "3",
    eyes: "brown",
    tattoos: "yes",
    piercing: "yes",
    languages: ["CZ", "EN"],
    location: "Brno",
    services: ["Bondage", "Spanking", "CBT", "Wax play", "Strap-on"],
    pricing_note: "Od 2500 Kč/hod",
    short_claim: "Přísná ale spravedlivá domina",
    description: `Domina Sabrina praktikuje BDSM již 12 let a zná všechny aspekty dominance.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Domina Sabrina"],
    reviews_count: 20,
    avg_rating: 4.8,
    slug: "domina-sabrina-brno",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-06"),
    updated_at: new Date("2025-01-06")
  },
  {
    id: "9c",
    type: "domina",
    name: "Lady Morgana",
    age: 29,
    height_cm: 180,
    weight_kg: 68,
    breast: "4",
    eyes: "green",
    tattoos: "yes",
    piercing: "yes",
    languages: ["CZ", "EN", "FR"],
    location: "Praha 2",
    services: ["Bondage", "Spanking", "CBT", "Electro", "Trampling", "Pet play"],
    pricing_note: "Od 3000 Kč/hod",
    short_claim: "Luxury domina pro náročné submissivy",
    description: `Lady Morgana je elitní domina s mezinárodní zkušeností a vlastním vybaveným dungeonem.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Lady Morgana"],
    reviews_count: 16,
    avg_rating: 4.9,
    slug: "lady-morgana-praha-2",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-08"),
    updated_at: new Date("2025-01-08")
  },
  {
    id: "9d",
    type: "domina",
    name: "Mistress Kateřina",
    age: 27,
    height_cm: 175,
    weight_kg: 62,
    breast: "3",
    eyes: "blue",
    tattoos: "yes",
    piercing: "yes",
    languages: ["CZ", "EN"],
    location: "Praha 3",
    services: ["Bondage", "Spanking", "CBT", "Strap-on", "Feminizace"],
    pricing_note: "Od 2200 Kč/hod",
    short_claim: "Přísná a metodická domina",
    description: `Mistress Kateřina je známá svým přísným, ale spravedlivým přístupem. Její sessions jsou pečlivě strukturované a respektují hranice.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Mistress Kateřina"],
    reviews_count: 14,
    avg_rating: 4.7,
    slug: "mistress-katerina-praha-3",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-07"),
    updated_at: new Date("2025-01-07")
  },
  {
    id: "9e",
    type: "domina",
    name: "Lady Eliška",
    age: 30,
    height_cm: 173,
    weight_kg: 61,
    breast: "2",
    eyes: "brown",
    tattoos: "yes",
    piercing: "yes",
    languages: ["CZ", "EN"],
    location: "Praha 5",
    services: ["Bondage", "Spanking", "Trampling", "Findom", "Humiliation"],
    pricing_note: "Od 2400 Kč/hod",
    short_claim: "Psychologická dominance na vysoké úrovni",
    description: `Lady Eliška se specializuje na psychologickou dominanci a mentální kontrolu. Její sessions jsou intenzivní a nezapomenutelné.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Lady Eliška"],
    reviews_count: 18,
    avg_rating: 4.8,
    slug: "lady-eliska-praha-5",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-06"),
    updated_at: new Date("2025-01-06")
  },
  {
    id: "9f",
    type: "domina",
    name: "Domina Andrea",
    age: 26,
    height_cm: 170,
    weight_kg: 58,
    breast: "2",
    eyes: "green",
    tattoos: "no",
    piercing: "yes",
    languages: ["CZ"],
    location: "Praha 6",
    services: ["Bondage", "Spanking", "CBT", "Wax play"],
    pricing_note: "Od 2000 Kč/hod",
    short_claim: "Mladá ale zkušená domina",
    description: `Andrea je mladá domina s 5letou praxí v BDSM komunitě. Její sessions jsou kreativní a vždy bezpečné.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Domina Andrea"],
    reviews_count: 11,
    avg_rating: 4.6,
    slug: "domina-andrea-praha-6",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-08"),
    updated_at: new Date("2025-01-08")
  },
  {
    id: "9g",
    type: "domina",
    name: "Lady Petra",
    age: 33,
    height_cm: 177,
    weight_kg: 65,
    breast: "3",
    eyes: "brown",
    tattoos: "yes",
    piercing: "yes",
    languages: ["CZ", "EN", "DE"],
    location: "Praha 1",
    services: ["Bondage", "Spanking", "CBT", "Electro", "Strap-on", "Trampling"],
    pricing_note: "Od 2800 Kč/hod",
    short_claim: "Expertka na hardcore sessions",
    description: `Lady Petra je zkušená domina specializující se na intenzivní hardcore sessions. Vhodná pouze pro zkušené submissive.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Lady Petra"],
    reviews_count: 22,
    avg_rating: 4.9,
    slug: "lady-petra-praha-1",
    status: "publish",
    is_featured: true, // ⭐ PLACENÁ TOP POZICE
    created_at: new Date("2025-01-04"),
    updated_at: new Date("2025-01-04")
  },
  {
    id: "9h",
    type: "domina",
    name: "Mistress Denisa",
    age: 28,
    height_cm: 172,
    weight_kg: 60,
    breast: "2",
    eyes: "blue",
    tattoos: "yes",
    piercing: "no",
    languages: ["CZ", "EN"],
    location: "Praha 4",
    services: ["Bondage", "Spanking", "Feminizace", "Strap-on"],
    pricing_note: "Od 2200 Kč/hod",
    short_claim: "Specialistka na feminizaci",
    description: `Mistress Denisa se specializuje na feminizaci a cross-dressing. Má kompletní kolekci oblečení a kosmetiky.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Mistress Denisa"],
    reviews_count: 15,
    avg_rating: 4.7,
    slug: "mistress-denisa-praha-4",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-07"),
    updated_at: new Date("2025-01-07")
  },
  {
    id: "9i",
    type: "domina",
    name: "Lady Barbora",
    age: 31,
    height_cm: 174,
    weight_kg: 63,
    breast: "3",
    eyes: "green",
    tattoos: "yes",
    piercing: "yes",
    languages: ["CZ", "EN"],
    location: "Brno",
    services: ["Bondage", "Spanking", "CBT", "Trampling", "Pet play"],
    pricing_note: "Od 2300 Kč/hod",
    short_claim: "Kreativní domina s vlastním studiem",
    description: `Lady Barbora provozuje vlastní BDSM studio v Brně. Její sessions jsou známé pro kreativitu a profesionalitu.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Lady Barbora"],
    reviews_count: 17,
    avg_rating: 4.8,
    slug: "lady-barbora-brno",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-05"),
    updated_at: new Date("2025-01-05")
  },
  {
    id: "9j",
    type: "domina",
    name: "Domina Lucie",
    age: 25,
    height_cm: 168,
    weight_kg: 56,
    breast: "2",
    eyes: "brown",
    tattoos: "no",
    piercing: "yes",
    languages: ["CZ"],
    location: "Brno",
    services: ["Bondage", "Spanking", "Wax play", "Strap-on"],
    pricing_note: "Od 1900 Kč/hod",
    short_claim: "Mladá domina s vášní pro BDSM",
    description: `Lucie je mladá domina, která praktikuje BDSM z vášně. Její sessions jsou energické a vždy bezpečné.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Domina Lucie"],
    reviews_count: 9,
    avg_rating: 4.5,
    slug: "domina-lucie-brno",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-09"),
    updated_at: new Date("2025-01-09")
  },
  {
    id: "9k",
    type: "domina",
    name: "Lady Markéta",
    age: 34,
    height_cm: 176,
    weight_kg: 64,
    breast: "3",
    eyes: "blue",
    tattoos: "yes",
    piercing: "yes",
    languages: ["CZ", "EN", "RU"],
    location: "Praha 2",
    services: ["Bondage", "Spanking", "CBT", "Electro", "Trampling", "Findom"],
    pricing_note: "Od 2700 Kč/hod",
    short_claim: "Zkušená domina s mezinárodní klientelou",
    description: `Lady Markéta má více než 12 let zkušeností a pracuje s klienty po celé Evropě. Její expertise je nepopíratelná.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Lady Markéta"],
    reviews_count: 24,
    avg_rating: 4.9,
    slug: "lady-marketa-praha-2",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-03"),
    updated_at: new Date("2025-01-03")
  },
  {
    id: "9l",
    type: "domina",
    name: "Mistress Jana",
    age: 29,
    height_cm: 171,
    weight_kg: 59,
    breast: "2",
    eyes: "brown",
    tattoos: "yes",
    piercing: "yes",
    languages: ["CZ", "EN"],
    location: "Ostrava",
    services: ["Bondage", "Spanking", "CBT", "Strap-on"],
    pricing_note: "Od 2100 Kč/hod",
    short_claim: "První profesionální domina v Ostravě",
    description: `Mistress Jana je průkopnice BDSM scény v Ostravě. Nabízí profesionální sessions ve vlastním studiu.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Mistress Jana"],
    reviews_count: 13,
    avg_rating: 4.7,
    slug: "mistress-jana-ostrava",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-08"),
    updated_at: new Date("2025-01-08")
  },
  {
    id: "9m",
    type: "domina",
    name: "Lady Tereza",
    age: 27,
    height_cm: 169,
    weight_kg: 57,
    breast: "2",
    eyes: "green",
    tattoos: "no",
    piercing: "yes",
    languages: ["CZ"],
    location: "Plzeň",
    services: ["Bondage", "Spanking", "Wax play", "Trampling"],
    pricing_note: "Od 2000 Kč/hod",
    short_claim: "Profesionální domina v Plzni",
    description: `Lady Tereza nabízí kvalitní BDSM sessions v diskrétním prostředí v Plzni. SSC principy jsou pro ni prioritou.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Lady Tereza"],
    reviews_count: 10,
    avg_rating: 4.6,
    slug: "lady-tereza-plzen",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-09"),
    updated_at: new Date("2025-01-09")
  },
  {
    id: "9n",
    type: "domina",
    name: "Domina Veronika",
    age: 30,
    height_cm: 173,
    weight_kg: 61,
    breast: "3",
    eyes: "blue",
    tattoos: "yes",
    piercing: "yes",
    languages: ["CZ", "EN"],
    location: "Praha 7",
    services: ["Bondage", "Spanking", "CBT", "Electro", "Pet play"],
    pricing_note: "Od 2400 Kč/hod",
    short_claim: "Specialistka na pet play a role-play",
    description: `Domina Veronika je expertka na pet play a kreativní role-play scenarios. Její sessions jsou vždy jedinečné.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Domina Veronika"],
    reviews_count: 16,
    avg_rating: 4.8,
    slug: "domina-veronika-praha-7",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-06"),
    updated_at: new Date("2025-01-06")
  },
  {
    id: "9o",
    type: "domina",
    name: "Lady Simona",
    age: 32,
    height_cm: 175,
    weight_kg: 62,
    breast: "2",
    eyes: "brown",
    tattoos: "yes",
    piercing: "no",
    languages: ["CZ", "EN", "DE"],
    location: "Praha 8",
    services: ["Bondage", "Spanking", "CBT", "Strap-on", "Trampling"],
    pricing_note: "Od 2500 Kč/hod",
    short_claim: "Striktní domina s lékařským vzděláním",
    description: `Lady Simona má lékařské vzdělání, což jí dává unikátní pohled na BDSM praktiky. Bezpečnost je u ní na prvním místě.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Lady Simona"],
    reviews_count: 19,
    avg_rating: 4.8,
    slug: "lady-simona-praha-8",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-05"),
    updated_at: new Date("2025-01-05")
  },
  {
    id: "9p",
    type: "domina",
    name: "Mistress Nikola",
    age: 26,
    height_cm: 170,
    weight_kg: 58,
    breast: "2",
    eyes: "blue",
    tattoos: "yes",
    piercing: "yes",
    languages: ["CZ", "EN"],
    location: "Praha 9",
    services: ["Bondage", "Spanking", "Feminizace", "Humiliation"],
    pricing_note: "Od 2100 Kč/hod",
    short_claim: "Kreativní přístup k dominanci",
    description: `Mistress Nikola je mladá, ale velmi kreativní domina. Každá její session je unikátní a přizpůsobená submissive.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Mistress Nikola"],
    reviews_count: 12,
    avg_rating: 4.6,
    slug: "mistress-nikola-praha-9",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-07"),
    updated_at: new Date("2025-01-07")
  },
  {
    id: "9q",
    type: "domina",
    name: "Lady Klára",
    age: 28,
    height_cm: 172,
    weight_kg: 60,
    breast: "3",
    eyes: "green",
    tattoos: "yes",
    piercing: "yes",
    languages: ["CZ"],
    location: "Praha 10",
    services: ["Bondage", "Spanking", "CBT", "Wax play", "Trampling"],
    pricing_note: "Od 2200 Kč/hod",
    short_claim: "Přísná ale empatická domina",
    description: `Lady Klára kombinuje přísnost s empatií. Umí být tvrdá, ale vždy respektuje hranice a safe words.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Lady Klára"],
    reviews_count: 14,
    avg_rating: 4.7,
    slug: "lady-klara-praha-10",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-06"),
    updated_at: new Date("2025-01-06")
  },
  {
    id: "9r",
    type: "domina",
    name: "Domina Michaela",
    age: 31,
    height_cm: 174,
    weight_kg: 63,
    breast: "2",
    eyes: "brown",
    tattoos: "yes",
    piercing: "yes",
    languages: ["CZ", "EN"],
    location: "Brno",
    services: ["Bondage", "Spanking", "CBT", "Electro", "Strap-on"],
    pricing_note: "Od 2400 Kč/hod",
    short_claim: "Technicky zdatná domina",
    description: `Domina Michaela je expertka na technické aspekty BDSM. Její bondage je umění a elektro sessions jsou legendární.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Domina Michaela"],
    reviews_count: 18,
    avg_rating: 4.8,
    slug: "domina-michaela-brno",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-05"),
    updated_at: new Date("2025-01-05")
  },
  {
    id: "9s",
    type: "domina",
    name: "Lady Kristýna",
    age: 29,
    height_cm: 171,
    weight_kg: 59,
    breast: "2",
    eyes: "blue",
    tattoos: "no",
    piercing: "yes",
    languages: ["CZ", "EN"],
    location: "Ostrava",
    services: ["Bondage", "Spanking", "Trampling", "Findom"],
    pricing_note: "Od 2200 Kč/hod",
    short_claim: "Elegantní domina s přísným přístupem",
    description: `Lady Kristýna je elegantní domina, která vyžaduje absolutní respekt a poslušnost. Její sessions jsou intenzivní.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Lady Kristýna"],
    reviews_count: 11,
    avg_rating: 4.7,
    slug: "lady-kristyna-ostrava",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-08"),
    updated_at: new Date("2025-01-08")
  },
  {
    id: "9t",
    type: "domina",
    name: "Mistress Lenka",
    age: 27,
    height_cm: 169,
    weight_kg: 57,
    breast: "2",
    eyes: "green",
    tattoos: "yes",
    piercing: "yes",
    languages: ["CZ"],
    location: "Plzeň",
    services: ["Bondage", "Spanking", "CBT", "Feminizace"],
    pricing_note: "Od 2000 Kč/hod",
    short_claim: "Vášnivá domina s kreativním přístupem",
    description: `Mistress Lenka je vášnivá domina, která miluje svou práci. Její sessions jsou kreativní a vždy respektují SSC principy.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Mistress Lenka"],
    reviews_count: 10,
    avg_rating: 4.6,
    slug: "mistress-lenka-plzen",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-09"),
    updated_at: new Date("2025-01-09")
  },
  {
    id: "9u",
    type: "domina",
    name: "Lady Ivana",
    age: 33,
    height_cm: 176,
    weight_kg: 64,
    breast: "3",
    eyes: "brown",
    tattoos: "yes",
    piercing: "yes",
    languages: ["CZ", "EN", "IT"],
    location: "Praha 1",
    services: ["Bondage", "Spanking", "CBT", "Electro", "Trampling", "Pet play", "Findom"],
    pricing_note: "Od 2900 Kč/hod",
    short_claim: "VIP domina s mezinárodní reputací",
    description: `Lady Ivana je VIP domina s mezinárodní reputací. Pracuje pouze s ověřenými klienty a nabízí nejvyšší standard BDSM sessions.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["Lady Ivana"],
    reviews_count: 26,
    avg_rating: 4.9,
    slug: "lady-ivana-praha-1",
    status: "publish",
    is_featured: true, // ⭐ PLACENÁ TOP POZICE
    created_at: new Date("2025-01-02"),
    updated_at: new Date("2025-01-02")
  }
];

// DEMO OSOBY - DIGITÁLNÍ MODELKY
export const demoDigitalModels: Person[] = [
  {
    id: "dm1",
    type: "digitalmodelka",
    name: "SarahCzech",
    age: 22,
    height_cm: 168,
    weight_kg: 54,
    breast: "2",
    eyes: "blue",
    tattoos: "yes",
    piercing: "yes",
    languages: ["CZ", "EN"],
    location: "Praha",
    services: ["OnlyFans", "Fansly", "Custom Content", "Sexting", "Dick Ratings"],
    pricing_note: "OF: $9.99/měs, Custom od $20",
    short_claim: "Sexy OnlyFans creator s přes 10k fanoušky",
    description: `SarahCzech je populární česká OnlyFans modelka s aktivním obsahem. Denně přidává nové fotky a videa, odpovídá na zprávy a vytváří custom content na přání.

Nabízí také Sexting sessions a osobní Dick Ratings s upřímným feedbackem.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["SarahCzech"],
    reviews_count: 28,
    avg_rating: 4.8,
    slug: "sarahczech-onlyfans",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-15"),
    updated_at: new Date("2025-01-15")
  },
  {
    id: "dm2",
    type: "digitalmodelka",
    name: "KatkaFeet",
    age: 25,
    height_cm: 170,
    weight_kg: 56,
    breast: "2",
    eyes: "brown",
    tattoos: "no",
    piercing: "yes",
    languages: ["CZ", "EN"],
    location: "Brno",
    services: ["OnlyFans", "Foot Fetish", "Custom Content", "Video Calls"],
    pricing_note: "OF: $12.99/měs, Video call $50/15min",
    short_claim: "Foot fetish content creator s exkluzivním obsahem",
    description: `KatkaFeet se specializuje na foot fetish content. Nabízí profesionální fotky, videa a custom content zaměřený na nohy.

Pravidelné video cally s fanoušky a osobní přístup.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["KatkaFeet"],
    reviews_count: 18,
    avg_rating: 4.7,
    slug: "katkafeet-onlyfans",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-14"),
    updated_at: new Date("2025-01-14")
  },
  {
    id: "dm3",
    type: "digitalmodelka",
    name: "LucyRoleplay",
    age: 24,
    height_cm: 165,
    weight_kg: 52,
    breast: "3",
    eyes: "green",
    tattoos: "yes",
    piercing: "no",
    languages: ["CZ", "EN"],
    location: "Praha",
    services: ["Fansly", "Patreon", "Roleplay", "JOI", "GF Experience"],
    pricing_note: "Fansly: od $14.99/měs",
    short_claim: "Profesionální roleplay a JOI content na Fansly",
    description: `Lucy vytváří kvalitní roleplay a JOI videa. Specializuje se na personalizovaný content a virtuální GF experience.

Aktivní komunikace s fanoušky a pravidelný nový obsah.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["LucyRoleplay"],
    reviews_count: 22,
    avg_rating: 4.9,
    slug: "lucyroleplay-fansly",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-13"),
    updated_at: new Date("2025-01-13")
  },
  {
    id: "dm4",
    type: "digitalmodelka",
    name: "MiaCzech",
    age: 21,
    height_cm: 172,
    weight_kg: 58,
    breast: "3",
    eyes: "blue",
    tattoos: "no",
    piercing: "yes",
    languages: ["CZ", "EN", "DE"],
    location: "Ostrava",
    services: ["OnlyFans", "Sexting", "Video Calls", "Custom Content"],
    pricing_note: "OF: $7.99/měs",
    short_claim: "Mladá česká modelka s aktivním sexting",
    description: `Mia je mladá a energická modelka, která miluje komunikaci se svými fanoušky. Denně odpovídá na zprávy a dělá sexting sessions.

Výborná pro ty, kteří hledají osobní přístup.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["MiaCzech"],
    reviews_count: 15,
    avg_rating: 4.6,
    slug: "miaczech-onlyfans",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-16"),
    updated_at: new Date("2025-01-16")
  },
  {
    id: "dm5",
    type: "digitalmodelka",
    name: "TerezaGamer",
    age: 23,
    height_cm: 167,
    weight_kg: 53,
    breast: "2",
    eyes: "brown",
    tattoos: "yes",
    piercing: "yes",
    languages: ["CZ", "EN"],
    location: "Plzeň",
    services: ["Fansly", "OnlyFans", "Cosplay", "Gaming Content"],
    pricing_note: "OF: $9.99/měs, Fansly: $11.99/měs",
    short_claim: "Gamer girl s cosplay a spicy contentem",
    description: `Tereza kombinuje gaming content s erotickým cosplay. Pravidelné streamy, fotky v cosplay kostýmech a exkluzivní behind the scenes obsah.

Aktivní na více platformách.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["TerezaGamer"],
    reviews_count: 20,
    avg_rating: 4.7,
    slug: "terezagamer-fansly",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-12"),
    updated_at: new Date("2025-01-12")
  },
  {
    id: "dm6",
    type: "digitalmodelka",
    name: "KlaraBaby",
    age: 20,
    height_cm: 163,
    weight_kg: 50,
    breast: "2",
    eyes: "blue",
    tattoos: "no",
    piercing: "yes",
    languages: ["CZ", "EN"],
    location: "Praha",
    services: ["OnlyFans", "Sexting", "Dick Ratings", "Custom Content"],
    pricing_note: "OF: $8.99/měs",
    short_claim: "Mladá cute modelka s každodenním contentem",
    description: `Klára je mladá modelka, která přidává nový obsah každý den. Specialita: cute selfies, sexting sessions a osobní přístup k fanouškům.

Odpovídá na všechny zprávy osobně.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["KlaraBaby"],
    reviews_count: 14,
    avg_rating: 4.6,
    slug: "klarababy-onlyfans",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-15"),
    updated_at: new Date("2025-01-15")
  },
  {
    id: "dm7",
    type: "digitalmodelka",
    name: "AndreaFindom",
    age: 28,
    height_cm: 172,
    weight_kg: 60,
    breast: "3",
    eyes: "brown",
    tattoos: "yes",
    piercing: "yes",
    languages: ["CZ", "EN", "DE"],
    location: "Praha",
    services: ["OnlyFans", "Findom", "Humiliation", "Custom Content"],
    pricing_note: "OF: $19.99/měs",
    short_claim: "Findom Goddess - platíš za pozornost",
    description: `Andrea je Findom Goddess specializující se na finanční dominanci a humiliation. Pokud hledáš skutečnou dominantní ženu online, Andrea je ta pravá.

VIP content a tributes vítány.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["AndreaFindom"],
    reviews_count: 22,
    avg_rating: 4.8,
    slug: "andreafindom-onlyfans",
    status: "publish",
    is_featured: true, // ⭐ PLACENÁ TOP POZICE
    created_at: new Date("2025-01-10"),
    updated_at: new Date("2025-01-10")
  },
  {
    id: "dm8",
    type: "digitalmodelka",
    name: "NikkiFit",
    age: 26,
    height_cm: 170,
    weight_kg: 56,
    breast: "2",
    eyes: "green",
    tattoos: "yes",
    piercing: "no",
    languages: ["CZ", "EN"],
    location: "Brno",
    services: ["OnlyFans", "Fansly", "Fitness Content", "JOI"],
    pricing_note: "OF: $11.99/měs",
    short_claim: "Fitness modelka s erotickým contentem",
    description: `Nikki je fitness instruktorka, která sdílí workout videa i sexy obsah. Kombinace fitness motivace a erotiky.

Pravidelné JOI videa a workout guides.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["NikkiFit"],
    reviews_count: 17,
    avg_rating: 4.7,
    slug: "nikkifit-onlyfans",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-13"),
    updated_at: new Date("2025-01-13")
  },
  {
    id: "dm9",
    type: "digitalmodelka",
    name: "DenickaXXX",
    age: 24,
    height_cm: 168,
    weight_kg: 55,
    breast: "3",
    eyes: "brown",
    tattoos: "yes",
    piercing: "yes",
    languages: ["CZ", "EN"],
    location: "Praha",
    services: ["OnlyFans", "Fansly", "B/G Content", "Custom Videos"],
    pricing_note: "OF: $14.99/měs",
    short_claim: "Hardcore content creator s B/G videi",
    description: `Deniska vytváří hardcore obsah včetně B/G videí. Pro fanoušky explicitního contentu.

Custom videa na přání, nový obsah 3x týdně.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["DenickaXXX"],
    reviews_count: 25,
    avg_rating: 4.9,
    slug: "denicka-onlyfans",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-11"),
    updated_at: new Date("2025-01-11")
  },
  {
    id: "dm10",
    type: "digitalmodelka",
    name: "VeronikaTease",
    age: 22,
    height_cm: 165,
    weight_kg: 52,
    breast: "2",
    eyes: "blue",
    tattoos: "no",
    piercing: "yes",
    languages: ["CZ"],
    location: "Ostrava",
    services: ["OnlyFans", "Tease Content", "Lingerie", "Softcore"],
    pricing_note: "OF: $6.99/měs",
    short_claim: "Tease queen - softcore elegance",
    description: `Veronika se specializuje na tease a softcore content. Elegantní lingerie fotky a videa, které nechávají něco představivosti.

Ideální pro fanoušky softcore obsahu.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["VeronikaTease"],
    reviews_count: 11,
    avg_rating: 4.5,
    slug: "veronnikatease-onlyfans",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-14"),
    updated_at: new Date("2025-01-14")
  },
  {
    id: "dm11",
    type: "digitalmodelka",
    name: "BarbiBimbo",
    age: 23,
    height_cm: 169,
    weight_kg: 54,
    breast: "4",
    eyes: "blue",
    tattoos: "no",
    piercing: "yes",
    languages: ["CZ", "EN"],
    location: "Praha",
    services: ["OnlyFans", "Fansly", "Bimbo Content", "Video Calls"],
    pricing_note: "OF: $12.99/měs",
    short_claim: "Česká bimbo princess s velkým obsahem",
    description: `Barbi je bimbo influencer s velkým důrazem na sexy look. Pravidelné fotky, videa a video cally.

VIP tier pro nejlepší content.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["BarbiBimbo"],
    reviews_count: 19,
    avg_rating: 4.7,
    slug: "barbibimbo-onlyfans",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-12"),
    updated_at: new Date("2025-01-12")
  },
  {
    id: "dm12",
    type: "digitalmodelka",
    name: "LenkaNaughty",
    age: 25,
    height_cm: 167,
    weight_kg: 53,
    breast: "2",
    eyes: "green",
    tattoos: "yes",
    piercing: "yes",
    languages: ["CZ", "EN"],
    location: "Brno",
    services: ["OnlyFans", "Sexting", "GF Experience", "Custom Content"],
    pricing_note: "OF: $9.99/měs",
    short_claim: "Naughty girlfriend experience online",
    description: `Lenka nabízí virtuální girlfriend experience. Každodenní komunikace, sexting sessions a osobní přístup.

Ideální pro ty, kteří hledají connection s modelkou.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["LenkaNaughty"],
    reviews_count: 16,
    avg_rating: 4.8,
    slug: "lenkanaughty-onlyfans",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-13"),
    updated_at: new Date("2025-01-13")
  },
  {
    id: "dm13",
    type: "digitalmodelka",
    name: "PetraAnna",
    age: 27,
    height_cm: 171,
    weight_kg: 58,
    breast: "3",
    eyes: "brown",
    tattoos: "yes",
    piercing: "no",
    languages: ["CZ", "EN"],
    location: "Praha",
    services: ["OnlyFans", "Fansly", "Solo Content", "Toy Play"],
    pricing_note: "OF: $10.99/měs",
    short_claim: "Solo queen s toy show videi",
    description: `Petra vytváří kvalitní solo content s různými toys. Pravidelné toy show videa a fotky.

Nový obsah 4x týdně, custom requests welcome.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["PetraAnna"],
    reviews_count: 21,
    avg_rating: 4.8,
    slug: "petraanna-onlyfans",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-11"),
    updated_at: new Date("2025-01-11")
  },
  {
    id: "dm14",
    type: "digitalmodelka",
    name: "SimonaSexy",
    age: 29,
    height_cm: 173,
    weight_kg: 61,
    breast: "3",
    eyes: "blue",
    tattoos: "yes",
    piercing: "yes",
    languages: ["CZ", "EN", "DE"],
    location: "Plzeň",
    services: ["OnlyFans", "MILF Content", "Roleplay", "Custom Videos"],
    pricing_note: "OF: $13.99/měs",
    short_claim: "Sexy MILF s roleplay specialitou",
    description: `Simona je zkušená content creator specializující se na MILF a roleplay content. Profesionální videa a fotky.

Custom roleplay scenarios na přání.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["SimonaSexy"],
    reviews_count: 23,
    avg_rating: 4.9,
    slug: "simonasexy-onlyfans",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-10"),
    updated_at: new Date("2025-01-10")
  },
  {
    id: "dm15",
    type: "digitalmodelka",
    name: "JanaWild",
    age: 21,
    height_cm: 164,
    weight_kg: 51,
    breast: "2",
    eyes: "brown",
    tattoos: "no",
    piercing: "yes",
    languages: ["CZ"],
    location: "Ostrava",
    services: ["OnlyFans", "Student Content", "Amateur Videos"],
    pricing_note: "OF: $7.99/měs",
    short_claim: "Amateur studentka s natural contentem",
    description: `Jana je studentka, která vytváří amatérský natural content. Žádné profesionální produkce, jen autentické videa a fotky.

Cenově dostupná a aktivní.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["JanaWild"],
    reviews_count: 9,
    avg_rating: 4.4,
    slug: "janawild-onlyfans",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-15"),
    updated_at: new Date("2025-01-15")
  },
  {
    id: "dm16",
    type: "digitalmodelka",
    name: "KristynaLux",
    age: 30,
    height_cm: 175,
    weight_kg: 62,
    breast: "4",
    eyes: "green",
    tattoos: "yes",
    piercing: "yes",
    languages: ["CZ", "EN", "FR"],
    location: "Praha",
    services: ["OnlyFans", "Fansly", "Luxury Content", "PPV Shows"],
    pricing_note: "OF: $19.99/měs + PPV",
    short_claim: "Luxury content creator s premium shows",
    description: `Kristýna vytváří luxury high-end content. Profesionální fotky a videa, pravidelné PPV shows.

Pro náročné fanoušky, kteří hledají kvalitu.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["KristynaLux"],
    reviews_count: 31,
    avg_rating: 4.9,
    slug: "kristynalux-onlyfans",
    status: "publish",
    is_featured: true, // ⭐ PLACENÁ TOP POZICE
    created_at: new Date("2025-01-08"),
    updated_at: new Date("2025-01-08")
  },
  {
    id: "dm17",
    type: "digitalmodelka",
    name: "MonikaDirty",
    age: 26,
    height_cm: 168,
    weight_kg: 55,
    breast: "2",
    eyes: "blue",
    tattoos: "yes",
    piercing: "yes",
    languages: ["CZ", "EN"],
    location: "Brno",
    services: ["OnlyFans", "Dirty Talk", "Sexting", "Audio Content"],
    pricing_note: "OF: $10.99/měs",
    short_claim: "Dirty talk queen s audio contentem",
    description: `Monika se specializuje na dirty talk a audio content. Pokud máš rád českou dirty talk, Monika je pro tebe.

Pravidelné audio zprávy a sexting sessions.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["MonikaDirty"],
    reviews_count: 18,
    avg_rating: 4.7,
    slug: "monikadirty-onlyfans",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-12"),
    updated_at: new Date("2025-01-12")
  },
  {
    id: "dm18",
    type: "digitalmodelka",
    name: "NatalieFlex",
    age: 24,
    height_cm: 166,
    weight_kg: 52,
    breast: "2",
    eyes: "brown",
    tattoos: "no",
    piercing: "no",
    languages: ["CZ", "EN"],
    location: "Praha",
    services: ["OnlyFans", "Yoga Content", "Flexibility", "Sensual Videos"],
    pricing_note: "OF: $11.99/měs",
    short_claim: "Flexible yoga instructor s sensual contentem",
    description: `Natalie je yoga instruktorka, která kombinuje flexibility s erotickým contentem. Unique niche pro fanoušky flexibility.

Pravidelná yoga videa a stretching sessions.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["NatalieFlex"],
    reviews_count: 14,
    avg_rating: 4.6,
    slug: "natalieflex-onlyfans",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-13"),
    updated_at: new Date("2025-01-13")
  },
  {
    id: "dm19",
    type: "digitalmodelka",
    name: "DominikaDom",
    age: 28,
    height_cm: 174,
    weight_kg: 61,
    breast: "3",
    eyes: "green",
    tattoos: "yes",
    piercing: "yes",
    languages: ["CZ", "EN"],
    location: "Praha",
    services: ["OnlyFans", "Femdom Content", "JOI", "CEI"],
    pricing_note: "OF: $15.99/měs",
    short_claim: "Online Femdom s JOI a CEI videi",
    description: `Dominika je online dominatrix specializující se na Femdom content. JOI, CEI a instructional videa pro submissive.

Striktní ale spravedlivá online Mistress.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["DominikaDom"],
    reviews_count: 20,
    avg_rating: 4.8,
    slug: "dominikadom-onlyfans",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-11"),
    updated_at: new Date("2025-01-11")
  },
  {
    id: "dm20",
    type: "digitalmodelka",
    name: "EliskaSweet",
    age: 22,
    height_cm: 162,
    weight_kg: 49,
    breast: "1",
    eyes: "blue",
    tattoos: "no",
    piercing: "yes",
    languages: ["CZ"],
    location: "Plzeň",
    services: ["OnlyFans", "Sweet Content", "Girl Next Door"],
    pricing_note: "OF: $6.99/měs",
    short_claim: "Sweet girl next door s natural contentem",
    description: `Eliška je sweet girl next door typ modelky. Natural beauty bez operací, autentický obsah.

Pro fanoušky natural a cute obsahu.`,
    gallery: ["/placeholder.jpg"],
    alt_texts: ["EliskaSweet"],
    reviews_count: 12,
    avg_rating: 4.5,
    slug: "eliskasweet-onlyfans",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-14"),
    updated_at: new Date("2025-01-14")
  }
];

// DEMO ORGANIZACE - PODNIKY
export const demoClubs: Organization[] = [
  {
    id: "org1",
    type: "podnik",
    name: "Club Paradise",
    location: "Praha 2",
    contacts: {
      phone: "+420 777 123 456",
      web: "https://club-paradise.cz",
      address: "Vinohradská 123, Praha 2",
      email: "info@club-paradise.cz"
    },
    description: `Club Paradise je luxusní erotický klub v centru Prahy s více než 10letou tradicí.

Nabízíme:
• Elegantní prostředí s bar lounge
• Výběr z 15+ profesionálních společnic
• VIP místnosti s jacuzzi
• Diskrétnost a bezpečnost
• Otevřeno 7 dní v týdnu

Naše společnice jsou pečlivě vybírané, profesionální a nabízí širokou škálu služeb. Každá návštěva u nás je garantovaně nezapomenutelným zážitkem.`,
    gallery: ["/placeholder.jpg"],
    people_ids: ["1", "2", "1i", "1p", "4"],
    reviews_count: 28,
    avg_rating: 4.7,
    slug: "club-paradise-praha-2",
    status: "publish",
    is_featured: true, // ⭐ PLACENÁ TOP POZICE
    created_at: new Date("2025-01-01"),
    updated_at: new Date("2025-01-01")
  },
  {
    id: "org2",
    type: "podnik",
    name: "Privát U Andělů",
    location: "Praha 5",
    contacts: {
      phone: "+420 777 987 654",
      address: "Anděl, Praha 5"
    },
    description: `Privát U Andělů je komorní erotický privát s rodinnou atmosférou.

Co nabízíme:
• 5 diskrétních pokojů
• Osobní a přátelský přístup
• Příjemné ceny
• Čisté a bezpečné prostředí
• Parkování v okolí

Jsme tu pro vás každý den od 10:00 do 22:00. Rezervace není nutná, ale doporučená.`,
    gallery: ["/placeholder.jpg"],
    people_ids: ["3", "1g", "1q", "1r"],
    reviews_count: 15,
    avg_rating: 4.4,
    slug: "privat-u-andelu-praha-5",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-06"),
    updated_at: new Date("2025-01-06")
  },
  {
    id: "org2b",
    type: "podnik",
    name: "Studio Velvet",
    location: "Praha 3",
    contacts: {
      phone: "+420 777 888 999",
      web: "https://studio-velvet.cz",
      address: "Žižkov, Praha 3"
    },
    description: `Studio Velvet je moderní erotické studio s elegantním designem.

Nabízíme:
• 8 stylových pokojů
• Výběr z 12 společnic
• Bar a odpočinková zóna
• Parkování zdarma
• Možnost rezervace online`,
    gallery: ["/placeholder.jpg"],
    people_ids: ["1", "1b", "1h", "1j", "1k"],
    reviews_count: 22,
    avg_rating: 4.6,
    slug: "studio-velvet-praha-3",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-09"),
    updated_at: new Date("2025-01-09")
  },
  {
    id: "org2c",
    type: "podnik",
    name: "Club Luxury",
    location: "Brno",
    contacts: {
      phone: "+420 777 222 333",
      address: "Brno střed"
    },
    description: `Club Luxury je největší erotický klub v Brně.

• 15+ společnic denně
• Luxusní prostředí
• VIP pokoje
• Bar a lounge`,
    gallery: ["/placeholder.jpg"],
    people_ids: ["1d", "1l", "1m"],
    reviews_count: 18,
    avg_rating: 4.5,
    slug: "club-luxury-brno",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-10"),
    updated_at: new Date("2025-01-10")
  },
  {
    id: "org2d",
    type: "podnik",
    name: "Relax Club",
    location: "Ostrava",
    contacts: {
      phone: "+420 777 999 888",
      address: "Ostrava centrum"
    },
    description: `Relax Club v Ostravě nabízí profesionální služby v příjemném prostředí.

• 6 pokojů
• 8 společnic
• Lounge bar
• Parkování`,
    gallery: ["/placeholder.jpg"],
    people_ids: ["1e", "1n"],
    reviews_count: 12,
    avg_rating: 4.4,
    slug: "relax-club-ostrava",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-11"),
    updated_at: new Date("2025-01-11")
  },
  {
    id: "org2e",
    type: "podnik",
    name: "Paradise Plzeň",
    location: "Plzeň",
    contacts: {
      phone: "+420 777 333 444"
    },
    description: `Paradise Plzeň - komfortní privát v Plzni.

• Diskrétní prostředí
• Výběr společnic
• Dostupné ceny`,
    gallery: ["/placeholder.jpg"],
    people_ids: ["1f", "1o"],
    reviews_count: 9,
    avg_rating: 4.3,
    slug: "paradise-plzen",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-12"),
    updated_at: new Date("2025-01-12")
  }
];

// DEMO ORGANIZACE - MASÁŽNÍ SALONY
export const demoSalons: Organization[] = [
  {
    id: "org3",
    type: "masazni_salon",
    name: "Salon Paradise",
    location: "Praha 4",
    contacts: {
      phone: "+420 777 555 111",
      web: "https://salon-paradise.cz",
      address: "Budějovická 10, Praha 4",
      email: "info@salon-paradise.cz"
    },
    description: `Salon Paradise je prémiový masážní salon specializující se na erotické masáže.

Naše služby:
• Tantrické masáže
• Nuru masáže
• Body-to-body masáže
• Párové masáže
• VIP apartmá

Všechny naše masérky jsou profesionálně vyškolené a nabízí diskrétní služby v luxusním prostředí. Používáme pouze kvalitní oleje a dbáme na hygienu.

Otevřeno: Po-Ne 10:00-23:00`,
    gallery: ["/placeholder.jpg"],
    people_ids: ["5", "5c", "5h"],
    reviews_count: 32,
    avg_rating: 4.8,
    slug: "salon-paradise-praha-4",
    status: "publish",
    is_featured: true, // ⭐ PLACENÁ TOP POZICE
    created_at: new Date("2025-01-02"),
    updated_at: new Date("2025-01-02")
  },
  {
    id: "org4",
    type: "masazni_salon",
    name: "Tantra Centrum Brno",
    location: "Brno",
    contacts: {
      phone: "+420 777 333 222",
      address: "Centrum Brna",
      email: "kontakt@tantra-brno.cz"
    },
    description: `Tantra Centrum Brno je specializované studio pro tantrické a erotické masáže.

Nabízíme:
• Klasické tantrické masáže
• Párové tantric sessions
• Workshop tantrických technik
• Relaxační prostředí s aromaty
• Profesionální masérky

Naše masáže jsou více než jen fyzický zážitek - jsou to cesty k sebepoznání a hlubší relaxaci.`,
    gallery: ["/placeholder.jpg"],
    people_ids: ["5b", "5i", "7"],
    reviews_count: 18,
    avg_rating: 4.6,
    slug: "tantra-centrum-brno",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-08"),
    updated_at: new Date("2025-01-08")
  },
  {
    id: "org4b",
    type: "masazni_salon",
    name: "Relaxační Oáza",
    location: "Praha 5",
    contacts: {
      phone: "+420 777 444 555",
      address: "Smíchov, Praha 5"
    },
    description: `Relaxační Oáza nabízí širokou škálu erotických masáží v klidném prostředí.

• Body-to-body masáže
• Tantrické rituály
• Happy end masáže
• Párové masáže`,
    gallery: ["/placeholder.jpg"],
    people_ids: ["6"],
    reviews_count: 16,
    avg_rating: 4.5,
    slug: "relaxacni-oaza-praha-5",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-11"),
    updated_at: new Date("2025-01-11")
  },
  {
    id: "org4c",
    type: "masazni_salon",
    name: "Tantra Studio",
    location: "Ostrava",
    contacts: {
      phone: "+420 777 111 222"
    },
    description: `Tantra Studio v Ostravě - jediné specializované studio pro tantrické masáže.

• Certifikované masérky
• Kvalitní oleje
• Diskrétní prostředí`,
    gallery: ["/placeholder.jpg"],
    people_ids: ["5e"],
    reviews_count: 11,
    avg_rating: 4.4,
    slug: "tantra-studio-ostrava",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-12"),
    updated_at: new Date("2025-01-12")
  },
  {
    id: "org4d",
    type: "masazni_salon",
    name: "Tantric Touch Praha",
    location: "Praha 2",
    contacts: {
      phone: "+420 777 555 444",
      web: "https://tantric-touch.cz"
    },
    description: `Tantric Touch - prémiové studio tantrických masáží v Praze.

• Luxusní prostředí
• Zkušené tantričky
• Nuru masáže
• Párové rituály`,
    gallery: ["/placeholder.jpg"],
    people_ids: ["5d", "5g"],
    reviews_count: 24,
    avg_rating: 4.8,
    slug: "tantric-touch-praha",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-04"),
    updated_at: new Date("2025-01-04")
  }
];

// DEMO ORGANIZACE - BDSM STUDIA
export const demoStudios: Organization[] = [
  {
    id: "org5",
    type: "bdsm_studio",
    name: "Dungeon Praha",
    location: "Praha 1",
    contacts: {
      phone: "+420 777 666 999",
      web: "https://dungeon-praha.cz",
      email: "mistress@dungeon-praha.cz"
    },
    description: `Dungeon Praha je nejlépe vybavené BDSM studio v České republice.

Naše vybavení:
• Profesionální bondage nábytek
• St. Andrew's Cross
• Suspension frame
• Elektro a CBT vybavení
• Sissy místnost
• Kompletní latex a leather kolekce

Studio je vedeno zkušenými dominami s dlouholetou praxí. Pracujeme podle SSC principů a respektujeme všechny bezpečnostní protokoly.

Pouze na objednávku. Noví klienti musí projít úvodním pohovorem.`,
    gallery: ["/placeholder.jpg"],
    people_ids: ["8"],
    reviews_count: 42,
    avg_rating: 4.9,
    slug: "dungeon-praha",
    status: "publish",
    is_featured: false,
    created_at: new Date("2024-12-15"),
    updated_at: new Date("2024-12-15")
  },
  {
    id: "org5b",
    type: "bdsm_studio",
    name: "Dark Desire Brno",
    location: "Brno",
    contacts: {
      phone: "+420 777 888 111",
      email: "info@darkdesire.cz"
    },
    description: `Dark Desire - BDSM studio v Brně s kompletním vybavením.

• Dungeon s bondage nábytkem
• Zkušené dominy
• SSC principy
• Diskrétnost garantována`,
    gallery: ["/placeholder.jpg"],
    people_ids: ["9b"],
    reviews_count: 18,
    avg_rating: 4.7,
    slug: "dark-desire-brno",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-01"),
    updated_at: new Date("2025-01-01")
  },
  {
    id: "org5c",
    type: "bdsm_studio",
    name: "Mistress Sanctuary",
    location: "Praha 2",
    contacts: {
      phone: "+420 777 999 000",
      web: "https://mistress-sanctuary.cz"
    },
    description: `Mistress Sanctuary - Luxusní BDSM studio pro náročné submissivy.

• VIP dungeon
• Elitní dominy
• Fetish kolekce
• Individuální sessions`,
    gallery: ["/placeholder.jpg"],
    people_ids: ["9c"],
    reviews_count: 22,
    avg_rating: 4.9,
    slug: "mistress-sanctuary-praha",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-02"),
    updated_at: new Date("2025-01-02")
  },
  {
    id: "bs4",
    type: "bdsm_studio",
    name: "Studio Dominance",
    location: "Praha 3",
    contacts: {
      phone: "+420 773 222 333",
      web: "https://studio-dominance.cz",
      email: "booking@studio-dominance.cz"
    },
    description: `Studio Dominance - Profesionální BDSM studio v Praze 3.

• Kompletně vybavený dungeon
• Zkušené dominy a mistressy
• Bezpečné a hygienické prostředí
• SSC a RACK principy
• Diskrétní vstup
• Pouze na objednávku

Nabízíme širokou škálu BDSM praktik včetně bondage, spanking, CBT, foot worship, feminizace a dalších. Respektujeme vaše limity a fantasie.`,
    gallery: ["/placeholder.jpg"],
    people_ids: ["8"],
    reviews_count: 15,
    avg_rating: 4.7,
    slug: "studio-dominance-praha",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-03"),
    updated_at: new Date("2025-01-03")
  },
  {
    id: "bs5",
    type: "bdsm_studio",
    name: "BDSM Palace Praha",
    location: "Praha 4",
    contacts: {
      phone: "+420 774 555 666",
      web: "https://bdsmpalace.cz",
      address: "Nuselská, Praha 4"
    },
    description: `BDSM Palace - Luxusní BDSM studio s kompletním vybavením.

• Několik tematických místností
• Profesionální suspension systém
• Latex a leather kolekce
• Medical room
• Sissy training prostory
• VIP klientela

Poskytujeme nejvyšší standard BDSM služeb v diskrétním a bezpečném prostředí.`,
    gallery: ["/placeholder.jpg"],
    people_ids: ["9b", "9c"],
    reviews_count: 19,
    avg_rating: 4.8,
    slug: "bdsm-palace-praha",
    status: "publish",
    is_featured: true, // ⭐ PLACENÁ TOP POZICE
    created_at: new Date("2025-01-05"),
    updated_at: new Date("2025-01-05")
  },
  {
    id: "bs6",
    type: "bdsm_studio",
    name: "Dungeon Ostrava",
    location: "Ostrava",
    contacts: {
      phone: "+420 775 888 999",
      email: "info@dungeon-ostrava.cz"
    },
    description: `Dungeon Ostrava - První BDSM studio v Ostravě.

• Bondage nábytek
• Kompletní vybavení pro session
• Zkušené dominy
• Bezpečné prostředí
• Diskrétnost garantována

Nabízíme BDSM sessions pro začátečníky i pokročilé. Úvodní konzultace zdarma.`,
    gallery: ["/placeholder.jpg"],
    people_ids: [],
    reviews_count: 12,
    avg_rating: 4.5,
    slug: "dungeon-ostrava",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-07"),
    updated_at: new Date("2025-01-07")
  },
  {
    id: "bs7",
    type: "bdsm_studio",
    name: "Torture Garden CZ",
    location: "Praha 5",
    contacts: {
      phone: "+420 776 111 222",
      web: "https://torturegarden.cz"
    },
    description: `Torture Garden - Alternativní BDSM studio pro náročné.

• Dark dungeon atmosféra
• Heavy BDSM praktiky
• Zkušené dominy s long-term praxí
• Pouze pro pokročilé submissivy
• Striktní bezpečnostní protokoly

Pro nové klienty vyžadujeme předchozí zkušenosti a reference.`,
    gallery: ["/placeholder.jpg"],
    people_ids: ["8"],
    reviews_count: 8,
    avg_rating: 4.9,
    slug: "torture-garden-praha",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-09"),
    updated_at: new Date("2025-01-09")
  },
  {
    id: "bs8",
    type: "bdsm_studio",
    name: "Fetish Factory",
    location: "Praha 7",
    contacts: {
      phone: "+420 777 333 444",
      web: "https://fetishfactory.cz",
      email: "sessions@fetishfactory.cz"
    },
    description: `Fetish Factory - BDSM studio se zaměřením na fetish praktiky.

• Latex a leather fetish
• Foot worship specialist
• Smoking fetish
• Nylon worship
• High heels domination
• Kompletní fetish wardrobe

Profesionální dominy s citem pro detail a atmosféru.`,
    gallery: ["/placeholder.jpg"],
    people_ids: ["9c"],
    reviews_count: 14,
    avg_rating: 4.6,
    slug: "fetish-factory-praha",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-11"),
    updated_at: new Date("2025-01-11")
  },
  {
    id: "bs9",
    type: "bdsm_studio",
    name: "Dominion Studio",
    location: "Brno",
    contacts: {
      phone: "+420 778 666 777",
      email: "domina@dominion-brno.cz"
    },
    description: `Dominion Studio - BDSM studio v centru Brna.

• Profesionální dungeon
• Zkušené brněnské dominy
• Bezpečné a čisté prostředí
• Široká škála praktik
• Flexibilní hodiny

Vítáme začátečníky i zkušené submissivy. Session od 60 minut.`,
    gallery: ["/placeholder.jpg"],
    people_ids: [],
    reviews_count: 11,
    avg_rating: 4.4,
    slug: "dominion-studio-brno",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-13"),
    updated_at: new Date("2025-01-13")
  },
  {
    id: "bs10",
    type: "bdsm_studio",
    name: "Black Chamber",
    location: "Praha 8",
    contacts: {
      phone: "+420 779 888 111",
      web: "https://blackchamber.cz"
    },
    description: `Black Chamber - Dark BDSM experience.

• Gothic dungeon atmosféra
• Heavy bondage
• Elektro stimulace
• Wax play
• Medical BDSM
• Breath play (pouze pro zkušené)

Pouze na objednávku. Vyžadujeme health declaration form.`,
    gallery: ["/placeholder.jpg"],
    people_ids: ["8"],
    reviews_count: 16,
    avg_rating: 4.8,
    slug: "black-chamber-praha",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-15"),
    updated_at: new Date("2025-01-15")
  },
  {
    id: "bs11",
    type: "bdsm_studio",
    name: "Maison de Sade",
    location: "Praha 6",
    contacts: {
      phone: "+420 773 999 222",
      web: "https://maisondesade.cz",
      email: "reservation@maisondesade.cz"
    },
    description: `Maison de Sade - Luxusní BDSM studio s francouzským šarmem.

• Elegantní dungeon design
• VIP klientela
• Profesionální dominy
• Vintage bondage nábytek
• Exclusive sessions
• Kompletní diskréce

Pro náročné gentlemany hledající stylový BDSM zážitek.`,
    gallery: ["/placeholder.jpg"],
    people_ids: ["9c"],
    reviews_count: 21,
    avg_rating: 4.9,
    slug: "maison-de-sade-praha",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-17"),
    updated_at: new Date("2025-01-17")
  },
  {
    id: "bs12",
    type: "bdsm_studio",
    name: "Pain & Pleasure Studio",
    location: "Plzeň",
    contacts: {
      phone: "+420 774 222 555",
      email: "info@painpleasure.cz"
    },
    description: `Pain & Pleasure - BDSM studio v Plzni.

• Dungeon s bondage vybavením
• Spanking & CP praktiky
• Roleplay scenarios
• Začátečníci vítáni
• Bezpečné prostředí

První BDSM studio v Plzni. Nabízíme úvodní session pro nováčky.`,
    gallery: ["/placeholder.jpg"],
    people_ids: [],
    reviews_count: 9,
    avg_rating: 4.3,
    slug: "pain-pleasure-plzen",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-19"),
    updated_at: new Date("2025-01-19")
  },
  {
    id: "bs13",
    type: "bdsm_studio",
    name: "Domina Arena",
    location: "Praha 10",
    contacts: {
      phone: "+420 775 333 888",
      web: "https://domina-arena.cz"
    },
    description: `Domina Arena - BDSM studio s focus na role play.

• Roleplay scenáře (učitelka, šéfová, policistka...)
• Feminizace a sissy training
• Strap-on sessions
• Foot worship
• Humiliation scenarios

Kreativní a zábavný přístup k BDSM. Session šité na míru.`,
    gallery: ["/placeholder.jpg"],
    people_ids: ["9b"],
    reviews_count: 13,
    avg_rating: 4.6,
    slug: "domina-arena-praha",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-20"),
    updated_at: new Date("2025-01-20")
  },
  {
    id: "bs14",
    type: "bdsm_studio",
    name: "Studio Submissive",
    location: "Praha 9",
    contacts: {
      phone: "+420 776 444 999",
      email: "contact@studio-submissive.cz"
    },
    description: `Studio Submissive - Pro ty, kteří chtějí sloužit.

• Worship sessions
• Service training
• Domestic servitude
• Pet play
• Chastity keyholder services
• Long-term D/s relationship možnosti

Studio pro submissivy hledající reálnou D/s dynamiku.`,
    gallery: ["/placeholder.jpg"],
    people_ids: ["8"],
    reviews_count: 17,
    avg_rating: 4.7,
    slug: "studio-submissive-praha",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-21"),
    updated_at: new Date("2025-01-21")
  },
  {
    id: "bs15",
    type: "bdsm_studio",
    name: "Red Room Praha",
    location: "Praha 1",
    contacts: {
      phone: "+420 777 555 888",
      web: "https://redroom-praha.cz",
      address: "Staré Město, Praha 1"
    },
    description: `Red Room - Luxusní BDSM studio v centru Prahy.

• Premium lokace
• Moderní dungeon design
• Top level dominy
• Kompletní vybavení
• VIP service
• Catering možnosti

Pro náročné klienty hledající top tier BDSM experience.`,
    gallery: ["/placeholder.jpg"],
    people_ids: ["8", "9c"],
    reviews_count: 25,
    avg_rating: 4.9,
    slug: "red-room-praha",
    status: "publish",
    is_featured: true, // ⭐ PLACENÁ TOP POZICE
    created_at: new Date("2025-01-22"),
    updated_at: new Date("2025-01-22")
  },
  {
    id: "bs16",
    type: "bdsm_studio",
    name: "Leather & Chains",
    location: "Liberec",
    contacts: {
      phone: "+420 778 111 333",
      email: "info@leatherchains.cz"
    },
    description: `Leather & Chains - BDSM studio v Liberci.

• Leather fetish specialist
• Bondage praktiky
• CBT sessions
• Trampling
• Basic až advanced level

BDSM studio pro klienty ze severních Čech.`,
    gallery: ["/placeholder.jpg"],
    people_ids: [],
    reviews_count: 7,
    avg_rating: 4.2,
    slug: "leather-chains-liberec",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-23"),
    updated_at: new Date("2025-01-23")
  },
  {
    id: "bs17",
    type: "bdsm_studio",
    name: "Mistress Lounge",
    location: "Praha 2",
    contacts: {
      phone: "+420 779 222 666",
      web: "https://mistress-lounge.cz"
    },
    description: `Mistress Lounge - Stylové BDSM studio s komfortním prostředím.

• Lounge atmosféra
• Soft až medium BDSM
• Začátečníci preferováni
• Friendly dominy
• Session s aftercare
• Edukační přístup

Ideální pro ty, kteří začínají s BDSM a hledají empatický přístup.`,
    gallery: ["/placeholder.jpg"],
    people_ids: ["9b"],
    reviews_count: 14,
    avg_rating: 4.5,
    slug: "mistress-lounge-praha",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-24"),
    updated_at: new Date("2025-01-24")
  },
  {
    id: "bs18",
    type: "bdsm_studio",
    name: "Shadow Dungeon",
    location: "Olomouc",
    contacts: {
      phone: "+420 773 777 999",
      email: "dungeon@shadow-olomouc.cz"
    },
    description: `Shadow Dungeon - BDSM studio v Olomouci.

• Profesionální dungeon
• Zkušené dominy z Olomouce
• Kompletní bondage vybavení
• CP praktiky
• Diskrétní lokace

BDSM services pro střední Moravu.`,
    gallery: ["/placeholder.jpg"],
    people_ids: [],
    reviews_count: 10,
    avg_rating: 4.4,
    slug: "shadow-dungeon-olomouc",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-25"),
    updated_at: new Date("2025-01-25")
  },
  {
    id: "bs19",
    type: "bdsm_studio",
    name: "Velvet Whip Studio",
    location: "Praha 3",
    contacts: {
      phone: "+420 774 888 333",
      web: "https://velvetwhip.cz"
    },
    description: `Velvet Whip - Elegantní BDSM studio se smyslem pro detail.

• Stylový dungeon
• Profesionální impact play
• Rope bondage specialist
• Shibari sessions
• Aesthetic BDSM
• Photo sessions možné

Pro milovníky estetického BDSM a japonské rope bondage.`,
    gallery: ["/placeholder.jpg"],
    people_ids: ["8"],
    reviews_count: 18,
    avg_rating: 4.8,
    slug: "velvet-whip-praha",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-26"),
    updated_at: new Date("2025-01-26")
  },
  {
    id: "bs20",
    type: "bdsm_studio",
    name: "Iron Maiden Studio",
    location: "Hradec Králové",
    contacts: {
      phone: "+420 775 999 444",
      email: "booking@ironmaiden-hk.cz"
    },
    description: `Iron Maiden - BDSM studio v Hradci Králové.

• Kompletně vybavený dungeon
• Medieval BDSM vybavení
• Strict dominy
• Heavy sessions možné
• Pouze na objednávku

Pro submissivy z východních Čech hledající quality BDSM experience.`,
    gallery: ["/placeholder.jpg"],
    people_ids: [],
    reviews_count: 11,
    avg_rating: 4.6,
    slug: "iron-maiden-hradec-kralove",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-27"),
    updated_at: new Date("2025-01-27")
  }
];

// DEMO ORGANIZACE - ESCORT AGENTURY
export const demoAgencies: Organization[] = [
  {
    id: "ag1",
    type: "escort_agentura",
    name: "Elite Escort Prague",
    location: "Praha 1",
    contacts: {
      phone: "+420 777 888 999",
      email: "info@eliteescortprague.cz",
      web: "https://eliteescortprague.cz",
      address: "Václavské náměstí, Praha 1"
    },
    description: `Elite Escort Prague - Prémiová escort agentura s 10letou tradicí.

• VIP společnice pro náročné klienty
• Mezinárodní modely
• Escort pro společenské akce
• Kompletní diskréce
• 24/7 dostupnost

Naše společnice jsou pečlivě vybrané, vzděl ané a reprezentativní. Nabízíme escort služby pro businessmany, společenské akce, večeře a VIP events.`,
    gallery: ["/placeholder.jpg"],
    people_ids: ["1c", "2c", "2d"],
    reviews_count: 45,
    avg_rating: 4.8,
    slug: "elite-escort-prague",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-01"),
    updated_at: new Date("2025-01-01")
  },
  {
    id: "ag2",
    type: "escort_agentura",
    name: "Diamond Girls Agency",
    location: "Praha 2",
    contacts: {
      phone: "+420 775 666 777",
      email: "contact@diamondgirls.cz",
      web: "https://diamondgirls.cz"
    },
    description: `Diamond Girls - Exkluzivní escort agentura s mezinárodními modely.

• České i zahraniční modelky
• Hotel escort
• Outcall služby
• Business doprovod
• Party & events

Specializujeme se na poskytování luxusních escort služeb pro VIP klienty. Všechny naše společnice jsou profesionální, diskrétní a reprezentativní.`,
    gallery: ["/placeholder.jpg"],
    people_ids: ["1", "1b", "1d"],
    reviews_count: 38,
    avg_rating: 4.7,
    slug: "diamond-girls-agency",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-03"),
    updated_at: new Date("2025-01-03")
  },
  {
    id: "ag3",
    type: "escort_agentura",
    name: "VIP Companions Brno",
    location: "Brno",
    contacts: {
      phone: "+420 773 444 555",
      email: "info@vipcompanions.cz",
      web: "https://vipcompanions.cz"
    },
    description: `VIP Companions - Brněnská escort agentura s vysokým standardem.

• Luxury escort Brno
• Doprovod na večeře
• Travel companion
• GFE experience
• Ověřené recenze

Poskytujeme prémiové escort služby v Brně a okolí. Naše společnice jsou vybrané pro svou inteligenci, krásu a profesionalitu.`,
    gallery: ["/placeholder.jpg"],
    people_ids: ["1e", "2e"],
    reviews_count: 29,
    avg_rating: 4.6,
    slug: "vip-companions-brno",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-05"),
    updated_at: new Date("2025-01-05")
  },
  {
    id: "ag4",
    type: "escort_agentura",
    name: "Luxury Ladies CZ",
    location: "Praha 1",
    contacts: {
      phone: "+420 776 333 222",
      email: "booking@luxuryladies.cz",
      web: "https://luxuryladies.cz"
    },
    description: `Luxury Ladies - Prémiové escort služby pro náročné gentlemany.

• High-class escort
• Model agency
• International booking
• Verified profiles
• Concierge service

Nabízíme exkluzivní escort služby s důrazem na kvalitu, diskrétnost a profesionalitu. Portfolio zahrnuje české i mezinárodní modelky.`,
    gallery: ["/placeholder.jpg"],
    people_ids: ["2a", "2b"],
    reviews_count: 52,
    avg_rating: 4.9,
    slug: "luxury-ladies-cz",
    status: "publish",
    is_featured: false,
    created_at: new Date("2024-12-28"),
    updated_at: new Date("2024-12-28")
  },
  {
    id: "ea5",
    type: "escort_agentura",
    name: "Angels Praha",
    location: "Praha 3",
    contacts: {
      phone: "+420 774 123 456",
      web: "https://angels-praha.cz",
      email: "booking@angels-praha.cz",
      address: "Vinohrady, Praha 3"
    },
    description: `Angels Praha - Moderní escort agentura s mladými společnicemi.

• České modelky
• Fresh faces
• GFE specialist
• Hotel & apartment visits
• 24/7 booking
• Ověřené fotografie

Naše společnice jsou mladé, krásné a profesionální. Zaměřujeme se na autentický GFE experience a příjemnou atmosféru.`,
    gallery: ["/placeholder.jpg"],
    people_ids: ["1", "1b"],
    reviews_count: 18,
    avg_rating: 4.5,
    slug: "angels-praha",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-06"),
    updated_at: new Date("2025-01-06")
  },
  {
    id: "ea6",
    type: "escort_agentura",
    name: "VIP Angels Ostrava",
    location: "Ostrava",
    contacts: {
      phone: "+420 775 234 567",
      email: "info@vipangels-ostrava.cz",
      web: "https://vipangels-ostrava.cz"
    },
    description: `VIP Angels - Prémiová escort agentura v Ostravě.

• Luxury escort Ostrava
• České i zahraniční modelky
• Business doprovod
• VIP events
• Diskrétní service

První prémiová escort agentura v Ostravě. Poskytujeme high-class escort služby pro náročnou klientelu.`,
    gallery: ["/placeholder.jpg"],
    people_ids: ["1e"],
    reviews_count: 14,
    avg_rating: 4.6,
    slug: "vip-angels-ostrava",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-08"),
    updated_at: new Date("2025-01-08")
  },
  {
    id: "ea7",
    type: "escort_agentura",
    name: "Platinum Escorts",
    location: "Praha 1",
    contacts: {
      phone: "+420 776 345 678",
      web: "https://platinum-escorts.cz",
      email: "vip@platinum-escorts.cz",
      address: "Nové Město, Praha 1"
    },
    description: `Platinum Escorts - Exkluzivní escort služby pro VIP klientelu.

• Top tier models
• International escorts
• Overnight bookings
• Travel companion
• Luxury apartments available
• Personal concierge

Poskytujeme nejvyšší standard escort služeb. Naše společnice jsou pečlivě vybrané profesionálky s perfektními maniery.`,
    gallery: ["/placeholder.jpg"],
    people_ids: ["1c", "2c"],
    reviews_count: 28,
    avg_rating: 4.9,
    slug: "platinum-escorts-praha",
    status: "publish",
    is_featured: true, // ⭐ PLACENÁ TOP POZICE
    created_at: new Date("2025-01-10"),
    updated_at: new Date("2025-01-10")
  },
  {
    id: "ea8",
    type: "escort_agentura",
    name: "Pink Ladies",
    location: "Praha 4",
    contacts: {
      phone: "+420 777 456 789",
      email: "booking@pink-ladies.cz",
      web: "https://pink-ladies.cz"
    },
    description: `Pink Ladies - Escort agentura se zaměřením na GFE experience.

• GFE specialist
• Mladé české holky
• Přátelská atmosféra
• Hotel escort
• Outcall Praha
• Dostupné ceny

Naše dívky jsou милé, natural a mají rádi svou práci. Zaměřujeme se na girlfriend experience a příjemnou atmosféru.`,
    gallery: ["/placeholder.jpg"],
    people_ids: ["1", "1d"],
    reviews_count: 22,
    avg_rating: 4.4,
    slug: "pink-ladies-praha",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-12"),
    updated_at: new Date("2025-01-12")
  },
  {
    id: "ea9",
    type: "escort_agentura",
    name: "Luxury Companions",
    location: "Brno",
    contacts: {
      phone: "+420 778 567 890",
      web: "https://luxurycompanions-brno.cz",
      address: "Centrum, Brno"
    },
    description: `Luxury Companions - Prémiové escort služby v Brně.

• High-class Brno escort
• Vzdělané společnice
• Business meetings
• Dinner dates
• Weekend trips
• Verified reviews

Nabízíme sofistikované společnice pro náročné businessmany a gentlemany v Brně a okolí.`,
    gallery: ["/placeholder.jpg"],
    people_ids: ["1e", "2e"],
    reviews_count: 16,
    avg_rating: 4.7,
    slug: "luxury-companions-brno",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-14"),
    updated_at: new Date("2025-01-14")
  },
  {
    id: "ea10",
    type: "escort_agentura",
    name: "Golden Gate Escort",
    location: "Praha 5",
    contacts: {
      phone: "+420 779 678 901",
      email: "info@goldengate-escort.cz",
      web: "https://goldengate-escort.cz"
    },
    description: `Golden Gate Escort - Profesionální escort agentura v Praze 5.

• České escort modelky
• Hotel visits
• Apartment escort
• Duo možné
• Flexible booking
• Safe & discreet

Poskytujeme kvalitní escort služby v Praze 5 a okolí. Naše dívky jsou profesionální a diskrétní.`,
    gallery: ["/placeholder.jpg"],
    people_ids: ["1b", "1d"],
    reviews_count: 20,
    avg_rating: 4.5,
    slug: "golden-gate-escort-praha",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-16"),
    updated_at: new Date("2025-01-16")
  },
  {
    id: "ea11",
    type: "escort_agentura",
    name: "Exclusive Models CZ",
    location: "Praha 2",
    contacts: {
      phone: "+420 773 789 012",
      web: "https://exclusivemodels.cz",
      email: "booking@exclusivemodels.cz",
      address: "Vinohrady, Praha 2"
    },
    description: `Exclusive Models - Modelingová a escort agentura.

• Professional models
• Fashion & commercial
• Escort services
• International clients
• Portfolio shoots
• Event hostesses

Kombinujeme modelingovou a escort činnost. Naše modelky pracují profesionálně v obou oblastech.`,
    gallery: ["/placeholder.jpg"],
    people_ids: ["1c", "2a"],
    reviews_count: 24,
    avg_rating: 4.8,
    slug: "exclusive-models-praha",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-17"),
    updated_at: new Date("2025-01-17")
  },
  {
    id: "ea12",
    type: "escort_agentura",
    name: "Dream Girls Agency",
    location: "Plzeň",
    contacts: {
      phone: "+420 774 890 123",
      email: "info@dreamgirls-plzen.cz"
    },
    description: `Dream Girls - Escort agentura v Plzni.

• Plzeňské escort služby
• České společnice
• Hotel & private visits
• GFE experience
• Verified profiles

První escort agentura v Plzni s ověřenými profily. Diskrétní a profesionální služby.`,
    gallery: ["/placeholder.jpg"],
    people_ids: [],
    reviews_count: 11,
    avg_rating: 4.3,
    slug: "dream-girls-plzen",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-18"),
    updated_at: new Date("2025-01-18")
  },
  {
    id: "ea13",
    type: "escort_agentura",
    name: "Royal Escort Praha",
    location: "Praha 1",
    contacts: {
      phone: "+420 775 901 234",
      web: "https://royal-escort.cz",
      email: "vip@royal-escort.cz"
    },
    description: `Royal Escort - VIP escort agentura s královským přístupem.

• VIP společnice
• Luxury hotels
• Business travel companion
• International escorts
• Concierge available
• Absolute discretion

Pro nejnáročnější klienty hledající nejvyšší standard escort služeb. Kompletní diskréce garantována.`,
    gallery: ["/placeholder.jpg"],
    people_ids: ["1c", "2d"],
    reviews_count: 30,
    avg_rating: 4.9,
    slug: "royal-escort-praha",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-19"),
    updated_at: new Date("2025-01-19")
  },
  {
    id: "ea14",
    type: "escort_agentura",
    name: "Sweet Angels",
    location: "Praha 6",
    contacts: {
      phone: "+420 776 012 345",
      email: "booking@sweet-angels.cz",
      web: "https://sweet-angels.cz"
    },
    description: `Sweet Angels - Escort agentura s mladými česk ými holkami.

• Young & fresh
• Natural beauty
• GFE focused
• Student models
• Affordable rates
• Real photos

Naše dívky jsou mladé, natural a mají pozitivní energii. Ideální pro GFE experience za rozumnou cenu.`,
    gallery: ["/placeholder.jpg"],
    people_ids: ["1", "1b"],
    reviews_count: 19,
    avg_rating: 4.4,
    slug: "sweet-angels-praha",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-20"),
    updated_at: new Date("2025-01-20")
  },
  {
    id: "ea15",
    type: "escort_agentura",
    name: "Premium Babes",
    location: "Praha 7",
    contacts: {
      phone: "+420 777 123 456",
      web: "https://premium-babes.cz",
      address: "Holešovice, Praha 7"
    },
    description: `Premium Babes - Moderní escort agentura s fresh přístupem.

• Modern escort approach
• Verified models
• Flexible booking
• Duo available
• PSE & GFE
• Party girls

Fresh a moderní přístup k escort business. Naše holky jsou fun, professional a open-minded.`,
    gallery: ["/placeholder.jpg"],
    people_ids: ["1d", "2a"],
    reviews_count: 21,
    avg_rating: 4.6,
    slug: "premium-babes-praha",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-21"),
    updated_at: new Date("2025-01-21")
  },
  {
    id: "ea16",
    type: "escort_agentura",
    name: "Elite Girls Brno",
    location: "Brno",
    contacts: {
      phone: "+420 778 234 567",
      email: "contact@elitegirls-brno.cz",
      web: "https://elitegirls-brno.cz"
    },
    description: `Elite Girls - Prémiová escort agentura v Brně.

• Brno luxury escort
• Czech & international
• Hotel outcall
• Business escort
• Event companions
• VIP treatment

Poskytujeme top tier escort služby v Brně pro náročné klienty. Profesionalita a diskréce na prvním místě.`,
    gallery: ["/placeholder.jpg"],
    people_ids: ["1e"],
    reviews_count: 17,
    avg_rating: 4.7,
    slug: "elite-girls-brno",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-22"),
    updated_at: new Date("2025-01-22")
  },
  {
    id: "ea17",
    type: "escort_agentura",
    name: "Secret Desires",
    location: "Praha 8",
    contacts: {
      phone: "+420 779 345 678",
      email: "info@secret-desires.cz"
    },
    description: `Secret Desires - Escort agentura pro splnění vašich přání.

• Fantasy fulfillment
• Roleplay specialists
• Kinky escort available
• Duo & trio
• Fetish friendly
• Open-minded girls

Pro klienty hledající něco víc než klasický escort. Naše dívky jsou open-minded a fetish friendly.`,
    gallery: ["/placeholder.jpg"],
    people_ids: ["1d", "2b"],
    reviews_count: 15,
    avg_rating: 4.5,
    slug: "secret-desires-praha",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-23"),
    updated_at: new Date("2025-01-23")
  },
  {
    id: "ea18",
    type: "escort_agentura",
    name: "Imperial Escorts",
    location: "Praha 1",
    contacts: {
      phone: "+420 773 456 789",
      web: "https://imperial-escorts.cz",
      email: "reservation@imperial-escorts.cz",
      address: "Staré Město, Praha 1"
    },
    description: `Imperial Escorts - Luxusní escort agentura s tradicí.

• Established since 2015
• High-class companions
• International clientele
• Business & leisure
• Overnight available
• Personal assistant service

10 let na trhu. Poskytujeme nejvyšší standard escort služeb pro VIP klientelu z celého světa.`,
    gallery: ["/placeholder.jpg"],
    people_ids: ["1c", "2c", "2d"],
    reviews_count: 42,
    avg_rating: 4.9,
    slug: "imperial-escorts-praha",
    status: "publish",
    is_featured: true, // ⭐ PLACENÁ TOP POZICE
    created_at: new Date("2025-01-24"),
    updated_at: new Date("2025-01-24")
  },
  {
    id: "ea19",
    type: "escort_agentura",
    name: "Night Angels Ostrava",
    location: "Ostrava",
    contacts: {
      phone: "+420 774 567 890",
      email: "booking@nightangels-ostrava.cz"
    },
    description: `Night Angels - Escort služby v Ostravě a okolí.

• Ostrava escort
• České společnice
• Evening & night dates
• Hotel visits
• Party escort
• Flexible hours

Poskytujeme escort služby v Ostravě pro večerní a noční schůzky. Diskrétní a profesionální přístup.`,
    gallery: ["/placeholder.jpg"],
    people_ids: [],
    reviews_count: 13,
    avg_rating: 4.4,
    slug: "night-angels-ostrava",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-25"),
    updated_at: new Date("2025-01-25")
  },
  {
    id: "ea20",
    type: "escort_agentura",
    name: "Desire Agency Praha",
    location: "Praha 10",
    contacts: {
      phone: "+420 775 678 901",
      web: "https://desire-agency.cz",
      email: "info@desire-agency.cz"
    },
    description: `Desire Agency - Moderní escort agentura s širokým portfoliem.

• Variety of models
• All types & preferences
• Czech & foreign girls
• Incall & outcall
• Last minute bookings
• 24/7 availability

Široké portfolio společnic pro různé preference. Od GFE až po PSE, od natural po glamour.`,
    gallery: ["/placeholder.jpg"],
    people_ids: ["1", "1b", "2a"],
    reviews_count: 26,
    avg_rating: 4.6,
    slug: "desire-agency-praha",
    status: "publish",
    is_featured: false,
    created_at: new Date("2025-01-26"),
    updated_at: new Date("2025-01-26")
  }
];

// DEMO RECENZE
export const demoReviews: Review[] = [
  {
    id: "rev1",
    target_type: "person",
    target_id: "1",
    target_name: "Laura",
    target_slug: "laura-praha-3",
    title: "Skvělý zážitek",
    body: "Laura je úžasná společnice. Profesionální přístup, krásná a milá. Určitě se vrátím!",
    rating: 5,
    author_alias: "Jan K.",
    author_uid: "user1",
    verified: true,
    status: "approved",
    created_at: new Date("2025-01-12"),
    updated_at: new Date("2025-01-12")
  },
  {
    id: "rev2",
    target_type: "person",
    target_id: "2",
    target_name: "Nikol",
    target_slug: "nikol-praha-1",
    title: "Doporučuji",
    body: "Příjemné setkání, Nikol byla přesně taková, jak je na fotkách. Komunikace výborná.",
    rating: 4,
    author_alias: "Petr M.",
    author_uid: "user2",
    verified: false,
    status: "approved",
    created_at: new Date("2025-01-10"),
    updated_at: new Date("2025-01-10")
  },
  {
    id: "rev3",
    target_type: "organization",
    target_id: "org3",
    target_name: "Salon Paradise",
    target_slug: "salon-paradise-praha-4",
    title: "Luxusní prostředí",
    body: "Skvělý salon, čisto, profesionální personál. Příjemná atmosféra a diskrétnost zaručena.",
    rating: 5,
    author_alias: "Martin S.",
    author_uid: "user3",
    verified: true,
    status: "approved",
    created_at: new Date("2025-01-08"),
    updated_at: new Date("2025-01-08")
  },
  {
    id: "rev4",
    target_type: "person",
    target_id: "4",
    target_name: "Kateřina",
    target_slug: "katerina-praha-2",
    title: "Top tier escort",
    body: "Kateřina je skutečně VIP. Elegantní, inteligentní a krásná. Stojí za každou korunu. Dokonalý GFE zážitek.",
    rating: 5,
    author_alias: "David B.",
    author_uid: "user4",
    verified: true,
    status: "approved",
    created_at: new Date("2025-01-13"),
    updated_at: new Date("2025-01-13")
  },
  {
    id: "rev5",
    target_type: "person",
    target_id: "5",
    target_name: "Michaela",
    target_slug: "michaela-praha-4",
    title: "Nejlepší masáž",
    body: "Michaela má magické ruce. Její tantric masáž byla neskutečný zážitek. Vrátím se určitě!",
    rating: 5,
    author_alias: "Tomáš V.",
    author_uid: "user5",
    verified: true,
    status: "approved",
    created_at: new Date("2025-01-11"),
    updated_at: new Date("2025-01-11")
  },
  {
    id: "rev6",
    target_type: "person",
    target_id: "6",
    target_name: "Simona",
    target_slug: "simona-praha-6",
    title: "Nuru specialistka",
    body: "Pokud chcete zkusit skutečnou Nuru masáž, Simona je ta pravá. Zkušenost a profesionalita na vysoké úrovni.",
    rating: 5,
    author_alias: "Jakub P.",
    author_uid: "user6",
    verified: true,
    status: "approved",
    created_at: new Date("2025-01-09"),
    updated_at: new Date("2025-01-09")
  },
  {
    id: "rev7",
    target_type: "person",
    target_id: "8",
    target_name: "Mistress Viktorie",
    target_slug: "mistress-viktorie-praha-1",
    title: "Skutečná profesionálka",
    body: "Mistress Viktorie ví, co dělá. Její session byla intenzivní, ale vždy v bezpečných hranicích. Komunikace před i během sezení byla perfektní.",
    rating: 5,
    author_alias: "Sub Mike",
    author_uid: "user7",
    verified: true,
    status: "approved",
    created_at: new Date("2025-01-14"),
    updated_at: new Date("2025-01-14")
  },
  {
    id: "rev8",
    target_type: "organization",
    target_id: "org1",
    target_name: "Club Paradise",
    target_slug: "club-paradise-praha-2",
    title: "Luxusní klub",
    body: "Club Paradise je opravdu na vysoké úrovni. Krásné prostředí, profesionální personál a skvělé dívky. Určitě nejlepší klub v Praze.",
    rating: 5,
    author_alias: "Roman K.",
    author_uid: "user8",
    verified: true,
    status: "approved",
    created_at: new Date("2025-01-07"),
    updated_at: new Date("2025-01-07")
  },
  {
    id: "rev9",
    target_type: "person",
    target_id: "3",
    target_name: "Tereza",
    target_slug: "tereza-praha-5",
    title: "Milá a příjemná",
    body: "Tereza je moc milá holka. Není to profesionální escort, ale právě to je na ní sympatické. Příjemné chvíle za rozumnou cenu.",
    rating: 4,
    author_alias: "Pavel S.",
    author_uid: "user9",
    verified: false,
    status: "approved",
    created_at: new Date("2025-01-13"),
    updated_at: new Date("2025-01-13")
  },
  {
    id: "rev10",
    target_type: "organization",
    target_id: "org5",
    target_name: "Dungeon Praha",
    target_slug: "dungeon-praha",
    title: "Nejlepší BDSM studio",
    body: "Dungeon Praha má vybavení na světové úrovni. Mistress Viktorie je zkušená domina, která dokáže vytvořit nezapomenutelnou session. Bezpečnost na prvním místě.",
    rating: 5,
    author_alias: "Submissive Jan",
    author_uid: "user10",
    verified: true,
    status: "approved",
    created_at: new Date("2025-01-06"),
    updated_at: new Date("2025-01-06")
  }
];

// Pomocné funkce pro získávání dat
export function getAllPeople(): Person[] {
  return [...demoGirls, ...demoMasseurs, ...demoDominas, ...demoDigitalModels];
}

export function getPeopleByType(type: "divka" | "maserka" | "domina" | "digitalmodelka"): Person[] {
  return getAllPeople().filter(p => p.type === type);
}

export function getAllOrganizations(): Organization[] {
  return [...demoClubs, ...demoSalons, ...demoStudios, ...demoAgencies];
}

export function getOrganizationsByType(type: "podnik" | "masazni_salon" | "bdsm_studio" | "escort_agentura"): Organization[] {
  return getAllOrganizations().filter(o => o.type === type);
}

export function getPersonBySlug(slug: string): Person | undefined {
  return getAllPeople().find(p => p.slug === slug);
}

export function getOrganizationBySlug(slug: string): Organization | undefined {
  return getAllOrganizations().find(o => o.slug === slug);
}

export function getReviewsByTargetId(targetId: string): Review[] {
  return demoReviews.filter(r => r.target_id === targetId);
}

export function getAllReviews(): Review[] {
  return demoReviews;
}

export function getReviewById(id: string): Review | undefined {
  return demoReviews.find(r => r.id === id);
}
