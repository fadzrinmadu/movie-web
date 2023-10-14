import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { mapMovies } from "../../mappers";
import { IMovieType } from "../../types";
import { getMoviesApiService } from "../../services/movies";
import { removeToken } from "../../helpers/cookies";

const useHooks = () => {
  const navigate = useNavigate();

  const [movies, setMovies] = useState<IMovieType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");

  const handleGetMovies = async (query: string) => {
    setIsLoading(true);
    const response = await getMoviesApiService(query);
    const result = mapMovies(response.data.results || []);
    setMovies(result);
    setIsLoading(false);
  };

  const handleLogout = () => {
    removeToken();
    navigate("/");
  };

  return {
    data: {
      movies,
      isLoading,
      searchValue,
    },
    method: {
      handleLogout,
      setSearchValue,
      handleGetMovies,
    },
  };
};

export default useHooks;
