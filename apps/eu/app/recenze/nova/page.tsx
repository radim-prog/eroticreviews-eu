"use client";

import { useState } from "react";
import { Star, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function NovaRecenzePage() {
  const [rating, setRating] = useState<number>(0);
  const [hoveredRating, setHoveredRating] = useState<number>(0);
  const [formData, setFormData] = useState({
    targetType: "person",
    targetId: "",
    title: "",
    body: "",
    authorAlias: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // V reálné aplikaci by se zde odeslala data na backend
    console.log({ ...formData, rating });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-lg w-full bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Děkujeme za vaši recenzi!</h2>
          <p className="text-gray-600 mb-6">
            Vaše recenze byla úspěšně odeslána. Po ověření administrátorem bude zveřejněna.
          </p>
          <div className="flex gap-3 justify-center">
            <Link
              href="/recenze"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Zobrazit recenze
            </Link>
            <Link
              href="/"
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
            >
              Na úvodní stránku
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Napsat novou recenzi
          </h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Sdílejte svou zkušenost s ostatními uživateli. Vaše hodnocení pomůže dalším při výběru služeb.
          </p>
        </div>
      </div>

      {/* Formulář */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          {/* Informační box */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div className="text-sm text-blue-900">
              <p className="font-semibold mb-1">Pravidla recenzí:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Pište pravdivě a objektivně</li>
                <li>Respektujte soukromí osob</li>
                <li>Vyhýbejte se vulgárním výrazům</li>
                <li>Všechny recenze jsou před zveřejněním kontrolovány</li>
              </ul>
            </div>
          </div>

          {/* Formulář */}
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 space-y-6">
            {/* Typ cíle */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Co chcete hodnotit? *
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, targetType: "person", targetId: "" })}
                  className={`p-4 border-2 rounded-lg transition ${
                    formData.targetType === "person"
                      ? "border-blue-600 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="text-3xl mb-2">👤</div>
                  <div className="font-semibold">Osobu</div>
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, targetType: "organization", targetId: "" })}
                  className={`p-4 border-2 rounded-lg transition ${
                    formData.targetType === "organization"
                      ? "border-blue-600 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="text-3xl mb-2">🏢</div>
                  <div className="font-semibold">Podnik</div>
                </button>
              </div>
            </div>

            {/* Výběr profilu/podniku */}
            <div>
              <label htmlFor="targetId" className="block text-sm font-semibold text-gray-700 mb-2">
                Vyberte {formData.targetType === "person" ? "profil" : "podnik"} *
              </label>
              <select
                id="targetId"
                required
                value={formData.targetId}
                onChange={(e) => setFormData({ ...formData, targetId: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">-- Vyberte --</option>
                {formData.targetType === "person" ? (
                  <>
                    <option value="laura-praha-3">Laura, 22 - Praha 3</option>
                    <option value="tereza-praha-5">Tereza, 25 - Praha 5</option>
                    <option value="nikol-praha-1">Nikol, 24 - Praha 1</option>
                  </>
                ) : (
                  <>
                    <option value="club-paradise-praha-2">Club Paradise - Praha 2</option>
                    <option value="privat-u-andelu-praha-5">Privát U Andělů - Praha 5</option>
                    <option value="salon-relaxu">Salon Relaxu - Brno</option>
                  </>
                )}
              </select>
            </div>

            {/* Hodnocení */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Vaše hodnocení *
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                    className="focus:outline-none"
                  >
                    <Star
                      className={`w-10 h-10 transition ${
                        star <= (hoveredRating || rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  </button>
                ))}
                {rating > 0 && (
                  <span className="ml-3 text-lg font-semibold text-gray-700">
                    {rating} / 5
                  </span>
                )}
              </div>
            </div>

            {/* Titulek */}
            <div>
              <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">
                Titulek recenze *
              </label>
              <input
                type="text"
                id="title"
                required
                maxLength={100}
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Stručně shrňte svou zkušenost"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Tělo recenze */}
            <div>
              <label htmlFor="body" className="block text-sm font-semibold text-gray-700 mb-2">
                Vaše zkušenost *
              </label>
              <textarea
                id="body"
                required
                rows={6}
                minLength={50}
                maxLength={1000}
                value={formData.body}
                onChange={(e) => setFormData({ ...formData, body: e.target.value })}
                placeholder="Popište svou zkušenost podrobněji (minimálně 50 znaků)..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
              <div className="text-sm text-gray-500 mt-1">
                {formData.body.length} / 1000 znaků
              </div>
            </div>

            {/* Přezdívka */}
            <div>
              <label htmlFor="authorAlias" className="block text-sm font-semibold text-gray-700 mb-2">
                Vaše přezdívka *
              </label>
              <input
                type="text"
                id="authorAlias"
                required
                maxLength={50}
                value={formData.authorAlias}
                onChange={(e) => setFormData({ ...formData, authorAlias: e.target.value })}
                placeholder="Např. Jan K."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <p className="text-sm text-gray-500 mt-1">
                Nebude zveřejněn váš email, pouze přezdívka
              </p>
            </div>

            {/* Tlačítka */}
            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                disabled={rating === 0}
                className="flex-1 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Odeslat recenzi
              </button>
              <Link
                href="/recenze"
                className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition"
              >
                Zrušit
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
