import type { WeatherData, Coordinate } from '../types/index'

const OPEN_METEO_API = 'https://api.open-meteo.com/v1/forecast'

interface OpenMeteoResponse {
  current: {
    time: string
    temperature_2m: number
    apparent_temperature: number
    weather_code: number
    wind_speed_10m: number
    precipitation: number
  }
  daily?: {
    snowfall?: (number | null)[]
  }
}

export async function fetchWeather(
  coordinates: Coordinate
): Promise<WeatherData> {
  // Build parameters - note: daily parameters require forecast_days
  const params = new URLSearchParams({
    latitude: coordinates.latitude.toString(),
    longitude: coordinates.longitude.toString(),
    current: 'temperature_2m,apparent_temperature,weather_code,wind_speed_10m,precipitation',
    temperature_unit: 'celsius',
    wind_speed_unit: 'kmh',
    timezone: 'Europe/Zurich',
  })

  const response = await fetch(`${OPEN_METEO_API}?${params.toString()}`)

  if (!response.ok) {
    throw new Error(`Failed to fetch weather data: ${response.status}`)
  }

  const data: OpenMeteoResponse = await response.json()

  if (!data.current) {
    throw new Error('Invalid response: missing current weather data')
  }

  return {
    temperature: data.current.temperature_2m,
    apparentTemperature: data.current.apparent_temperature,
    weatherCode: data.current.weather_code,
    windSpeed: data.current.wind_speed_10m,
    snowDepth: null,
    precipitation: data.current.precipitation,
    time: data.current.time,
  }
}
