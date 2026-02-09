export function renderWeather(container, data) {
  container.innerHTML = '';
  const pre = document.createElement('pre');
  pre.textContent = JSON.stringify(data, null, 2);
  container.appendChild(pre);
}
