'use client';

import LikeButton from './LikeButton';
import { useState } from 'react';

interface ProfilePageProps {
  profile: any;
  locale: string;
}

export default function ProfilePage({ profile, locale }: ProfilePageProps) {
  const [activeTab, setActiveTab] = useState<'about' | 'gallery' | 'reviews'>(
    'about'
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Instagram Style */}
      <div className="bg-white border-b">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Circular Profile Photo - Instagram Style */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-500 p-1">
                  <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    <svg
                      className="w-16 h-16 md:w-20 md:h-20 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                {profile.verification?.status === 'verified' && (
                  <div className="absolute bottom-1 right-1 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center border-4 border-white">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-grow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                    {profile.title?.[locale] || profile.title?.en}
                  </h1>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>📍 {profile.city_id}</span>
                    {profile.attributes?.age && (
                      <>
                        <span>•</span>
                        <span>{profile.attributes.age} let</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Like Button */}
                <div>
                  <LikeButton profileId={profile.globalID} size="lg" />
                </div>
              </div>

              {/* Stats - Instagram Style */}
              <div className="flex gap-8 mb-6">
                <div className="text-center">
                  <div className="text-xl font-bold text-gray-900">12</div>
                  <div className="text-sm text-gray-600">Fotky</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-gray-900">38</div>
                  <div className="text-sm text-gray-600">Recenze</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-gray-900">4.8</div>
                  <div className="text-sm text-gray-600">⭐ Rating</div>
                </div>
              </div>

              {/* Quick Info Pills */}
              <div className="flex flex-wrap gap-2 mb-4">
                {profile.category_ids?.map((categoryId: string) => (
                  <span
                    key={categoryId}
                    className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium"
                  >
                    {categoryId}
                  </span>
                ))}
                {profile.attributes?.height_cm && (
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                    {profile.attributes.height_cm} cm
                  </span>
                )}
                {profile.attributes?.hair_color && (
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                    {profile.attributes.hair_color}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed">
                {profile.description?.[locale] || profile.description?.en}
              </p>

              {/* Action Buttons - Telegram Style */}
              <div className="flex gap-3 mt-6">
                <button className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-lg hover:shadow-xl">
                  📞 Kontakt
                </button>
                <button className="flex-1 px-6 py-3 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors font-medium">
                  ✍️ Napsat recenzi
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab('about')}
              className={`py-4 px-2 border-b-2 font-medium transition-colors ${
                activeTab === 'about'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              📝 O mně
            </button>
            <button
              onClick={() => setActiveTab('gallery')}
              className={`py-4 px-2 border-b-2 font-medium transition-colors ${
                activeTab === 'gallery'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              📸 Galerie
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`py-4 px-2 border-b-2 font-medium transition-colors ${
                activeTab === 'reviews'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              ⭐ Recenze (38)
            </button>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'about' && (
          <div className="space-y-6">
            {/* Services */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Služby
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {profile.services?.map((service: string) => (
                  <div
                    key={service}
                    className="px-4 py-2 bg-blue-50 text-blue-800 rounded-lg text-sm font-medium text-center hover:bg-blue-100 transition-colors cursor-pointer"
                  >
                    {service}
                  </div>
                ))}
              </div>
            </div>

            {/* Attributes */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Parametry
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {profile.attributes?.age && (
                  <div>
                    <div className="text-sm text-gray-600">Věk</div>
                    <div className="text-lg font-medium text-gray-900">
                      {profile.attributes.age} let
                    </div>
                  </div>
                )}
                {profile.attributes?.height_cm && (
                  <div>
                    <div className="text-sm text-gray-600">Výška</div>
                    <div className="text-lg font-medium text-gray-900">
                      {profile.attributes.height_cm} cm
                    </div>
                  </div>
                )}
                {profile.attributes?.weight_kg && (
                  <div>
                    <div className="text-sm text-gray-600">Váha</div>
                    <div className="text-lg font-medium text-gray-900">
                      {profile.attributes.weight_kg} kg
                    </div>
                  </div>
                )}
                {profile.attributes?.hair_color && (
                  <div>
                    <div className="text-sm text-gray-600">Barva vlasů</div>
                    <div className="text-lg font-medium text-gray-900">
                      {profile.attributes.hair_color}
                    </div>
                  </div>
                )}
                {profile.attributes?.eye_color && (
                  <div>
                    <div className="text-sm text-gray-600">Barva očí</div>
                    <div className="text-lg font-medium text-gray-900">
                      {profile.attributes.eye_color}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'gallery' && (
          <div>
            {/* 3:4 Portrait Grid - Instagram Style */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                <div
                  key={i}
                  className="aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="space-y-4">
            {/* Review Feed - Instagram/Telegram Style */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0"></div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-1">
                      <div>
                        <div className="font-semibold text-gray-900">
                          Martin K.
                        </div>
                        <div className="text-sm text-gray-600">
                          @reviewer#1234 • 2 dny zpět
                        </div>
                      </div>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Skvělý zážitek, velmi profesionální a přátelská. Určitě
                      doporučuji! 🌟
                    </p>
                    <div className="flex gap-4 text-sm text-gray-600">
                      <button className="hover:text-blue-600 transition-colors">
                        👍 12 helpful
                      </button>
                      <button className="hover:text-gray-900 transition-colors">
                        💬 Odpovědět
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
