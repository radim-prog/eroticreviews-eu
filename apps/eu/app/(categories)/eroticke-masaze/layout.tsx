import { Metadata } from "next";
import { generateCategoryMeta } from "@/lib-cz/seo/meta-tags";
import { getPeopleByType } from "@/lib-cz/demo-data";

const people = getPeopleByType("maserka");

export const metadata: Metadata = generateCategoryMeta({
  title: "Erotické masáže",
  description: "Profesionální erotické masáže v České republice. Ověřené masérky s recenzemi od klientů.",
  slug: "eroticke-masaze",
  count: people.length,
});

export default function ErotickeMasazeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
