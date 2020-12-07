const URL_BACKEND = window.location.hostname.includes('localhost')
  ? 'http://localhost:8081'
  : 'https://meuflix.herokuapp.com';

export default {
  URL_BACKEND,
};