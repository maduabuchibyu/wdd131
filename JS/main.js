// Static inputs (must match the static values shown in HTML)
const temperatureC = 8; // °C
const windKmh = 12;     // km/h

// calculateWindChill: single expression return (Celsius formula)
function calculateWindChill(tempC, windKmh) {
  return 13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh, 0.16) + 0.3965 * tempC * Math.pow(windKmh, 0.16);
}

// DOMContentLoaded to ensure elements exist
document.addEventListener('DOMContentLoaded', () => {
  // Set displayed static values (keeps HTML and JS in sync)
  const tempElem = document.getElementById('temp');
  const windElem = document.getElementById('wind');
  if (tempElem) tempElem.textContent = temperatureC;
  if (windElem) windElem.textContent = windKmh;

  // Wind chill element
  const wcElem = document.getElementById('windchill');

  // Only calculate if conditions for metric are met:
  // Temperature <= 10 °C and wind speed > 4.8 km/h
  if (temperatureC <= 10 && windKmh > 4.8) {
    const wc = calculateWindChill(temperatureC, windKmh);
    // Round to one decimal place for display
    wcElem.textContent = Math.round(wc * 10) / 10 + ' °C';
  } else {
    wcElem.textContent = 'N/A';
  }

  // Footer: current year and last modified
  const yearElem = document.getElementById('year');
  const lmElem = document.getElementById('lastModified');
  if (yearElem) yearElem.textContent = new Date().getFullYear();
  if (lmElem) lmElem.textContent = document.lastModified || 'Unknown';
});
