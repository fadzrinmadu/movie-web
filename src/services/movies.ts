import callAPI from "../config/api";
import { BASE_URL } from "../constants";

const getMoviesApiService = async (query: string) => {
  const url = `${BASE_URL}/search/movie?query=${query}`;
  const result = await callAPI({
    url,
    method: "GET",
    token: true,
  });

  return result;
};

export { getMoviesApiService };
