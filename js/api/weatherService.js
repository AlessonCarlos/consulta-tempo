export async function fetchWeather(city) {
  // TODO: Substituir pela URL e chave da API real
  const endpoint = `https://api.example.com/weather?q=${encodeURIComponent(city)}`;
  const res = await fetch(endpoint);
  if (!res.ok) throw new Error('Falha ao buscar dados do tempo');
  return res.json();
}
