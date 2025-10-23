import { Metadata } from "next";
import { generateCategoryMeta } from "@/lib-cz/seo/meta-tags";
import { getPeopleByType } from "@/lib-cz/demo-data";

const people = getPeopleByType("divka");

export const metadata: Metadata = generateCategoryMeta({
  title: "Holky na sex - Escort služby",
  description: "Profesionální escort služby a společnice v České republice. Najděte perfektní společnici na základě ověřených recenzí.",
  slug: "holky-na-sex",
  count: people.length,
});

export default function HolkyNaSexLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
