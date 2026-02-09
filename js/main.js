import { buscarCoordenadas, buscarClima } from './api/weatherService.js';
import { renderWeather, renderError, renderLoading } from './ui/renderWeather.js';

const form = document.getElementById('search-form');
const input = document.getElementById('city-input');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const cidade = input.value.trim();

  if (!cidade) return;

  try {
    renderLoading();

    const location = await buscarCoordenadas(cidade);
    const clima = await buscarClima(location.latitude, location.longitude);

    renderWeather(clima, location.name);
  } catch (error) {
    renderError(error.message);
  }
});
