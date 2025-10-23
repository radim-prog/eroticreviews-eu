import CategoryPage from "@/components/CategoryPage";
import { getOrganizationsByType } from "@/lib/demo-data";

export const metadata = {
  title: "BDSM Studia | EroticReviews.cz",
  description: "Profesionální BDSM studia v ČR. Vybavené dungeony a zkušené dominy.",
};

export default function BDSMStudiaPage() {
  const studios = getOrganizationsByType("bdsm_studio");

  return (
    <CategoryPage
      items={studios}
      title="BDSM Studia"
      description="Profesionální BDSM studia v České republice. Plně vybavené dungeony a zkušené dominy pro bezpečné SSC sessions."
      gradient="bg-gradient-to-r from-gray-800 to-red-900"
      accentColor="gray"
      emoji="⛓️"
      type="organization"
    />
  );
}
