import { getCache, setCache } from '../utils/cache.js';

const GEO_URL = 'https://geocoding-api.open-meteo.com/v1/search';
const WEATHER_URL = 'https://api.open-meteo.com/v1/forecast';

export async function buscarCoordenadas(cidade) {
  const response = await fetch(
    `${GEO_URL}?name=${cidade}&count=1&language=pt&format=json`
  );

  if (!response.ok) {
    throw new Error('Erro ao buscar localização');
  }

  const data = await response.json();

  if (!data.results || data.results.length === 0) {
    throw new Error('Cidade não encontrada');
  }

  return data.results[0];
}

export async function buscarClima(lat, lon) {
  const cacheKey = `weather-${lat}-${lon}`;
  const cached = getCache(cacheKey);
  if (cached) return cached;

  const url =
    `${WEATHER_URL}?latitude=${lat}` +
    `&longitude=${lon}` +
    `&current_weather=true` +
    `&hourly=relativehumidity_2m,precipitation,windspeed_10m` +
    `&timezone=auto`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Erro ao buscar clima');
  }

  const data = await response.json();

  const result = {
    current: data.current_weather,
    humidity: data.hourly.relativehumidity_2m[0],
    wind: data.hourly.windspeed_10m[0],
    precipitation: data.hourly.precipitation[0]
  };

  setCache(cacheKey, result);
  return result;
}

export async function buscarLinhaDoTempo(lat, lon) {
  const url =
    `${WEATHER_URL}?latitude=${lat}` +
    `&longitude=${lon}` +
    `&daily=temperature_2m_max,temperature_2m_min` +
    `&timezone=auto`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Erro ao buscar linha do tempo');
  }

  const data = await response.json();

  return data.daily;
}


