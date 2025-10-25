"use client";

import { use } from "react";
import Link from "next/link";
import { CheckCircle, ArrowLeft, User, Building2 } from "lucide-react";
import StarRating from "@/components/StarRating";
import { getReviewById, getPersonBySlug, getOrganizationBySlug } from "@/lib-cz/demo-data";
import { notFound } from "next/navigation";

export default function RecenzeDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const review = getReviewById(resolvedParams.id);

  if (!review) {
    notFound();
  }

  // Získat cíl recenze
  const target = review.target_type === "person"
    ? getPersonBySlug(review.target_id)
    : getOrganizationBySlug(review.target_id);

  const targetUrl = review.target_type === "person"
    ? `/profil/${review.target_id}`
    : `/organizace/${review.target_id}`;

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/recenze"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zpět na recenze
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Hlavní karta recenze */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Header s profilem */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  {review.target_type === "person" ? (
                    <User className="w-8 h-8" />
                  ) : (
                    <Building2 className="w-8 h-8" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="text-sm opacity-80 mb-1">
                    Recenze na {review.target_type === "person" ? "osobu" : "podnik"}
                  </div>
                  <Link
                    href={targetUrl}
                    className="text-2xl font-bold hover:underline inline-block mb-2"
                  >
                    {target?.name || "Neznámý profil"}
                  </Link>
                  {target && "location" in target && target.location && (
                    <div className="text-sm opacity-90">
                      📍 {target.location}
                    </div>
                  )}
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold mb-1">{review.rating}.0</div>
                  <StarRating rating={review.rating} size={20} />
                </div>
              </div>
            </div>

            {/* Tělo recenze */}
            <div className="p-8">
              {/* Titulek */}
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {review.title}
              </h1>

              {/* Meta informace */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6 pb-6 border-b">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-900">{review.author_alias}</span>
                </div>
                <span>•</span>
                <div>{review.created_at.toLocaleDateString("cs-CZ", {
                  year: "numeric",
                  month: "long",
                  day: "numeric"
                })}</div>
                {review.verified && (
                  <>
                    <span>•</span>
                    <div className="flex items-center gap-1 text-green-600 font-medium">
                      <CheckCircle className="w-4 h-4" />
                      Ověřená návštěva
                    </div>
                  </>
                )}
              </div>

              {/* Text recenze */}
              <div className="prose max-w-none mb-8">
                <p className="text-lg text-gray-800 leading-relaxed whitespace-pre-line">
                  {review.body}
                </p>
              </div>

              {/* Footer akce */}
              <div className="pt-6 border-t flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  {review.target_type === "person" ? "Recenze na osobu" : "Recenze na podnik"}
                </div>
                <Link
                  href={targetUrl}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Zobrazit profil →
                </Link>
              </div>
            </div>
          </div>

          {/* Další akce */}
          <div className="mt-6 flex gap-4">
            <Link
              href="/recenze"
              className="flex-1 text-center px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition"
            >
              Všechny recenze
            </Link>
            <Link
              href="/recenze/nova"
              className="flex-1 text-center px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition"
            >
              Napsat recenzi
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
