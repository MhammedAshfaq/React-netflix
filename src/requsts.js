import {API_KEY} from './constent'

const requstes = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetFlixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanticMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchWar: `discover/movie?api_key=${API_KEY}&with_genres=10752`,
    fetchWestern: `discover/movie?api_key=${API_KEY}&with_genres=37`,
    fetchThriller: `discover/movie?api_key=${API_KEY}&with_genres=53`,
    fetchDrama: `discover/movie?api_key=${API_KEY}&with_genres=18`,
    fetchHistory: `discover/movie?api_key=${API_KEY}&with_genres=36`,
    fetchFantasy: `discover/movie?api_key=${API_KEY}&with_genres=14`,
    fetchFamily: `discover/movie?api_key=${API_KEY}&with_genres=10751`,
}

export default requstes