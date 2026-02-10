const container = document.getElementById('weather-result');
const messageEl = document.getElementById('message');
import { mapWeatherIcon } from "../utils/helpers.js";


export function renderLoading() {
  messageEl.textContent = 'Buscando clima...';
  container.innerHTML = '';
  container.classList.add('hidden');
}

export function renderError(message) {
  messageEl.textContent = message;
  container.innerHTML = '';
  container.classList.add('hidden');
}

export function renderWeather(data, city) {
  messageEl.textContent = '';
  container.classList.remove('hidden');

  const icon = mapWeatherIcon(data.current.weathercode);

  const card = document.createElement('div');
  card.className = 'weather-main';

  card.innerHTML = `
    <div class="top">
      <div class="left">
        <img
          class="weather-icon"
          src="assets/icons/weather/${icon}"
          alt="Clima"
        />

        <div class="temp-block">
          <span class="temp">${Math.round(data.current.temperature)}</span>
          <span class="unit">°C</span>
        </div>

        <div class="details">
          <p>💧 ${data.humidity}%</p>
          <p>💨 ${data.wind} km/h</p>
          <p>🌧️ ${data.precipitation} mm</p>
        </div>
      </div>

      <div class="right">
        <h1>${city}</h1>
        <p class="desc">${data.description}</p>
      </div>
    </div>
  `;

  container.appendChild(card);
}



export function renderLinhaDoTempo(daily) {
  const timeline = document.getElementById('timeline');
  timeline.innerHTML = '';
  timeline.classList.remove('hidden');

  daily.time.forEach((date, index) => {
    const day = new Date(date).toLocaleDateString('pt-BR', {
      weekday: 'short'
    });

    const item = document.createElement('div');
    item.className = 'timeline-item';

    item.innerHTML = `
      <span class="day">${day}</span>
      <span class="max">${Math.round(daily.temperature_2m_max[index])}°</span>
      <span class="min">${Math.round(daily.temperature_2m_min[index])}°</span>
    `;

    timeline.appendChild(item);
  });
}

