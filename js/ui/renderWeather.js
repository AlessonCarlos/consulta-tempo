import { formatTemp, getWeatherIcon } from '../utils/helpers.js';

const weatherSection = document.getElementById('weather-result');
const messageEl = document.getElementById('message');

export function renderLoading() {
  messageEl.textContent = 'Buscando clima...';
  weatherSection.classList.add('hidden');
}

export function renderError(message) {
  messageEl.textContent = message;
  weatherSection.classList.add('hidden');
}

export function renderWeather(data, city) {
  messageEl.textContent = '';

  const icon = getWeatherIcon(data.weathercode);

  weatherSection.innerHTML = `
    <img src="assets/icons/weather/${icon}" alt="Ícone do clima">
    <div class="temp">${formatTemp(data.temperature)}</div>
    <div class="city">${city}</div>
  `;

  weatherSection.classList.remove('hidden');
}
