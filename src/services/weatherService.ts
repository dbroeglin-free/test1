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
    snow_depth: (number | null)[]
  }
}

export async function fetchWeather(
  coordinates: Coordinate
): Promise<WeatherData> {
  const params = new URLSearchParams({
    latitude: coordinates.latitude.toString(),
    longitude: coordinates.longitude.toString(),
    current: 'temperature_2m,apparent_temperature,weather_code,wind_speed_10m,precipitation',
    daily: 'snow_depth',
    temperature_unit: 'celsius',
    wind_speed_unit: 'kmh',
    timezone: 'Europe/Zurich',
  })

  const response = await fetch(`${OPEN_METEO_API}?${params.toString()}`)

  if (!response.ok) {
    throw new Error('Failed to fetch weather data')
  }

  const data: OpenMeteoResponse = await response.json()

  return {
    temperature: data.current.temperature_2m,
    apparentTemperature: data.current.apparent_temperature,
    weatherCode: data.current.weather_code,
    windSpeed: data.current.wind_speed_10m,
    snowDepth: data.daily?.snow_depth[0] ?? null,
    precipitation: data.current.precipitation,
    time: data.current.time,
  }
}
