"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { MapPin, Star, TrendingUp } from "lucide-react";
import StarRating from "@/components/StarRating";
import { getPeopleByType } from "@/lib/demo-data";

export default function ErotickeMasazePage() {
  const allPeople = getPeopleByType("maserka");

  const [selectedLocation, setSelectedLocation] = useState<string>("all");
  const [selectedRating, setSelectedRating] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("newest");

  // Filtrování a řazení
  const filteredPeople = useMemo(() => {
    let result = [...allPeople];

    if (selectedLocation !== "all") {
      result = result.filter(p => p.location === selectedLocation);
    }

    if (selectedRating === "4+") {
      result = result.filter(p => p.avg_rating >= 4);
    } else if (selectedRating === "3+") {
      result = result.filter(p => p.avg_rating >= 3);
    }

    if (sortBy === "newest") {
      result.sort((a, b) => b.created_at.getTime() - a.created_at.getTime());
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.avg_rating - a.avg_rating);
    } else if (sortBy === "reviews") {
      result.sort((a, b) => b.reviews_count - a.reviews_count);
    }

    return result;
  }, [allPeople, selectedLocation, selectedRating, sortBy]);

  const availableLocations = useMemo(() => {
    return Array.from(new Set(allPeople.map(p => p.location))).sort();
  }, [allPeople]);

  const avgRating = allPeople.length > 0
    ? (allPeople.reduce((sum, p) => sum + p.avg_rating, 0) / allPeople.length).toFixed(1)
    : "0.0";

  const totalReviews = allPeople.reduce((sum, p) => sum + p.reviews_count, 0);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero sekce */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Erotické masáže
          </h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Profesionální erotické a tantrické masáže v České republice.
            Relaxace a smyslný zážitek od certifikovaných masérů a masérek.
          </p>

          {/* Statistiky */}
          <div className="grid grid-cols-3 gap-4 mt-8 max-w-2xl">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold">{allPeople.length}</div>
              <div className="text-sm opacity-80">Aktivních masérek</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold">{avgRating}</div>
              <div className="text-sm opacity-80">Průměrné hodnocení</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold">{totalReviews}</div>
              <div className="text-sm opacity-80">Recenzí celkem</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filtry */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-3">
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="all">Všechny lokality</option>
              {availableLocations.map(loc => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>

            <select
              value={selectedRating}
              onChange={(e) => setSelectedRating(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="all">Všechna hodnocení</option>
              <option value="4+">4+ hvězdy</option>
              <option value="3+">3+ hvězdy</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="newest">Nejnovější</option>
              <option value="rating">Nejlépe hodnocené</option>
              <option value="reviews">Nejvíce recenzí</option>
            </select>

            <div className="ml-auto text-sm text-gray-600 flex items-center">
              Nalezeno: <span className="font-semibold ml-1">{filteredPeople.length}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Seznam profilů */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredPeople.map((person) => (
            <Link
              key={person.id}
              href={`/profil/${person.slug}`}
              className="bg-white rounded-lg shadow hover:shadow-lg transition duration-200 overflow-hidden group flex flex-col"
            >
              {/* Obrázek */}
              <div className="relative h-48 bg-gradient-to-br from-purple-200 to-pink-300 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-4xl">
                  💆‍♀️
                </div>

                {/* Hodnocení badge */}
                <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 shadow-md flex items-center gap-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-semibold">{person.avg_rating}</span>
                </div>
              </div>

              {/* Info */}
              <div className="p-3 flex-1 flex flex-col">
                <h3 className="text-base font-bold text-gray-900 group-hover:text-purple-600 transition line-clamp-1 mb-1">
                  {person.name}, {person.age}
                </h3>

                <div className="flex items-center text-gray-600 text-xs mb-2">
                  <MapPin className="w-3 h-3 mr-1 flex-shrink-0" />
                  <span className="line-clamp-1">{person.location}</span>
                </div>

                <p className="text-xs text-gray-600 italic line-clamp-2 mb-2 flex-1">
                  {person.short_claim}
                </p>

                {/* Parametry */}
                <div className="text-xs text-gray-500 space-y-1 mb-2">
                  <div className="flex justify-between">
                    <span>Výška:</span>
                    <span className="font-medium">{person.height_cm} cm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Prsa:</span>
                    <span className="font-medium">{person.breast}</span>
                  </div>
                </div>

                {/* Služby - max 3 */}
                <div className="flex flex-wrap gap-1 mb-2">
                  {person.services.slice(0, 3).map((service, idx) => (
                    <span key={idx} className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded">
                      {service}
                    </span>
                  ))}
                  {person.services.length > 3 && (
                    <span className="text-xs text-gray-500">+{person.services.length - 3}</span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-gray-100 mt-auto">
                  <StarRating rating={person.avg_rating} size="sm" />
                  <span className="text-xs text-gray-500">
                    {person.reviews_count} ⭐
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Prázdný stav */}
        {filteredPeople.length === 0 && (
          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <TrendingUp className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Žádné profily nenalezeny
            </h3>
            <p className="text-gray-600">
              Zkuste změnit filtry nebo se podívejte později.
            </p>
            <button
              onClick={() => {
                setSelectedLocation("all");
                setSelectedRating("all");
                setSortBy("newest");
              }}
              className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
            >
              Resetovat filtry
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
