import { Metadata } from "next";
import { generateCategoryMeta } from "@/lib/seo/meta-tags";
import { getOrganizationsByType } from "@/lib-cz/demo-data";

const orgs = getOrganizationsByType("masazni_salon");

export const metadata: Metadata = generateCategoryMeta({
  title: "Masážní salony",
  description: "Ověřené masážní salony s erotickými službami v ČR. Profesionální prostředí s reálnými recenzemi.",
  slug: "masazni-salony",
  count: orgs.length,
});

export default function MasazniSalonyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
