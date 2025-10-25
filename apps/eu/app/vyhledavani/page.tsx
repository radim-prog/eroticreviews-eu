"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, MapPin, Building, User, Star } from "lucide-react";
import StarRating from "@/components/StarRating";
import { getAllPeople, getAllOrganizations } from "@/lib-cz/demo-data";
import type { Person, Organization } from "@/lib-cz/types";

type SearchResult = (Person | Organization) & {
  resultType: "person" | "organization";
};

export default function VyhledavaniPage() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedLocation, setSelectedLocation] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const allPeople = getAllPeople();
  const allOrganizations = getAllOrganizations();

  const searchResults = useMemo(() => {
    if (!searchQuery && selectedLocation === "all" && selectedCategory === "all") {
      return [];
    }

    let results: SearchResult[] = [];

    // Vyhledávání v osobách
    if (selectedCategory === "all" || selectedCategory === "person") {
      const peopleResults: SearchResult[] = allPeople
        .filter((person) => {
          const matchesQuery = !searchQuery ||
            person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            person.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            person.services.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));

          const matchesLocation = selectedLocation === "all" ||
            person.location.includes(selectedLocation);

          return matchesQuery && matchesLocation;
        })
        .map(person => ({ ...person, resultType: "person" as const }));

      results = [...results, ...peopleResults];
    }

    // Vyhledávání v organizacích
    if (selectedCategory === "all" || selectedCategory === "organization") {
      const orgResults: SearchResult[] = allOrganizations
        .filter((org) => {
          const matchesQuery = !searchQuery ||
            org.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            org.description.toLowerCase().includes(searchQuery.toLowerCase());

          const matchesLocation = selectedLocation === "all" ||
            org.location.includes(selectedLocation);

          return matchesQuery && matchesLocation;
        })
        .map(org => ({ ...org, resultType: "organization" as const }));

      results = [...results, ...orgResults];
    }

    // Seřadit podle hodnocení
    results.sort((a, b) => b.avg_rating - a.avg_rating);

    return results;
  }, [searchQuery, selectedLocation, selectedCategory, allPeople, allOrganizations]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero se vyhledávacím formulářem */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Vyhledávání
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mb-8">
            Najděte přesně to, co hledáte. Prohledejte profily, podniky a služby.
          </p>

          {/* Vyhledávací formulář */}
          <form onSubmit={handleSearch} className="max-w-4xl">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <div className="flex flex-col md:flex-row gap-3">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Hledejte jméno, službu, klíčové slovo..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <select
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                >
                  <option value="all">Všechna města</option>
                  <option value="Praha">Praha</option>
                  <option value="Brno">Brno</option>
                  <option value="Ostrava">Ostrava</option>
                  <option value="Plzeň">Plzeň</option>
                </select>

                <select
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="all">Vše</option>
                  <option value="person">Osoby</option>
                  <option value="organization">Podniky</option>
                </select>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Výsledky */}
      <div className="container mx-auto px-4 py-8">
        {searchQuery || selectedLocation !== "all" || selectedCategory !== "all" ? (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Výsledky vyhledávání
              </h2>
              <p className="text-gray-600 mt-1">
                Nalezeno {searchResults.length} výsledků
              </p>
            </div>

            {searchResults.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {searchResults.map((result) => {
                  const isPerson = result.resultType === "person";
                  const url = isPerson
                    ? `/profil/${result.slug}`
                    : `/organizace/${result.slug}`;

                  const icon = isPerson
                    ? (result as Person).type === "divka" ? "👤"
                      : (result as Person).type === "maserka" ? "💆‍♀️"
                      : "👑"
                    : (result as Organization).type === "podnik" ? "🏢"
                      : (result as Organization).type === "masazni_salon" ? "💆"
                      : "⛓️";

                  return (
                    <Link
                      key={`${result.resultType}-${result.id}`}
                      href={url}
                      className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden group flex flex-col"
                    >
                      {/* Obrázek */}
                      <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300">
                        <div className="absolute inset-0 flex items-center justify-center text-4xl">
                          {icon}
                        </div>
                        <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-xs font-semibold">
                          {isPerson ? "Osoba" : "Podnik"}
                        </div>
                        <div className="absolute top-2 left-2 bg-white rounded-full px-2 py-1 shadow-md flex items-center gap-1">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs font-semibold">{result.avg_rating}</span>
                        </div>
                      </div>

                      {/* Obsah */}
                      <div className="p-3 flex-1 flex flex-col">
                        <h3 className="text-base font-bold text-gray-900 mb-1 group-hover:text-purple-600 transition line-clamp-1">
                          {result.name}
                          {isPerson && `, ${(result as Person).age}`}
                        </h3>

                        <div className="flex items-center text-gray-600 text-xs mb-2">
                          <MapPin className="w-3 h-3 mr-1" />
                          <span className="line-clamp-1">{result.location}</span>
                        </div>

                        {isPerson ? (
                          <>
                            <p className="text-xs text-gray-600 italic line-clamp-2 mb-2 flex-1">
                              {(result as Person).short_claim}
                            </p>

                            {/* Parametry */}
                            <div className="text-xs text-gray-500 space-y-1 mb-2">
                              <div className="flex justify-between">
                                <span>Výška:</span>
                                <span className="font-medium">{(result as Person).height_cm} cm</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Prsa:</span>
                                <span className="font-medium">{(result as Person).breast}</span>
                              </div>
                            </div>

                            {/* Služby */}
                            <div className="flex flex-wrap gap-1 mb-2">
                              {(result as Person).services.slice(0, 3).map((service, idx) => (
                                <span key={idx} className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded">
                                  {service}
                                </span>
                              ))}
                              {(result as Person).services.length > 3 && (
                                <span className="text-xs text-gray-500">+{(result as Person).services.length - 3}</span>
                              )}
                            </div>
                          </>
                        ) : (
                          <>
                            <p className="text-xs text-gray-600 line-clamp-3 mb-2 flex-1">
                              {(result as Organization).description.split('\n')[0]}
                            </p>

                            {(result as Organization).contacts.phone && (
                              <div className="text-xs text-gray-500 mb-2">
                                📞 {(result as Organization).contacts.phone}
                              </div>
                            )}
                          </>
                        )}

                        <div className="flex items-center justify-between pt-2 border-t border-gray-100 mt-auto">
                          <StarRating rating={result.avg_rating} size="sm" />
                          <span className="text-xs text-gray-500">
                            {result.reviews_count} ⭐
                          </span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Žádné výsledky
                </h3>
                <p className="text-gray-600">
                  Zkuste změnit vyhledávací kritéria nebo použít jiná klíčová slova.
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg p-12 text-center max-w-2xl mx-auto">
            <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Začněte vyhledávat
            </h3>
            <p className="text-gray-600 mb-6">
              Zadejte klíčové slovo, vyberte město nebo kategorii pro zobrazení výsledků.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-xl mx-auto">
              <Link
                href="/holky-na-sex"
                className="p-4 border-2 border-gray-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition"
              >
                <div className="text-3xl mb-2">👤</div>
                <div className="font-semibold text-sm">Holky na sex</div>
              </Link>
              <Link
                href="/eroticke-masaze"
                className="p-4 border-2 border-gray-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition"
              >
                <div className="text-3xl mb-2">💆‍♀️</div>
                <div className="font-semibold text-sm">Masáže</div>
              </Link>
              <Link
                href="/dominy"
                className="p-4 border-2 border-gray-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition"
              >
                <div className="text-3xl mb-2">👑</div>
                <div className="font-semibold text-sm">Dominy</div>
              </Link>
              <Link
                href="/podniky"
                className="p-4 border-2 border-gray-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition"
              >
                <div className="text-3xl mb-2">🏢</div>
                <div className="font-semibold text-sm">Podniky</div>
              </Link>
              <Link
                href="/masazni-salony"
                className="p-4 border-2 border-gray-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition"
              >
                <div className="text-3xl mb-2">💆</div>
                <div className="font-semibold text-sm">Salony</div>
              </Link>
              <Link
                href="/bdsm-studia"
                className="p-4 border-2 border-gray-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition"
              >
                <div className="text-3xl mb-2">⛓️</div>
                <div className="font-semibold text-sm">BDSM</div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
