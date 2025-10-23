"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { MapPin, Star, TrendingUp, Filter } from "lucide-react";
import StarRating from "./StarRating";
import type { Person, Organization } from "@/lib-cz/types";

interface CategoryPageProps {
  items: Person[] | Organization[];
  title: string;
  description: string;
  gradient: string;
  accentColor: string;
  emoji: string;
  type: "person" | "organization";
}

export default function CategoryPage({
  items,
  title,
  description,
  gradient,
  accentColor,
  emoji,
  type,
}: CategoryPageProps) {
  const [selectedLocation, setSelectedLocation] = useState<string>("all");
  const [selectedRating, setSelectedRating] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("rating");

  // Get unique locations
  const locations = useMemo(() => {
    const locs = new Set<string>();
    items.forEach((item) => {
      if ("location" in item && item.location) {
        locs.add(item.location);
      }
    });
    return Array.from(locs).sort();
  }, [items]);

  // Filter and sort items
  const filteredItems = useMemo(() => {
    let filtered = [...items];

    // Filter by location
    if (selectedLocation !== "all") {
      filtered = filtered.filter(
        (item) => "location" in item && item.location === selectedLocation
      );
    }

    // Filter by rating
    if (selectedRating !== "all") {
      const minRating = parseFloat(selectedRating);
      filtered = filtered.filter(
        (item) => item.avg_rating && item.avg_rating >= minRating
      );
    }

    // Sort
    if (sortBy === "rating") {
      filtered.sort((a, b) => (b.avg_rating || 0) - (a.avg_rating || 0));
    } else if (sortBy === "reviews") {
      filtered.sort((a, b) => (b.reviews_count || 0) - (a.reviews_count || 0));
    } else if (sortBy === "name") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    return filtered;
  }, [items, selectedLocation, selectedRating, sortBy]);

  const linkPrefix = type === "person" ? "/profil" : "/organizace";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero section */}
      <div className={`${gradient} text-white py-16`}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="text-6xl mb-4">{emoji}</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            <p className="text-lg text-white/90">{description}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-gray-600" />
            <h2 className="font-semibold text-lg">Filtry a řazení</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Location filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Lokalita
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              >
                <option value="all">Všechny lokality</option>
                {locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            {/* Rating filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Hodnocení
              </label>
              <select
                value={selectedRating}
                onChange={(e) => setSelectedRating(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              >
                <option value="all">Všechna hodnocení</option>
                <option value="4">4+ hvězdiček</option>
                <option value="3">3+ hvězdiček</option>
              </select>
            </div>

            {/* Sort by */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Řazení
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              >
                <option value="rating">Podle hodnocení</option>
                <option value="reviews">Podle počtu recenzí</option>
                <option value="name">Podle jména</option>
              </select>
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-600">
            Zobrazeno <strong>{filteredItems.length}</strong> z {items.length} {type === "person" ? "osob" : "organizací"}
          </div>
        </div>

        {/* Items grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Link
              key={item.id}
              href={`${linkPrefix}/${item.slug}`}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden group"
            >
              {/* Image placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-50">
                  {emoji}
                </div>
                {"gallery" in item && item.gallery && item.gallery.length > 0 && (
                  <div className="absolute top-3 right-3 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                    📷 {item.gallery.length}
                  </div>
                )}
              </div>

              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 group-hover:text-rose-600 transition-colors">
                  {item.name}
                </h3>

                {/* Rating */}
                {item.avg_rating && (
                  <div className="mb-3">
                    <StarRating rating={item.avg_rating} size={16} />
                    <span className="text-sm text-gray-600 ml-2">
                      ({item.reviews_count || 0} recenzí)
                    </span>
                  </div>
                )}

                {/* Location */}
                {"location" in item && item.location && (
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    {item.location}
                  </div>
                )}

                {/* Short description */}
                {"short_claim" in item && item.short_claim && (
                  <p className="text-sm text-gray-700 line-clamp-2">
                    {item.short_claim}
                  </p>
                )}

                {/* Person specific info */}
                {"age" in item && (
                  <div className="mt-3 flex flex-wrap gap-2 text-xs">
                    {item.age && (
                      <span className="bg-gray-100 px-2 py-1 rounded">
                        {item.age} let
                      </span>
                    )}
                    {item.height_cm && (
                      <span className="bg-gray-100 px-2 py-1 rounded">
                        {item.height_cm} cm
                      </span>
                    )}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* No results */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              Žádné výsledky nenalezeny. Zkuste změnit filtry.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
