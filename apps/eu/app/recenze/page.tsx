"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import StarRating from "@/components/StarRating";
import { getAllReviews, getPersonBySlug, getOrganizationBySlug } from "@/lib-cz/demo-data";

export default function RecenzePage() {
  const allReviews = getAllReviews();

  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedRating, setSelectedRating] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("newest");
  const [onlyVerified, setOnlyVerified] = useState<boolean>(false);

  const filteredReviews = useMemo(() => {
    let result = [...allReviews];

    // Filtr podle typu
    if (selectedType === "person") {
      result = result.filter(r => r.target_type === "person");
    } else if (selectedType === "organization") {
      result = result.filter(r => r.target_type === "organization");
    }

    // Filtr podle hodnocení
    if (selectedRating === "5") {
      result = result.filter(r => r.rating === 5);
    } else if (selectedRating === "4+") {
      result = result.filter(r => r.rating >= 4);
    } else if (selectedRating === "3+") {
      result = result.filter(r => r.rating >= 3);
    }

    // Filtr pouze ověřené
    if (onlyVerified) {
      result = result.filter(r => r.verified);
    }

    // Seřazení
    if (sortBy === "newest") {
      result.sort((a, b) => b.created_at.getTime() - a.created_at.getTime());
    } else if (sortBy === "oldest") {
      result.sort((a, b) => a.created_at.getTime() - b.created_at.getTime());
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [allReviews, selectedType, selectedRating, sortBy, onlyVerified]);

  // Získat detaily cíle recenze
  const getReviewTarget = (review: any) => {
    if (review.target_type === "person") {
      return getPersonBySlug(review.target_id);
    } else {
      return getOrganizationBySlug(review.target_id);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Všechny recenze
          </h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Přehled všech recenzí a hodnocení erotických služeb v České republice.
            Pomáhejte ostatním najít kvalitní služby.
          </p>
          <div className="mt-8">
            <Link
              href="/recenze/nova"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Napsat novou recenzi
            </Link>
          </div>
        </div>
      </div>

      {/* Filtry */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-3">
            <select
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="all">Všechny typy</option>
              <option value="person">Osoby</option>
              <option value="organization">Podniky</option>
            </select>

            <select
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={selectedRating}
              onChange={(e) => setSelectedRating(e.target.value)}
            >
              <option value="all">Hodnocení</option>
              <option value="5">5 hvězd</option>
              <option value="4+">4+ hvězdy</option>
              <option value="3+">3+ hvězdy</option>
            </select>

            <select
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="newest">Seřadit: Nejnovější</option>
              <option value="rating">Nejlépe hodnocené</option>
              <option value="oldest">Nejstarší</option>
            </select>

            <label className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
              <input
                type="checkbox"
                className="rounded"
                checked={onlyVerified}
                onChange={(e) => setOnlyVerified(e.target.checked)}
              />
              <span>Pouze ověřené</span>
            </label>
          </div>
          <div className="mt-2 text-sm text-gray-600">
            Zobrazeno {filteredReviews.length} z {allReviews.length} recenzí
          </div>
        </div>
      </div>

      {/* Seznam recenzí */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {filteredReviews.length > 0 ? (
            filteredReviews.map((review) => {
              const target = getReviewTarget(review);
              const targetUrl = review.target_type === "person"
                ? `/profil/${review.target_id}`
                : `/organizace/${review.target_id}`;

              return (
                <div key={review.id} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <Link
                        href={targetUrl}
                        className="text-blue-600 hover:text-blue-700 font-semibold mb-2 inline-block"
                      >
                        Recenze na: {target?.name || "Neznámý"}
                      </Link>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        {review.title}
                      </h2>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="font-medium">{review.author_alias}</span>
                        <span>•</span>
                        <span>{review.created_at.toLocaleDateString("cs-CZ")}</span>
                        {review.verified && (
                          <>
                            <span>•</span>
                            <span className="flex items-center text-green-600">
                              <CheckCircle className="w-4 h-4 mr-1" />
                              Ověřeno
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="ml-4">
                      <StarRating rating={review.rating} size={18} showNumber />
                    </div>
                  </div>

                  {/* Tělo recenze */}
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {review.body}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-500">
                      {review.target_type === "person" ? "Osoba" : "Podnik"}
                    </span>
                    <Link
                      href={targetUrl}
                      className="text-blue-600 hover:text-blue-700 text-sm font-semibold"
                    >
                      Zobrazit profil →
                    </Link>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="bg-white rounded-xl shadow-lg p-12 text-center">
              <p className="text-gray-500 text-lg">
                Žádné recenze nenalezeny. Zkuste upravit filtry.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
