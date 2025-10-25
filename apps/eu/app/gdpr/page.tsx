import { Metadata } from "next";
import { Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "GDPR a Ochrana osobních údajů | EroticReviews.cz",
  description: "Informace o zpracování osobních údajů v souladu s nařízením GDPR.",
};

export default function GDPRPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">GDPR</h1>
              <p className="text-gray-600">Ochrana osobních údajů</p>
            </div>
          </div>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              1. Správce osobních údajů
            </h2>
            <p className="text-gray-700 mb-4">
              Správcem osobních údajů je provozovatel webu EroticReviews.cz.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Kontakt:</strong> info@eroticreviews.cz
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              2. Jaké údaje zpracováváme
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>E-mailová adresa (při registraci)</li>
              <li>Uživatelské jméno / alias</li>
              <li>IP adresa (pro bezpečnostní účely)</li>
              <li>Cookies (pro funkcionalitu webu)</li>
              <li>Obsah recenzí a komentářů</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              3. Účel zpracování
            </h2>
            <p className="text-gray-700 mb-4">
              Osobní údaje zpracováváme za účelem:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Poskytování služeb portálu EroticReviews.cz</li>
              <li>Umožnění registrace a přihlášení uživatelů</li>
              <li>Publikace recenzí a hodnocení</li>
              <li>Komunikace s uživateli</li>
              <li>Ochrana před zneužitím a spam</li>
              <li>Vylepšování našich služeb</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              4. Právní základ zpracování
            </h2>
            <p className="text-gray-700 mb-4">
              Údaje zpracováváme na základě:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Vašeho souhlasu (čl. 6 odst. 1 písm. a) GDPR)</li>
              <li>Plnění smlouvy (čl. 6 odst. 1 písm. b) GDPR)</li>
              <li>Oprávněného zájmu správce (čl. 6 odst. 1 písm. f) GDPR)</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              5. Doba uložení údajů
            </h2>
            <p className="text-gray-700 mb-4">
              Osobní údaje uchováváme po dobu:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Trvání uživatelského účtu</li>
              <li>Dokud nevyjádříte nesouhlas se zpracováním</li>
              <li>Po dobu stanovenou právními předpisy</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              6. Vaše práva
            </h2>
            <p className="text-gray-700 mb-4">
              V souvislosti se zpracováním osobních údajů máte následující práva:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Právo na přístup</strong> k osobním údajům</li>
              <li><strong>Právo na opravu</strong> nepřesných údajů</li>
              <li><strong>Právo na výmaz</strong> (&quot;právo být zapomenut&quot;)</li>
              <li><strong>Právo na omezení zpracování</strong></li>
              <li><strong>Právo na přenositelnost údajů</strong></li>
              <li><strong>Právo vznést námitku</strong> proti zpracování</li>
              <li><strong>Právo podat stížnost</strong> u dozorového úřadu (ÚOOÚ)</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              7. Zabezpečení údajů
            </h2>
            <p className="text-gray-700 mb-4">
              Osobní údaje chráníme pomocí moderních technických a organizačních opatření:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Šifrované připojení HTTPS</li>
              <li>Zabezpečená databáze Firebase/Firestore</li>
              <li>Pravidelné bezpečnostní audity</li>
              <li>Omezený přístup k datům</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              8. Cookies
            </h2>
            <p className="text-gray-700 mb-4">
              Používáme cookies pro zajištění funkčnosti webu a zlepšení uživatelského zážitku.
              Podrobné informace najdete v našich <a href="/cookies" className="text-blue-600 hover:underline">zásadách cookies</a>.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              9. Předávání údajů třetím stranám
            </h2>
            <p className="text-gray-700 mb-4">
              Osobní údaje neprodáváme ani nepronajímáme třetím stranám.
              Údaje mohou být předány pouze:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Na základě právního důvodu (soudní příkaz, atd.)</li>
              <li>Technickým poskytovatelům služeb (Firebase, Vercel) - pouze v nezbytném rozsahu</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              10. Kontakt
            </h2>
            <p className="text-gray-700 mb-4">
              Máte-li dotazy ohledně zpracování osobních údajů nebo chcete uplatnit svá práva,
              kontaktujte nás:
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-4">
              <p className="text-gray-900">
                <strong>E-mail:</strong> info@eroticreviews.cz
              </p>
            </div>

            <p className="text-sm text-gray-500 mt-8">
              Poslední aktualizace: 15. října 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
