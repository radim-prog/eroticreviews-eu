import { Metadata } from "next";
import { generateCategoryMeta } from "@/lib/seo/meta-tags";
import { getOrganizationsByType } from "@/lib-cz/demo-data";

const orgs = getOrganizationsByType("bdsm_studio");

export const metadata: Metadata = generateCategoryMeta({
  title: "BDSM studia",
  description: "Profesionální BDSM studia v České republice. Vybavené prostory s ověřenými recenzemi od klientů.",
  slug: "bdsm-studia",
  count: orgs.length,
});

export default function BdsmStudiaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
