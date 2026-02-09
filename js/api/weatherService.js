const GEO_URL = 'https://geocoding-api.open-meteo.com/v1/search';
const WEATHER_URL = 'https://api.open-meteo.com/v1/forecast';

/**
 * Busca latitude e longitude a partir do nome da cidade
 */
export async function buscarCoordenadas(cidade) {
  const response = await fetch(`${GEO_URL}?name=${cidade}&count=1&language=pt&format=json`);

  if (!response.ok) {
    throw new Error('Erro ao buscar localização');
  }

  const data = await response.json();

  if (!data.results || data.results.length === 0) {
    throw new Error('Cidade não encontrada');
  }

  return data.results[0];
}

/**
 * Busca clima atual a partir das coordenadas
 */
export async function buscarClima(lat, lon) {
  const response = await fetch(
    `${WEATHER_URL}?latitude=${lat}&longitude=${lon}&current_weather=true`
  );

  if (!response.ok) {
    throw new Error('Erro ao buscar clima');
  }

  const data = await response.json();
  return data.current_weather;
}
