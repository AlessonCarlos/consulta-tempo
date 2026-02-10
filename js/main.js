import { buscarCoordenadas, buscarClima } from './api/weatherService.js';
import { renderWeather, renderError, renderLoading } from './ui/renderWeather.js';
import { parseCities } from './utils/helpers.js';
import { renderLinhaDoTempo } from './ui/renderWeather.js';
import { buscarLinhaDoTempo } from './api/weatherService.js';

const form = document.getElementById('search-form');
const input = document.getElementById('city-input');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const cities = parseCities(input.value);
  if (cities.length === 0) return;

  renderLoading();

  try {
    for (const city of cities) {
      const location = await buscarCoordenadas(city);

      const clima = await buscarClima(
        location.latitude,
        location.longitude
      );

      renderWeather(clima, location.name);

      // ✅ LINHA DO TEMPO TEM QUE USAR O MESMO location
      const timeline = await buscarLinhaDoTempo(
        location.latitude,
        location.longitude
      );

      renderLinhaDoTempo(timeline);
    }
  } catch (error) {
    renderError(error.message);
  }
});
