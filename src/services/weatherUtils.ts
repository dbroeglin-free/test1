// WMO Weather interpretation codes
// https://www.open-meteo.com/en/docs#weather_codes

export interface WeatherDescription {
  description: string
  icon: string
  color: string
}

export function getWeatherDescription(weatherCode: number): WeatherDescription {
  // Clear sky
  if (weatherCode === 0) {
    return { 
      description: 'Ciel dégagé',
      icon: '☀️',
      color: 'bg-yellow-100 text-yellow-800'
    }
  }

  // Mainly clear, partly cloudy
  if (weatherCode === 1 || weatherCode === 2) {
    return {
      description: 'Légèrement nuageux',
      icon: '⛅',
      color: 'bg-blue-100 text-blue-800'
    }
  }

  // Overcast
  if (weatherCode === 3) {
    return {
      description: 'Nuageux',
      icon: '☁️',
      color: 'bg-gray-200 text-gray-800'
    }
  }

  // Fog, deposit rime or fog
  if (weatherCode === 45 || weatherCode === 48) {
    return {
      description: 'Brouillard',
      icon: '🌫️',
      color: 'bg-gray-300 text-gray-900'
    }
  }

  // Drizzle
  if (weatherCode >= 51 && weatherCode <= 67) {
    return {
      description: 'Crachin',
      icon: '🌦️',
      color: 'bg-blue-200 text-blue-900'
    }
  }

  // Rain
  if (weatherCode >= 80 && weatherCode <= 82) {
    return {
      description: 'Pluie',
      icon: '🌧️',
      color: 'bg-blue-300 text-blue-900'
    }
  }

  // Snow
  if (weatherCode >= 70 && weatherCode <= 77) {
    return {
      description: 'Neige',
      icon: '❄️',
      color: 'bg-blue-400 text-white'
    }
  }

  // Rain showers
  if (weatherCode >= 80 && weatherCode <= 82) {
    return {
      description: 'Averses de pluie',
      icon: '⛈️',
      color: 'bg-blue-400 text-white'
    }
  }

  // Thunderstorm
  if (weatherCode >= 80 && weatherCode <= 82) {
    return {
      description: 'Orage',
      icon: '⛈️',
      color: 'bg-purple-400 text-white'
    }
  }

  // Default
  return {
    description: 'Indéterminé',
    icon: '🤷',
    color: 'bg-gray-100 text-gray-800'
  }
}

export function getTemperatureColor(temperature: number): string {
  if (temperature <= -10) return 'text-blue-700'
  if (temperature <= 0) return 'text-blue-500'
  if (temperature <= 10) return 'text-indigo-500'
  if (temperature <= 20) return 'text-yellow-500'
  return 'text-red-500'
}
