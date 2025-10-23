import { Metadata } from "next";
import { generateCategoryMeta } from "@/lib/seo/meta-tags";
import { getPeopleByType } from "@/lib/demo-data";

const people = getPeopleByType("domina");

export const metadata: Metadata = generateCategoryMeta({
  title: "BDSM Dominy",
  description: "Profesionální dominy a BDSM specialistky v ČR. Ověřené profily s recenzemi od skutečných klientů.",
  slug: "dominy",
  count: people.length,
});

export default function DominyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
