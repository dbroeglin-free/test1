export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-semibold mb-2">À propos</h3>
            <p className="text-sm">Météo des Neiges - Données météorologiques en temps réel pour les stations de ski.</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Source de données</h3>
            <p className="text-sm">Les données météorologiques proviennent de l'API gratuite <a href="https://open-meteo.com" target="_blank" rel="noopener" className="text-indigo-400 hover:text-indigo-300">Open-Meteo</a>.</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Fuseau horaire</h3>
            <p className="text-sm">Toutes les heures sont en Europe/Zurich (CET/CEST).</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 text-center text-sm">
          <p>&copy; 2026 Météo des Neiges. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
