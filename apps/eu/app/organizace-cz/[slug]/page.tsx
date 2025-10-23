import { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Globe, Mail, CheckCircle, Star, Building } from "lucide-react";
import StarRating from "@/components/StarRating";
import { getOrganizationBySlug, getReviewsByTargetId, getPersonBySlug } from "@/lib/demo-data";
import { notFound } from "next/navigation";
import { generateBusinessSchema } from "@/lib/seo/schema-business";
import { generateOrganizationSchema } from "@/lib/seo/schema-organization";
import { generateOrganizationMeta } from "@/lib/seo/meta-tags";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const organization = getOrganizationBySlug(slug);

  if (!organization) {
    return {
      title: "Organizace nenalezena | EroticReviews.cz",
      robots: { index: false, follow: false },
    };
  }

  return generateOrganizationMeta(organization);
}

export default async function OrganizationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const organization = getOrganizationBySlug(slug);

  if (!organization) {
    notFound();
  }

  const reviews = getReviewsByTargetId(organization.id);
  const displayedReviews = reviews.slice(0, 3);

  // Získat osoby, které patří k této organizaci
  const people = organization.people_ids
    .map(id => getPersonBySlug(id))
    .filter(p => p !== undefined);

  const orgTypeLabel = organization.type === "podnik" ? "Podnik" :
    organization.type === "masazni_salon" ? "Masážní salon" :
    organization.type === "bdsm_studio" ? "BDSM studio" : "Escort agentura";

  // Schema.org structured data pro SEO
  // LocalBusiness pro podniky/salony/studia, Organization pro agentury
  const orgSchema = organization.type === "escort_agentura"
    ? generateOrganizationSchema(organization, reviews)
    : generateBusinessSchema(organization, reviews);

  return (
    <>
      {/* Schema.org JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema, null, 2) }}
      />

      <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Hlavní obsah */}
          <div className="lg:col-span-2 space-y-6">
            {/* Galerie */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                {organization.gallery.map((img, idx) => (
                  <div
                    key={idx}
                    className={`relative ${idx === 0 ? "md:col-span-2 h-96" : "h-64"} bg-gradient-to-br from-indigo-200 to-purple-300 rounded-lg overflow-hidden`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                      <div className="text-center">
                        <div className="text-6xl mb-2">
                          {organization.type === "podnik" ? "🏢" :
                            organization.type === "masazni_salon" ? "💆" : "⛓️"}
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
                  <div className="flex items-center gap-3 mb-2">
                    <Building className="w-8 h-8 text-indigo-600" />
                    <span className="text-sm font-medium text-indigo-600 uppercase">
                      {orgTypeLabel}
                    </span>
                  </div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-2">
                    {organization.name}
                  </h1>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-5 h-5 mr-2" />
                    {organization.location}
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 mb-2">
                    <StarRating rating={organization.avg_rating} size="lg" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{organization.avg_rating}</p>
                  <p className="text-sm text-gray-600">{organization.reviews_count} recenzí</p>
                </div>
              </div>

              {/* Popis */}
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">O nás</h2>
                <div className="text-gray-700 whitespace-pre-line">
                  {organization.description}
                </div>
              </div>
            </div>

            {/* Naše osoby */}
            {people.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Naše {organization.type === "podnik" ? "společnice" : organization.type === "masazni_salon" ? "masérky" : "dominy"} ({people.length})
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {people.map((person) => person && (
                    <Link
                      key={person.id}
                      href={`/profil/${person.slug}`}
                      className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-indigo-500 hover:shadow-xl transition-all duration-300 group flex flex-col"
                    >
                      {/* Profilová fotka */}
                      <div className="relative h-64 bg-gradient-to-br from-purple-200 via-pink-200 to-indigo-200 overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-60 group-hover:scale-110 transition-transform duration-300">
                          {person.type === "divka" ? "👤" : person.type === "maserka" ? "💆‍♀️" : "👑"}
                        </div>

                        {/* Rating badge */}
                        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-lg flex items-center gap-1.5">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-bold text-gray-900">{person.avg_rating}</span>
                        </div>

                        {/* Type badge */}
                        <div className="absolute top-3 left-3 bg-indigo-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
                          {person.type === "divka" ? "Escort" : person.type === "maserka" ? "Masérka" : "Domina"}
                        </div>
                      </div>

                      {/* Detailní informace */}
                      <div className="p-5 flex-1 flex flex-col space-y-3">
                        {/* Jméno a věk */}
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition mb-1">
                            {person.name}, {person.age}
                          </h3>
                          <div className="flex items-center text-gray-600 text-sm">
                            <MapPin className="w-3.5 h-3.5 mr-1 flex-shrink-0" />
                            <span>{person.location}</span>
                          </div>
                        </div>

                        {/* Short claim */}
                        <p className="text-sm text-gray-600 italic line-clamp-2 flex-1">
                          &quot;{person.short_claim}&quot;
                        </p>

                        {/* Fyzické parametry */}
                        <div className="bg-gray-50 rounded-lg p-3 space-y-1.5 text-xs">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Výška:</span>
                            <span className="font-semibold text-gray-900">{person.height_cm} cm</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Váha:</span>
                            <span className="font-semibold text-gray-900">{person.weight_kg} kg</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Prsa:</span>
                            <span className="font-semibold text-gray-900">{person.breast}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Oči:</span>
                            <span className="font-semibold text-gray-900 capitalize">{person.eyes}</span>
                          </div>
                        </div>

                        {/* Služby */}
                        <div>
                          <div className="text-xs font-semibold text-gray-700 mb-2">Nabízené služby:</div>
                          <div className="flex flex-wrap gap-1.5">
                            {person.services.slice(0, 5).map((service, idx) => (
                              <span
                                key={idx}
                                className="text-xs bg-indigo-100 text-indigo-700 font-medium px-2.5 py-1 rounded-full"
                              >
                                {service}
                              </span>
                            ))}
                            {person.services.length > 5 && (
                              <span className="text-xs bg-gray-200 text-gray-700 font-medium px-2.5 py-1 rounded-full">
                                +{person.services.length - 5}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Jazyky */}
                        <div className="flex items-center gap-2 text-xs text-gray-600">
                          <span className="font-semibold">Jazyky:</span>
                          <div className="flex gap-1">
                            {person.languages.map((lang, idx) => (
                              <span key={idx} className="bg-gray-100 px-2 py-0.5 rounded font-medium">
                                {lang}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Cena */}
                        {person.pricing_note && (
                          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-3">
                            <div className="text-xs text-indigo-700 font-semibold mb-0.5">Ceník:</div>
                            <div className="text-sm font-bold text-indigo-900">{person.pricing_note}</div>
                          </div>
                        )}

                        {/* Rating a recenze */}
                        <div className="pt-3 border-t border-gray-200 flex items-center justify-between">
                          <StarRating rating={person.avg_rating} size="sm" />
                          <span className="text-sm font-semibold text-gray-700">
                            {person.reviews_count} {person.reviews_count === 1 ? 'recenze' : person.reviews_count < 5 ? 'recenze' : 'recenzí'}
                          </span>
                        </div>

                        {/* Call to action */}
                        <div className="pt-2">
                          <div className="w-full text-center bg-indigo-600 text-white font-semibold py-2.5 px-4 rounded-lg group-hover:bg-indigo-700 transition text-sm">
                            Zobrazit profil →
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Recenze */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Recenze ({organization.reviews_count})
                </h2>
                <Link
                  href={`/recenze?organizace=${organization.slug}`}
                  className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
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
                    href={`/recenze?organizace=${organization.slug}`}
                    className="text-indigo-600 hover:text-indigo-700 font-semibold"
                  >
                    Zobrazit všechny recenze ({organization.reviews_count}) →
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Kontakty */}
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Kontakt</h3>
              <dl className="space-y-4">
                {organization.contacts.address && (
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <dd className="text-gray-700">{organization.contacts.address}</dd>
                  </div>
                )}
                {organization.contacts.phone && (
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <dd>
                      <a
                        href={`tel:${organization.contacts.phone}`}
                        className="text-indigo-600 hover:text-indigo-700"
                      >
                        {organization.contacts.phone}
                      </a>
                    </dd>
                  </div>
                )}
                {organization.contacts.email && (
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <dd>
                      <a
                        href={`mailto:${organization.contacts.email}`}
                        className="text-indigo-600 hover:text-indigo-700 break-all"
                      >
                        {organization.contacts.email}
                      </a>
                    </dd>
                  </div>
                )}
                {organization.contacts.web && (
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <dd>
                      <a
                        href={organization.contacts.web}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:text-indigo-700 break-all"
                      >
                        Web
                      </a>
                    </dd>
                  </div>
                )}
              </dl>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <Link
                  href={`/recenze?organizace=${organization.slug}`}
                  className="block w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition"
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
