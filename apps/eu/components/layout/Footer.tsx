import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">EroticReviews.cz</h3>
            <p className="text-sm">
              Nezávislý katalog a recenzní systém pro erotické služby v České republice.
            </p>
          </div>

          {/* Kategorie */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kategorie</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/holky-na-sex" className="hover:text-white">Holky na sex</Link></li>
              <li><Link href="/eroticke-masaze" className="hover:text-white">Erotické masáže</Link></li>
              <li><Link href="/dominy" className="hover:text-white">Dominy</Link></li>
              <li><Link href="/podniky" className="hover:text-white">Podniky</Link></li>
            </ul>
          </div>

          {/* O projektu */}
          <div>
            <h4 className="text-white font-semibold mb-4">Informace</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/o-projektu" className="hover:text-white">O projektu</Link></li>
              <li><Link href="/kontakt" className="hover:text-white">Kontakt</Link></li>
              <li><Link href="/recenze" className="hover:text-white">Recenze</Link></li>
              <li><Link href="/vyhledavani" className="hover:text-white">Vyhledávání</Link></li>
            </ul>
          </div>

          {/* Právní */}
          <div>
            <h4 className="text-white font-semibold mb-4">Právní</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/podminky" className="hover:text-white">Podmínky použití</Link></li>
              <li><Link href="/gdpr" className="hover:text-white">GDPR & Cookies</Link></li>
              <li><Link href="/prihlaseni" className="hover:text-white">Přihlásit se</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>
            © {currentYear} EroticReviews.cz - Všechna práva vyhrazena.
          </p>
          <p className="mt-2 text-gray-500">
            🔞 Stránky pouze pro osoby starší 18 let.
          </p>
        </div>
      </div>
    </footer>
  );
}
