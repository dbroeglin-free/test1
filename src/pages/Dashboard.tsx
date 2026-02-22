import { useQueries } from '@tanstack/react-query'
import { resorts } from '../data/resorts'
import { fetchWeather } from '../services/weatherService'
import type { ResortWeather } from '../types/index'
import ResortCard from '../components/ResortCard'

export default function Dashboard() {
  const weatherQueries = useQueries({
    queries: resorts.map((resort) => ({
      queryKey: ['weather', resort.id],
      queryFn: () => fetchWeather(resort.coordinates),
      staleTime: 1000 * 60 * 10, // 10 minutes
      refetchOnWindowFocus: false,
      retry: 2,
    })),
  })

  const resortsWithWeather: ResortWeather[] = resorts.map((resort, index) => {
    const query = weatherQueries[index]
    return {
      ...resort,
      weather: query.data ?? null,
      isLoading: query.isPending,
      error: query.error ? (query.error instanceof Error ? query.error.message : 'Erreur inconnue') : null,
    }
  })

  const isAllLoading = weatherQueries.some((q) => q.isPending)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Stations de ski</h2>
        <p className="text-gray-600">Consultez les conditions météorologiques actuelles de vos stations préférées.</p>
      </div>

      {isAllLoading && (
        <div className="text-center py-8">
          <div className="inline-block animate-spin">
            <div className="h-8 w-8 border-4 border-indigo-600 border-t-transparent rounded-full"></div>
          </div>
          <p className="mt-4 text-gray-600">Chargement des données météorologiques...</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resortsWithWeather.map((resort) => (
          <ResortCard key={resort.id} resort={resort} />
        ))}
      </div>

      <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">💡 Information</h3>
        <p className="text-blue-800 text-sm">
          Les données sont mises à jour toutes les 10 minutes. Pour des prévisions détaillées et des mises à jour plus fréquentes, 
          consultez les sites officiels des stations de ski.
        </p>
      </div>
    </div>
  )
}
