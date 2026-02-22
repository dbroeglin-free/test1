import type { ResortWeather } from '../types/index'
import { getWeatherDescription, getTemperatureColor } from '../services/weatherUtils'

interface ResortCardProps {
  resort: ResortWeather
}

export default function ResortCard({ resort }: ResortCardProps) {
  if (resort.isLoading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 animate-pulse">
        <div className="h-6 bg-gray-200 rounded mb-2 w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded mb-4 w-1/2"></div>
        <div className="space-y-3">
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded"></div>
        </div>
      </div>
    )
  }

  if (resort.error || !resort.weather) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-1">{resort.name}</h3>
        <p className="text-sm text-gray-600 mb-4">{resort.region}</p>
        <p className="text-red-600 text-sm">{resort.error || 'Données indisponibles'}</p>
      </div>
    )
  }

  const weatherDesc = getWeatherDescription(resort.weather.weatherCode)
  const tempColor = getTemperatureColor(resort.weather.temperature)

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border-t-4 border-indigo-500">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-xl font-bold text-gray-800">{resort.name}</h3>
          <p className="text-sm text-gray-600">{resort.region}</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">↑ {resort.elevation}m</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="text-center">
          <div className="text-4xl mb-2">{weatherDesc.icon}</div>
          <p className="text-sm text-gray-700 font-medium">{weatherDesc.description}</p>
        </div>
        <div className="text-center">
          <p className={`text-4xl font-bold ${tempColor}`}>
            {Math.round(resort.weather.temperature)}°C
          </p>
          <p className="text-xs text-gray-600 mt-1">
            Ressenti: {Math.round(resort.weather.apparentTemperature)}°C
          </p>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-4 grid grid-cols-3 gap-2 text-center text-sm">
        <div>
          <p className="text-gray-600">Vent</p>
          <p className="font-semibold text-gray-800">{Math.round(resort.weather.windSpeed)} km/h</p>
        </div>
        <div>
          <p className="text-gray-600">Pluie</p>
          <p className="font-semibold text-gray-800">{Math.round(resort.weather.precipitation)}mm</p>
        </div>
        <div>
          <p className="text-gray-600">Neige</p>
          <p className="font-semibold text-gray-800">
            {resort.weather.snowDepth ? `${resort.weather.snowDepth.toFixed(1)}cm` : '—'}
          </p>
        </div>
      </div>
    </div>
  )
}
