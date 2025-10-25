import { Metadata } from "next";
import { Mail, MessageSquare, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Kontakt | EroticReviews.cz",
  description: "Kontaktujte tým EroticReviews.cz. Odpovíme na vaše dotazy a připomínky.",
};

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <Mail className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Kontakt</h1>
              <p className="text-gray-600">Jsme tu pro vás</p>
            </div>
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-700 text-lg mb-8">
              Máte dotaz, připomínku nebo návrh na zlepšení? Rádi vám pomůžeme.
              Kontaktujte nás prostřednictvím níže uvedených způsobů.
            </p>

            {/* Kontaktní možnosti */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-blue-50 rounded-lg p-6 text-center">
                <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">E-mail</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Napište nám e-mail a odpovíme do 24 hodin
                </p>
                <a
                  href="mailto:info@eroticreviews.cz"
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  info@eroticreviews.cz
                </a>
              </div>

              <div className="bg-purple-50 rounded-lg p-6 text-center">
                <MessageSquare className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Zpětná vazba</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Sdílejte své nápady a připomínky
                </p>
                <a
                  href="mailto:feedback@eroticreviews.cz"
                  className="text-purple-600 hover:text-purple-700 font-semibold"
                >
                  feedback@eroticreviews.cz
                </a>
              </div>

              <div className="bg-green-50 rounded-lg p-6 text-center">
                <HelpCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Podpora</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Potřebujete pomoc s používáním?
                </p>
                <a
                  href="mailto:support@eroticreviews.cz"
                  className="text-green-600 hover:text-green-700 font-semibold"
                >
                  support@eroticreviews.cz
                </a>
              </div>
            </div>

            {/* Kontaktní formulář */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Kontaktní formulář
              </h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Jméno
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Vaše jméno"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="vas@email.cz"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Předmět *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="O čem je vaše zpráva?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Zpráva *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Napište nám vaši zprávu..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
                >
                  Odeslat zprávu
                </button>
              </form>
            </div>

            {/* FAQ */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Často kladené otázky
              </h2>

              <div className="space-y-4">
                <details className="bg-white border border-gray-200 rounded-lg p-6">
                  <summary className="font-semibold text-gray-900 cursor-pointer">
                    Jak mohu přidat recenzi?
                  </summary>
                  <p className="text-gray-700 mt-3">
                    Pro přidání recenze je nutná registrace. Po přihlášení přejděte na profil,
                    který chcete hodnotit, a klikněte na tlačítko &quot;Napsat recenzi&quot;.
                  </p>
                </details>

                <details className="bg-white border border-gray-200 rounded-lg p-6">
                  <summary className="font-semibold text-gray-900 cursor-pointer">
                    Jsou recenze moderované?
                  </summary>
                  <p className="text-gray-700 mt-3">
                    Ano, všechny recenze procházejí moderací, abychom zajistili kvalitu
                    a soulad s našimi pravidly. Nevhodný obsah není publikován.
                  </p>
                </details>

                <details className="bg-white border border-gray-200 rounded-lg p-6">
                  <summary className="font-semibold text-gray-900 cursor-pointer">
                    Jak získat ověřenou recenzi?
                  </summary>
                  <p className="text-gray-700 mt-3">
                    Ověřené recenze získáváte aktivním přispíváním do komunity.
                    Systém automaticky vyhodnocuje kvalitu a pravidelnost vašich příspěvků.
                  </p>
                </details>

                <details className="bg-white border border-gray-200 rounded-lg p-6">
                  <summary className="font-semibold text-gray-900 cursor-pointer">
                    Můžu přidat svůj profil?
                  </summary>
                  <p className="text-gray-700 mt-3">
                    Ano, kontaktujte nás na info@eroticreviews.cz a my vám pomůžeme
                    s vytvořením profesionálního profilu.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
