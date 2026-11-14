// const API_KEY=Process.env.REACT_APP_KEY
const API_KEY = import.meta.env.VITE_API_KEY;

const requist = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US&page=1&sort_by=popularity.desc`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchTV: `tv/popular?api_key=${API_KEY}&language-en-US&page=1`,
};
export default requist;
