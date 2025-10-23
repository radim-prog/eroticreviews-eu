"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function AgeVerification() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Check if user has already verified age
    const verified = localStorage.getItem("age-verified");
    if (!verified) {
      setShowModal(true);
    }
  }, []);

  const handleConfirm = () => {
    localStorage.setItem("age-verified", "true");
    setShowModal(false);
  };

  const handleDecline = () => {
    window.location.href = "https://google.com";
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-[100] flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-8 relative">
        <div className="text-center">
          <div className="text-6xl mb-4">🔞</div>
          <h2 className="text-2xl font-bold mb-4">Ověření věku</h2>
          <p className="text-gray-600 mb-6">
            Tento web obsahuje obsah pro dospělé. Pro vstup na tyto stránky musíte být starší 18 let.
          </p>
          <p className="text-gray-600 mb-8">
            Vstupem na tyto stránky souhlasíte s{" "}
            <a href="/podminky" className="text-rose-600 hover:underline">
              podmínkami použití
            </a>{" "}
            a{" "}
            <a href="/gdpr" className="text-rose-600 hover:underline">
              zpracováním cookies
            </a>
            .
          </p>

          <div className="flex gap-4">
            <button
              onClick={handleConfirm}
              className="flex-1 bg-rose-600 text-white px-6 py-3 rounded-lg hover:bg-rose-700 font-semibold"
            >
              Je mi 18 a více
            </button>
            <button
              onClick={handleDecline}
              className="flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 font-semibold"
            >
              Odejít
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
