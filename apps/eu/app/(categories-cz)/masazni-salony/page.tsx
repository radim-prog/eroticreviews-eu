import CategoryPage from "@/components/CategoryPage";
import { getOrganizationsByType } from "@/lib-cz/demo-data";

export const metadata = {
  title: "Masážní salony | EroticReviews.cz",
  description: "Erotické a tantrické masážní salony v ČR. Profesionální masérky a luxusní prostředí.",
};

export default function MasazniSalonyPage() {
  const salons = getOrganizationsByType("masazni_salon");

  return (
    <CategoryPage
      items={salons}
      title="Masážní salony"
      description="Profesionální salony erotických a tantrických masáží v České republice. Luxusní prostředí a certifikované masérky."
      gradient="bg-gradient-to-r from-teal-600 to-green-600"
      accentColor="teal"
      emoji="💆"
      type="organization"
    />
  );
}
