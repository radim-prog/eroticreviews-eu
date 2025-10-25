import { Metadata } from "next";
import { generateSearchMeta } from "@/lib-cz/seo/meta-tags";

export const metadata: Metadata = generateSearchMeta();

export default function VyhledavaniLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
