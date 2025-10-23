import CategoryPage from "@/components/CategoryPage";
import { getOrganizationsByType } from "@/lib-cz/demo-data";

export const metadata = {
  title: "Escort agentury | Ověřené recenze | EroticReviews.cz",
  description: "Profesionální escort agentury v České republice. Reálné recenze, hodnocení a kontakty na nejlepší agentury.",
};

export default function EscortAgenturyPage() {
  const agencies = getOrganizationsByType("escort_agentura");

  return (
    <CategoryPage
      items={agencies}
      title="Escort agentury"
      description="Profesionální escort agentury s ověřenými recenzemi. Najděte prémiové escort služby v celé ČR."
      gradient="bg-gradient-to-r from-purple-600 to-pink-600"
      accentColor="purple"
      emoji="👥"
      type="organization"
    />
  );
}
