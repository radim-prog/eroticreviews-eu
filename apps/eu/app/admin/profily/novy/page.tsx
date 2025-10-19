'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NewProfilePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    globalID: '',
    country_id: 'cz',
    city_id: '',
    category_ids: [] as string[],
    title_en: '',
    title_cs: '',
    title_de: '',
    title_es: '',
    title_fr: '',
    title_nl: '',
    description_en: '',
    description_cs: '',
    description_de: '',
    description_es: '',
    description_fr: '',
    description_nl: '',
    slug_en: '',
    slug_cs: '',
    slug_de: '',
    slug_es: '',
    slug_fr: '',
    slug_nl: '',
    age: '',
    height_cm: '',
    weight_kg: '',
    hair_color: '',
    eye_color: '',
    services: [] as string[],
    status: 'draft' as 'draft' | 'published',
    verification_status: 'unverified' as 'unverified' | 'verified',
  });

  const categories = [
    { id: 'escorts', label: 'Escorts / Holky na sex' },
    { id: 'massage', label: 'Erotic Massage / Erotické masáže' },
    { id: 'bdsm', label: 'BDSM Dominatrix / Dominy' },
    { id: 'digital-models', label: 'Digital Models / Digitální modelky' },
  ];

  const cities = [
    { id: 'prague', label: 'Prague / Praha' },
    { id: 'brno', label: 'Brno' },
    { id: 'ostrava', label: 'Ostrava' },
    { id: 'berlin', label: 'Berlin' },
    { id: 'munich', label: 'Munich / Mnichov' },
    { id: 'vienna', label: 'Vienna / Vídeň' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/admin/profiles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          globalID: formData.globalID,
          type: 'profile',
          country_id: formData.country_id,
          city_id: formData.city_id,
          category_ids: formData.category_ids,
          slug_current: {
            en: formData.slug_en,
            cs: formData.slug_cs,
            de: formData.slug_de,
            es: formData.slug_es,
            fr: formData.slug_fr,
            nl: formData.slug_nl,
          },
          slug_history: [],
          title: {
            en: formData.title_en,
            cs: formData.title_cs,
            de: formData.title_de,
            es: formData.title_es,
            fr: formData.title_fr,
            nl: formData.title_nl,
          },
          description: {
            en: formData.description_en,
            cs: formData.description_cs,
            de: formData.description_de,
            es: formData.description_es,
            fr: formData.description_fr,
            nl: formData.description_nl,
          },
          attributes: {
            age: formData.age ? parseInt(formData.age) : null,
            height_cm: formData.height_cm ? parseInt(formData.height_cm) : null,
            weight_kg: formData.weight_kg ? parseInt(formData.weight_kg) : null,
            hair_color: formData.hair_color || null,
            eye_color: formData.eye_color || null,
          },
          services: formData.services,
          verification: {
            status: formData.verification_status,
            date: new Date().toISOString().split('T')[0],
            verified_by: 'admin',
          },
          status: formData.status,
          activity: {
            created_date: new Date().toISOString(),
            last_activity_date: new Date().toISOString(),
            last_updated_by: 'admin',
          },
          visibility: {
            eu: true,
            cz: formData.country_id === 'cz',
            de: formData.country_id === 'de',
            es: formData.country_id === 'es',
            fr: formData.country_id === 'fr',
            nl: formData.country_id === 'nl',
            uk: formData.country_id === 'uk',
          },
        }),
      });

      if (response.ok) {
        router.push('/admin/profily');
      } else {
        const error = await response.json();
        alert('Chyba při vytváření profilu: ' + error.message);
      }
    } catch (error) {
      console.error('Error creating profile:', error);
      alert('Chyba při vytváření profilu');
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryToggle = (categoryId: string) => {
    setFormData((prev) => ({
      ...prev,
      category_ids: prev.category_ids.includes(categoryId)
        ? prev.category_ids.filter((id) => id !== categoryId)
        : [...prev.category_ids, categoryId],
    }));
  };

  return (
    <div className="max-w-4xl">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Nový profil</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Info */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Základní informace
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Global ID *
              </label>
              <input
                type="text"
                required
                placeholder="profile-jmeno-001"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.globalID}
                onChange={(e) =>
                  setFormData({ ...formData, globalID: e.target.value })
                }
              />
              <p className="text-xs text-gray-500 mt-1">
                Formát: profile-jmeno-001
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Město *
              </label>
              <select
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.city_id}
                onChange={(e) =>
                  setFormData({ ...formData, city_id: e.target.value })
                }
              >
                <option value="">Vyberte město</option>
                {cities.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Země *
              </label>
              <select
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.country_id}
                onChange={(e) =>
                  setFormData({ ...formData, country_id: e.target.value })
                }
              >
                <option value="cz">Czech Republic / Česko</option>
                <option value="de">Germany / Německo</option>
                <option value="at">Austria / Rakousko</option>
                <option value="es">Spain / Španělsko</option>
                <option value="fr">France / Francie</option>
                <option value="nl">Netherlands / Nizozemsko</option>
                <option value="uk">United Kingdom / Velká Británie</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.status}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    status: e.target.value as 'draft' | 'published',
                  })
                }
              >
                <option value="draft">Draft / Koncept</option>
                <option value="published">Published / Publikováno</option>
              </select>
            </div>
          </div>

          {/* Categories */}
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Kategorie *
            </label>
            <div className="grid grid-cols-2 gap-3">
              {categories.map((category) => (
                <label
                  key={category.id}
                  className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50"
                >
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                    checked={formData.category_ids.includes(category.id)}
                    onChange={() => handleCategoryToggle(category.id)}
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    {category.label}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Titles (i18n) */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Titulky</h3>

          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                🇬🇧 English *
              </label>
              <input
                type="text"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.title_en}
                onChange={(e) =>
                  setFormData({ ...formData, title_en: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                🇨🇿 Čeština *
              </label>
              <input
                type="text"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.title_cs}
                onChange={(e) =>
                  setFormData({ ...formData, title_cs: e.target.value })
                }
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  🇩🇪 Deutsch
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.title_de}
                  onChange={(e) =>
                    setFormData({ ...formData, title_de: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  🇪🇸 Español
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.title_es}
                  onChange={(e) =>
                    setFormData({ ...formData, title_es: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  🇫🇷 Français
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.title_fr}
                  onChange={(e) =>
                    setFormData({ ...formData, title_fr: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  🇳🇱 Nederlands
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.title_nl}
                  onChange={(e) =>
                    setFormData({ ...formData, title_nl: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
        </div>

        {/* Slugs (i18n) */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            URL Slugs
          </h3>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                🇬🇧 English *
              </label>
              <input
                type="text"
                required
                placeholder="karolina-luxury-escort-prague"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.slug_en}
                onChange={(e) =>
                  setFormData({ ...formData, slug_en: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                🇨🇿 Čeština *
              </label>
              <input
                type="text"
                required
                placeholder="karolina-luxusni-escort-praha"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.slug_cs}
                onChange={(e) =>
                  setFormData({ ...formData, slug_cs: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                🇩🇪 Deutsch
              </label>
              <input
                type="text"
                placeholder="karolina-luxus-escort-prag"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.slug_de}
                onChange={(e) =>
                  setFormData({ ...formData, slug_de: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                🇪🇸 Español
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.slug_es}
                onChange={(e) =>
                  setFormData({ ...formData, slug_es: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                🇫🇷 Français
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.slug_fr}
                onChange={(e) =>
                  setFormData({ ...formData, slug_fr: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                🇳🇱 Nederlands
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.slug_nl}
                onChange={(e) =>
                  setFormData({ ...formData, slug_nl: e.target.value })
                }
              />
            </div>
          </div>
        </div>

        {/* Attributes */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Atributy
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Věk
              </label>
              <input
                type="number"
                min="18"
                max="99"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.age}
                onChange={(e) =>
                  setFormData({ ...formData, age: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Výška (cm)
              </label>
              <input
                type="number"
                min="140"
                max="210"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.height_cm}
                onChange={(e) =>
                  setFormData({ ...formData, height_cm: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Váha (kg)
              </label>
              <input
                type="number"
                min="40"
                max="150"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.weight_kg}
                onChange={(e) =>
                  setFormData({ ...formData, weight_kg: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Verifikace
              </label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.verification_status}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    verification_status: e.target.value as
                      | 'unverified'
                      | 'verified',
                  })
                }
              >
                <option value="unverified">Unverified</option>
                <option value="verified">Verified ✓</option>
              </select>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            disabled={loading}
          >
            Zrušit
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? 'Ukládám...' : 'Vytvořit profil'}
          </button>
        </div>
      </form>
    </div>
  );
}
