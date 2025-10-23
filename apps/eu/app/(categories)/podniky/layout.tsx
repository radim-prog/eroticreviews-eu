import { Metadata } from "next";
import { generateCategoryMeta } from "@/lib-cz/seo/meta-tags";
import { getOrganizationsByType } from "@/lib-cz/demo-data";

const orgs = getOrganizationsByType("podnik");

export const metadata: Metadata = generateCategoryMeta({
  title: "Erotické podniky a priváty",
  description: "Ověřené erotické podniky a privátní salony v České republice. Recenze od skutečných návštěvníků.",
  slug: "podniky",
  count: orgs.length,
});

export default function PodnikyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
