export interface Coordinate {
  latitude: number
  longitude: number
}

export interface Resort {
  id: string
  name: string
  region: string
  elevation: number
  coordinates: Coordinate
}

export interface WeatherData {
  temperature: number
  apparentTemperature: number
  weatherCode: number
  windSpeed: number
  snowDepth: number | null
  precipitation: number
  time: string
}

export interface ResortWeather extends Resort {
  weather: WeatherData | null
  isLoading: boolean
  error: string | null
}
