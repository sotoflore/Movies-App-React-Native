//import { THE_MOVIE_DB_KEY } from "@env";
import { AxiosAdapter } from "./http/axios.adapter";

export const movieDBFetcher = new AxiosAdapter({
    baseUrl: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '438485aac21a673411320f5c4329a0a9',
        //api_key: THE_MOVIE_DB_KEY,
        language: 'es'
    }
});