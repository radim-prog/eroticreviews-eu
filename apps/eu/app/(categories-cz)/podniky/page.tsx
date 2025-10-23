import CategoryPage from "@/components/CategoryPage";
import { getOrganizationsByType } from "@/lib-cz/demo-data";

export const metadata = {
  title: "Podniky a Priváty | EroticReviews.cz",
  description: "Erotické podniky a priváty v ČR. Ověřené recenze a hodnocení.",
};

export default function PodnikyPage() {
  const clubs = getOrganizationsByType("podnik");

  return (
    <CategoryPage
      items={clubs}
      title="Podniky / Priváty"
      description="Erotické podniky a priváty v České republice. Profesionální prostředí s výběrem společnic."
      gradient="bg-gradient-to-r from-indigo-600 to-blue-600"
      accentColor="indigo"
      emoji="🏢"
      type="organization"
    />
  );
}
