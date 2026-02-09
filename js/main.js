const input = document.getElementById('cityInput');
const button = document.getElementById('searchBtn');
const result = document.getElementById('result');

button.addEventListener('click', () => {
  const city = input.value.trim();

  if (!city) {
    result.textContent = 'Digite o nome de uma cidade.';
    return;
  }

  buscarClima(city);
});

async function buscarClima(cidade) {
  result.textContent = 'Buscando clima...';

  try {
    // 1️⃣ Buscar latitude e longitude da cidade
    const geoResponse = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${cidade}&count=1&language=pt&format=json`
    );
    const geoData = await geoResponse.json();

    if (!geoData.results) {
      result.textContent = 'Cidade não encontrada.';
      return;
    }

    const { latitude, longitude, name } = geoData.results[0];

    // 2️⃣ Buscar temperatura atual
    const weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );
    const weatherData = await weatherResponse.json();

    const temperatura = weatherData.current_weather.temperature;

    // 3️⃣ Exibir resultado
    result.innerHTML = `
      <p>📍 ${name}</p>
      <p>Temperatura atual:</p>
      <span>${temperatura}°C</span>
    `;
  } catch (error) {
    result.textContent = 'Erro ao buscar os dados. Tente novamente.';
    console.error(error);
  }
}
