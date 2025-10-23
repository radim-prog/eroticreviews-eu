import { Metadata } from "next";
import { generateCategoryMeta } from "@/lib-cz/seo/meta-tags";
import { getPeopleByType } from "@/lib-cz/demo-data";

const people = getPeopleByType("digitalmodelka");

export const metadata: Metadata = generateCategoryMeta({
  title: "Digitální modelky",
  description: "České digitální modelky na OnlyFans, Fansly a dalších platformách. Ověřené profily s recenzemi.",
  slug: "digitalni-modelky",
  count: people.length,
});

export default function DigitalniModelkyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
