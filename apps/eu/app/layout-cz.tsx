import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AgeVerification from "@/components/AgeVerification";
import SessionProvider from "@/components/SessionProvider";
import { generateMetaTags } from "@/lib/seo/meta-tags";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = generateMetaTags({
  title: "EroticReviews.cz - Nezávislé recenze erotických služeb",
  description: "Profesionální katalog a recenze společnic, erotických masáží, dominin, podniků a salonů v ČR. Ověřené hodnocení od skutečných návštěvníků.",
  canonical: "/",
  keywords: ["erotické služby", "recenze", "hodnocení", "escort", "masáže", "BDSM", "Praha", "Česká republika"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className={inter.className}>
        <SessionProvider>
          <AgeVerification />
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
