import { Metadata } from "next";
import { generateCategoryMeta } from "@/lib/seo/meta-tags";
import { getOrganizationsByType } from "@/lib-cz/demo-data";

const agencies = getOrganizationsByType("escort_agentura");

export const metadata: Metadata = generateCategoryMeta({
  title: "Escort agentury",
  description: "Ověřené escort agentury v České republice. Profesionální služby s reálnými recenzemi od klientů.",
  slug: "escort-agentury",
  count: agencies.length,
});

export default function EscortAgenturyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
