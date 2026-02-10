export function parseCities(input) {
  return input
    .split(',')
    .map(city => city.trim())
    .filter(Boolean);
}

export function mapWeatherIcon(weatherCode) {
  /*
    Open-Meteo weathercode:
    0 = Clear
    1-3 = Cloudy
    45,48 = Fog
    51-67 = Rain
    71-77 = Snow
    95-99 = Storm
  */

  if (weatherCode === 0) return "clear.svg";

  if ([1, 2, 3].includes(weatherCode)) return "cloud.svg";

  if (
    (weatherCode >= 51 && weatherCode <= 67) ||
    (weatherCode >= 80 && weatherCode <= 82)
  ) {
    return "rain.svg";
  }

  if (weatherCode >= 71 && weatherCode <= 77) {
    return "snow.svg";
  }

  if (weatherCode >= 95) {
    return "storm.svg";
  }

  return "cloud.svg";
}

