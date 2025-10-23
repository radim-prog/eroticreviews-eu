"use client";

import CategoryPage from "@/components/CategoryPage";
import { getPeopleByType } from "@/lib/demo-data";

export default function MaserkyPage() {
  const maserky = getPeopleByType("maserka");

  return (
    <CategoryPage
      items={maserky}
      title="Masérky"
      description="Profesionální masérky nabízející erotické, tantrické a relaxační masáže. Najděte tu nejlepší masérku ve vašem okolí."
      gradient="bg-gradient-to-r from-purple-600 to-pink-600"
      accentColor="purple"
      emoji="💆‍♀️"
      type="person"
    />
  );
}
