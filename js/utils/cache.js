const ONE_HOUR = 60 * 60 * 1000;

/**
 * Salva dados no cache
 */
export function setCache(key, data) {
  const payload = {
    timestamp: Date.now(),
    data
  };

  localStorage.setItem(key, JSON.stringify(payload));
}

/**
 * Recupera dados do cache se ainda válidos
 */
export function getCache(key) {
  const cached = localStorage.getItem(key);

  if (!cached) return null;

  const { timestamp, data } = JSON.parse(cached);

  const isExpired = Date.now() - timestamp > ONE_HOUR;

  if (isExpired) {
    localStorage.removeItem(key);
    return null;
  }

  return data;
}
