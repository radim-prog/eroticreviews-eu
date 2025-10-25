import { Metadata } from "next";
import { generateReviewsPageMeta } from "@/lib-cz/seo/meta-tags";

export const metadata: Metadata = generateReviewsPageMeta();

export default function RecenzeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
