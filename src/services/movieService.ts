import axios, { type AxiosResponse } from "axios";
import type { Movie, TMDBResponse } from "../types/movie";

const movieInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const config = {
    params: {
      query: query,
      language: "en-EN",
      include_adult: "false",
    },
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDA1YmQ0ODhmNWVmNmM1NmJjZjhiOWUzNjRhMWEzNCIsIm5iZiI6MTc4MDUxNDg3OS45NTksInN1YiI6IjZhMjA4MDNmNjljZjFjMmQwM2Q2ODZjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._V8XsrDDBP2yDES3oYUojm4MlYjqPicmwgTtBkRkYRk`,
    },
  };
  const response: AxiosResponse<TMDBResponse> = await movieInstance.get(
    "/search/movie",
    config,
  );
  return response.data.results;
};
