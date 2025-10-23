import { Metadata } from "next";
import Link from "next/link";
import { MapPin, CheckCircle, Star } from "lucide-react";
import StarRating from "@/components/StarRating";
import { getPersonBySlug, getReviewsByTargetId } from "@/lib/demo-data";
import { notFound } from "next/navigation";
import { generatePersonSchema } from "@/lib/seo/schema-person";
import { generatePersonMeta } from "@/lib/seo/meta-tags";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const person = getPersonBySlug(slug);

  if (!person) {
    return {
      title: "Profil nenalezen | EroticReviews.cz",
      robots: { index: false, follow: false },
    };
  }

  return generatePersonMeta(person);
}

export default async function PersonProfilePage({ params }: PageProps) {
  const { slug } = await params;
  const person = getPersonBySlug(slug);

  if (!person) {
    notFound();
  }

  const reviews = getReviewsByTargetId(person.id);
  const displayedReviews = reviews.slice(0, 3);

  // Schema.org structured data pro SEO
  const personSchema = generatePersonSchema(person, reviews);

  return (
    <>
      {/* Schema.org JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema, null, 2) }}
      />

      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Hlavní obsah */}
          <div className="lg:col-span-2 space-y-6">
            {/* Galerie */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                {person.gallery.map((img, idx) => (
                  <div
                    key={idx}
                    className={`relative ${idx === 0 ? "md:col-span-2 h-96" : "h-64"} bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                      <div className="text-center">
                        <div className="text-6xl mb-2">
                          {person.type === "divka" ? "👤" : person.type === "maserka" ? "💆‍♀️" : "👑"}
                        </div>
                        <p className="text-sm">Demo fotka {idx + 1}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Základní info */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-2">
                    {person.name}, {person.age}
                  </h1>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-5 h-5 mr-2" />
                    {person.location}
                  </div>
                  <p className="text-xl text-blue-600 italic">
                    {person.short_claim}
                  </p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 mb-2">
                    <StarRating rating={person.avg_rating} size="lg" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{person.avg_rating}</p>
                  <p className="text-sm text-gray-600">{person.reviews_count} recenzí</p>
                </div>
              </div>

              {/* Popis */}
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">O mně</h2>
                <div className="text-gray-700 whitespace-pre-line">
                  {person.description}
                </div>
              </div>
            </div>

            {/* Recenze */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Recenze ({person.reviews_count})
                </h2>
                <Link
                  href={`/recenze?profil=${person.slug}`}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Napsat recenzi
                </Link>
              </div>

              {displayedReviews.length > 0 ? (
                <div className="space-y-6">
                  {displayedReviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-semibold text-lg">{review.title}</h3>
                            {review.verified && (
                              <span className="flex items-center text-green-600 text-sm">
                                <CheckCircle className="w-4 h-4 mr-1" />
                                Ověřeno
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-3 text-sm text-gray-600">
                            <span>{review.author_alias}</span>
                            <span>•</span>
                            <span>{review.created_at.toLocaleDateString("cs-CZ")}</span>
                          </div>
                        </div>
                        <StarRating rating={review.rating} size="sm" />
                      </div>
                      <p className="text-gray-700">{review.body}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <Star className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                  <p>Zatím zde nejsou žádné recenze. Buďte první!</p>
                </div>
              )}

              {reviews.length > 3 && (
                <div className="mt-6 text-center">
                  <Link
                    href={`/recenze?profil=${person.slug}`}
                    className="text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    Zobrazit všechny recenze ({person.reviews_count}) →
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Parametry */}
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Parametry</h3>
              <dl className="space-y-3">
                <div className="flex justify-between">
                  <dt className="text-gray-600">Věk</dt>
                  <dd className="font-semibold">{person.age} let</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Výška</dt>
                  <dd className="font-semibold">{person.height_cm} cm</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Váha</dt>
                  <dd className="font-semibold">{person.weight_kg} kg</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Prsa</dt>
                  <dd className="font-semibold">{person.breast}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Oči</dt>
                  <dd className="font-semibold capitalize">{person.eyes}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Tetování</dt>
                  <dd className="font-semibold">{person.tattoos === "yes" ? "Ano" : "Ne"}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Piercing</dt>
                  <dd className="font-semibold">{person.piercing === "yes" ? "Ano" : "Ne"}</dd>
                </div>
              </dl>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Jazyky</h4>
                <div className="flex flex-wrap gap-2">
                  {person.languages.map((lang) => (
                    <span
                      key={lang}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Služby</h4>
                <div className="flex flex-wrap gap-2">
                  {person.services.map((service) => (
                    <span
                      key={service}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Cena</h4>
                <p className="text-lg font-bold text-blue-600">{person.pricing_note}</p>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <Link
                  href={`/recenze?profil=${person.slug}`}
                  className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition"
                >
                  Napsat recenzi
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
