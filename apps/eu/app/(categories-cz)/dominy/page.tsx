import CategoryPage from "@/components/CategoryPage";
import { getPeopleByType } from "@/lib/demo-data";

export const metadata = {
  title: "Dominy - BDSM a Dominance | EroticReviews.cz",
  description: "Profesionální dominy a BDSM praktiky v ČR. Bezpečné SSC sessions.",
};

export default function DominyPage() {
  const dominas = getPeopleByType("domina");

  return (
    <CategoryPage
      items={dominas}
      title="Dominy"
      description="Profesionální dominy a BDSM praktiky v České republice. Bezpečné, sane a consensual sessions s zkušenými mistress."
      gradient="bg-gradient-to-r from-red-600 to-purple-700"
      accentColor="red"
      emoji="👑"
      type="person"
    />
  );
}
