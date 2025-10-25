import { Metadata } from "next";
import { FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Podmínky použití | EroticReviews.cz",
  description: "Všeobecné obchodní podmínky a pravidla používání portálu EroticReviews.cz.",
};

export default function TermsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <FileText className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Podmínky použití</h1>
              <p className="text-gray-600">Všeobecné obchodní podmínky</p>
            </div>
          </div>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              1. Úvodní ustanovení
            </h2>
            <p className="text-gray-700 mb-4">
              Tyto Všeobecné obchodní podmínky (dále jen &quot;VOP&quot;) upravují vztahy mezi
              provozovatelem webu EroticReviews.cz (dále jen &quot;Portál&quot;) a uživateli
              při používání služeb Portálu.
            </p>
            <p className="text-gray-700 mb-4">
              Používáním Portálu vyjadřujete svůj souhlas s těmito VOP a zavazujete
              se jimi řídit.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              2. Vymezení pojmů
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Portál</strong> - webová stránka EroticReviews.cz a všechny její služby</li>
              <li><strong>Uživatel</strong> - fyzická osoba starší 18 let užívající Portál</li>
              <li><strong>Registrovaný uživatel</strong> - uživatel s vytvořeným účtem</li>
              <li><strong>Obsah</strong> - veškeré informace, texty, fotografie, recenze publikované na Portálu</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              3. Věková a obsahová omezení
            </h2>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-4">
              <p className="text-gray-900 font-semibold mb-2">
                ⚠️ Pouze pro osoby 18+
              </p>
              <p className="text-gray-700">
                Vstupem na Portál a jeho používáním prohlašujete, že jste starší 18 let
                a že prohlížení obsahu pro dospělé není ve vašem regionu zakázáno.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              4. Registrace a uživatelský účet
            </h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              4.1 Registrace
            </h3>
            <p className="text-gray-700 mb-4">
              Pro používání některých funkcí Portálu (například přidávání recenzí)
              je nutná registrace. Při registraci musíte:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Být starší 18 let</li>
              <li>Zadat pravdivé a aktuální údaje</li>
              <li>Zvolit jedinečné uživatelské jméno</li>
              <li>Souhlasit s těmito VOP a GDPR</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              4.2 Bezpečnost účtu
            </h3>
            <p className="text-gray-700 mb-4">
              Jste odpovědní za:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Zachování důvěrnosti přihlašovacích údajů</li>
              <li>Veškeré aktivity prováděné pod vaším účtem</li>
              <li>Okamžité nahlášení jakéhokoli neoprávněného přístupu</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              5. Pravidla pro recenze a obsah
            </h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              5.1 Publikování recenzí
            </h3>
            <p className="text-gray-700 mb-4">
              Při přidávání recenzí se zavazujete:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Uvádět pravdivé informace založené na vlastní zkušenosti</li>
              <li>Respektovat důstojnost osob a organizací</li>
              <li>Nepublikovat urážlivý, diskriminační nebo nenávistný obsah</li>
              <li>Nepublikovat osobní údaje třetích osob bez souhlasu</li>
              <li>Neporušovat autorská práva</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              5.2 Zakázaný obsah
            </h3>
            <p className="text-gray-700 mb-4">
              Striktně zakazujeme:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Propagaci nelegálních služeb</li>
              <li>Obsah týkající se nezletilých osob</li>
              <li>Násilný nebo zneužívající obsah</li>
              <li>Spam a nevyžádanou reklamu</li>
              <li>Falešné nebo zmanipulované recenze</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              6. Moderace a kontrola obsahu
            </h2>
            <p className="text-gray-700 mb-4">
              Provozovatel si vyhrazuje právo:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Moderovat veškerý uživatelský obsah</li>
              <li>Odstranit nebo upravit obsah porušující VOP</li>
              <li>Suspendovat nebo zrušit uživatelský účet při opakovaném porušení</li>
              <li>Odmítnout publikaci nevhodného obsahu</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              7. Odpovědnost
            </h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              7.1 Provozovatel
            </h3>
            <p className="text-gray-700 mb-4">
              Provozovatel:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Neodpovídá za kvalitu služeb třetích stran uvedených na Portálu</li>
              <li>Nezaručuje nepřetržitou dostupnost Portálu</li>
              <li>Neručí za přesnost uživatelského obsahu</li>
              <li>Pouze zprostředkovává informace a recenze</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              7.2 Uživatel
            </h3>
            <p className="text-gray-700 mb-4">
              Uživatel je plně odpovědný za:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Obsah, který publikuje</li>
              <li>Porušení práv třetích osob</li>
              <li>Své jednání v souvislosti s využíváním služeb</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              8. Duševní vlastnictví
            </h2>
            <p className="text-gray-700 mb-4">
              Veškerý obsah Portálu (design, loga, texty, kód) je chráněn autorským právem.
              Bez předchozího písemného souhlasu je zakázáno:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Kopírování obsahu Portálu</li>
              <li>Komerční využití bez licence</li>
              <li>Automatizované stahování dat (scraping)</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              9. Změny VOP
            </h2>
            <p className="text-gray-700 mb-4">
              Provozovatel si vyhrazuje právo tyto VOP kdykoli změnit.
              O podstatných změnách budou uživatelé informováni prostřednictvím Portálu.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              10. Závěrečná ustanovení
            </h2>
            <p className="text-gray-700 mb-4">
              Tyto VOP se řídí právním řádem České republiky.
              Veškeré spory budou řešeny u příslušných soudů ČR.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              11. Kontakt
            </h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-4">
              <p className="text-gray-900">
                <strong>Provozovatel:</strong> EroticReviews.cz<br />
                <strong>E-mail:</strong> info@eroticreviews.cz<br />
                <strong>Web:</strong> www.eroticreviews.cz
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
