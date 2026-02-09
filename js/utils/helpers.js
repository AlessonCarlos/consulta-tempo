/**
 * Mapeia códigos do Open-Meteo para ícones
 */
export function getWeatherIcon(code) {
  if (code === 0) return 'clear.svg';
  if (code <= 3) return 'cloud.svg';
  if (code >= 45 && code <= 48) return 'cloud.svg';
  if (code >= 51 && code <= 67) return 'rain.svg';
  if (code >= 71 && code <= 77) return 'snow.svg';
  if (code >= 95) return 'storm.svg';

  return 'cloud.svg';
}

/**
 * Formata temperatura
 */
export function formatTemp(temp) {
  return `${Math.round(temp)}°C`;
}
