export function fetchAPI(url, options = {}) {
  var baseUrl = 'http://localhost:8080/api'
  var defaultOptions = {
  }

  return fetch(baseUrl + url, Object.assign(options, defaultOptions))
}

export function toIndonesiaDate(dateStr) {
  const options = {
    year: 'numeric',
    month: 'long', 
    day: 'numeric', 
    weekday: 'long'
  };
  const locale = 'id-ID';
  const dateObject = new Date(dateStr)
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(dateObject);
}