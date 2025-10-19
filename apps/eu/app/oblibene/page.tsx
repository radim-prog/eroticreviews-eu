'use client';

import { useState, useEffect } from 'react';
import { useLikes } from '@/hooks/useLikes';
import LikeButton from '@/components/LikeButton';
import Link from 'next/link';

export default function FavoritesPage() {
  const { likedProfiles, loading, user } = useLikes();
  const [profiles, setProfiles] = useState<any[]>([]);
  const [loadingProfiles, setLoadingProfiles] = useState(true);

  useEffect(() => {
    if (!loading && likedProfiles.length > 0) {
      fetchProfiles();
    } else if (!loading) {
      setLoadingProfiles(false);
    }
  }, [likedProfiles, loading]);

  const fetchProfiles = async () => {
    try {
      // In a real app, you'd fetch profiles by IDs
      // For now, we'll use placeholder data
      setProfiles([]);
    } catch (error) {
      console.error('Error fetching profiles:', error);
    } finally {
      setLoadingProfiles(false);
    }
  };

  if (loading || loadingProfiles) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Načítám oblíbené profily...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <svg
            className="w-16 h-16 text-gray-400 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Přihlaste se
          </h2>
          <p className="text-gray-600 mb-6">
            Pro zobrazení oblíbených profilů se prosím přihlaste.
          </p>
          <a
            href="/prihlaseni?redirect=/oblibene"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Přihlásit se
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3">
            <svg
              className="w-8 h-8 text-red-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
            <h1 className="text-3xl font-bold text-gray-900">
              Oblíbené profily
            </h1>
          </div>
          <p className="mt-2 text-gray-600">
            Máte {likedProfiles.length}{' '}
            {likedProfiles.length === 1
              ? 'oblíbený profil'
              : likedProfiles.length >= 2 && likedProfiles.length <= 4
              ? 'oblíbené profily'
              : 'oblíbených profilů'}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {likedProfiles.length === 0 ? (
          <div className="bg-white rounded-lg shadow-lg p-12 text-center">
            <svg
              className="w-20 h-20 text-gray-300 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Zatím nemáte žádné oblíbené
            </h2>
            <p className="text-gray-600 mb-6">
              Procházejte profily a klikněte na ❤️ pro přidání do oblíbených.
            </p>
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Procházet profily
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {likedProfiles.map((profileId) => (
              <div
                key={profileId}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative">
                  {/* Placeholder image */}
                  <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                    <svg
                      className="w-16 h-16 text-gray-400"
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

                  {/* Like button */}
                  <div className="absolute top-3 right-3">
                    <LikeButton profileId={profileId} size="md" />
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {profileId}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Profil details...
                  </p>
                  <Link
                    href={`/profil/${profileId}`}
                    className="block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Zobrazit profil
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
