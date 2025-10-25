import { Metadata } from "next";
import { Info, Users, Shield, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "O projektu | EroticReviews.cz",
  description: "Informace o portálu EroticReviews.cz - nezávislém zdroji recenzí erotických služeb v ČR.",
};

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <Info className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">O projektu</h1>
              <p className="text-gray-600">EroticReviews.cz</p>
            </div>
          </div>

          <div className="prose max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Naše mise
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                EroticReviews.cz je nezávislý portál zaměřený na poskytování objektivních
                informací a recenzí o erotických službách v České republice.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Naším cílem je vytvořit transparentní prostor, kde mohou uživatelé sdílet
                své zkušenosti a pomáhat ostatním při výběru kvalitních a důvěryhodných služeb.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Co nabízíme
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <Users className="w-10 h-10 text-blue-600 mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Rozsáhlý katalog</h3>
                  <p className="text-gray-700 text-sm">
                    Stovky profilů profesionálních společnic, masážních salonů,
                    BDSM studií a dalších služeb.
                  </p>
                </div>

                <div className="bg-purple-50 rounded-lg p-6">
                  <Star className="w-10 h-10 text-purple-600 mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Ověřené recenze</h3>
                  <p className="text-gray-700 text-sm">
                    Systém ověřených recenzí od skutečných klientů s možností
                    hodnocení a komentářů.
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <Shield className="w-10 h-10 text-green-600 mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Bezpečnost & diskrétnost</h3>
                  <p className="text-gray-700 text-sm">
                    Dbáme na ochranu soukromí uživatelů a moderujeme veškerý
                    obsah v souladu se zákony ČR.
                  </p>
                </div>

                <div className="bg-yellow-50 rounded-lg p-6">
                  <Info className="w-10 h-10 text-yellow-600 mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Objektivita</h3>
                  <p className="text-gray-700 text-sm">
                    Nezávislá platforma bez skrytých reklam nebo placených
                    pozic v žebříčcích.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Jak to funguje
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Prohlížejte profily</h3>
                    <p className="text-gray-700 text-sm">
                      Najděte služby podle lokality, typu, hodnocení nebo dalších kritérií.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Čtěte recenze</h3>
                    <p className="text-gray-700 text-sm">
                      Zjistěte skutečné zkušenosti ostatních uživatelů.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Sdílejte své zkušenosti</h3>
                    <p className="text-gray-700 text-sm">
                      Po registraci můžete přidávat vlastní recenze a hodnocení.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Pravidla a zásady
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Obsah je určen výhradně pro osoby starší 18 let</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Veškerý obsah je moderován a kontrolován</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Zakazujeme nelegální, násilný nebo zneužívající obsah</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Respektujeme GDPR a ochranu osobních údajů</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">✓</span>
                  <span>Podporujeme zodpovědný přístup k erotickým službám</span>
                </li>
              </ul>
            </section>

            <section className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Máte otázky?
              </h2>
              <p className="text-gray-700 mb-6">
                Kontaktujte nás kdykoli prostřednictvím naší kontaktní stránky.
              </p>
              <a
                href="/kontakt"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Kontaktovat nás
              </a>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
