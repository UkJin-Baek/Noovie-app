const API_KEY = "46f8bbb5cb6e87b367033c9136c8977e";
const BASE_URL = "https://api.themoviedb.org/3";

const trending = () =>
  fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`).then((response) =>
    response.json()
  );

const upcoming = () =>
  fetch(
    `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
  ).then((response) => response.json());

const nowPlaying = () =>
  fetch(
    `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
  ).then((response) => response.json());

export const moviesAPI = { trending, upcoming, nowPlaying };
