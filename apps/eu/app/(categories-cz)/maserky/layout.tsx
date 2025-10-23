import { Metadata } from "next";
import { generateCategoryMeta } from "@/lib/seo/meta-tags";
import { getPeopleByType } from "@/lib/demo-data";

const people = getPeopleByType("maserka");

export const metadata: Metadata = generateCategoryMeta({
  title: "Erotické masáže a masérky",
  description: "Nejlepší erotické masáže v České republice. Ověřené masérky s reálnými recenzemi od klientů.",
  slug: "maserky",
  count: people.length,
});

export default function MaserkyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
