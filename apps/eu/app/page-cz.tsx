import Link from "next/link";
import { Search, Star, TrendingUp, Users } from "lucide-react";
import { PERSON_TYPES, ORG_TYPES } from "@/lib/types";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Nezávislé recenze<br />
            <span className="text-blue-600">erotických služeb</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Nejrozsáhlejší katalog a recenze profesionálních erotických služeb v České republice.
            Ověřené hodnocení od skutečných návštěvníků.
          </p>

          {/* Vyhledávací box */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <form className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Hledat podle jména, lokality, služeb..."
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <Link
                href="/vyhledavani"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-200"
              >
                Pokročilé vyhledávání
              </Link>
            </form>
          </div>

          {/* Rychlé statistiky */}
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-white rounded-lg p-4 shadow">
              <div className="text-3xl font-bold text-blue-600">150+</div>
              <div className="text-sm text-gray-600">Profilů</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow">
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <div className="text-sm text-gray-600">Recenzí</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow">
              <div className="text-3xl font-bold text-blue-600">4.2</div>
              <div className="text-sm text-gray-600">Průměr</div>
            </div>
          </div>
        </div>
      </section>

      {/* Kategorie osob */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Osoby</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(PERSON_TYPES).map(([key, data]) => (
            <Link
              key={key}
              href={`/${data.slug}`}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-200 overflow-hidden group"
            >
              <div className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 transition duration-200">
                  <Users className="w-8 h-8 text-blue-600 group-hover:text-white transition duration-200" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{data.label}</h3>
                <p className="text-gray-600">{data.description}</p>
                <div className="mt-4 text-blue-600 font-semibold group-hover:text-blue-700">
                  Zobrazit profily →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Kategorie organizací */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Podniky & Salony</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(ORG_TYPES).map(([key, data]) => (
            <Link
              key={key}
              href={`/${data.slug}`}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-200 overflow-hidden group"
            >
              <div className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-600 transition duration-200">
                  <TrendingUp className="w-8 h-8 text-purple-600 group-hover:text-white transition duration-200" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{data.label}</h3>
                <p className="text-gray-600">{data.description}</p>
                <div className="mt-4 text-purple-600 font-semibold group-hover:text-purple-700">
                  Zobrazit podniky →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Nejnovější recenze */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Nejnovější recenze</h2>
            <Link href="/recenze" className="text-blue-600 hover:text-blue-700 font-semibold">
              Zobrazit všechny →
            </Link>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 text-center text-gray-500">
            <Star className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <p>Zatím zde nejsou žádné recenze. Buďte první, kdo přidá recenzi!</p>
          </div>
        </div>
      </section>

      {/* CTA sekce */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sdílejte své zkušenosti
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Pomozte ostatním najít kvalitní služby a sdílejte svoje recenze
          </p>
          <Link
            href="/recenze/nova"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition duration-200 shadow-lg"
          >
            Napsat recenzi
          </Link>
        </div>
      </section>
    </div>
  );
}
