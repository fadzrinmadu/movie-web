import React, { useEffect } from "react";

import useHooks from "./hooks";
import {
  CustomInput,
  EmptyView,
  MovieCard,
  MovieCardSkeleton,
} from "../../components";

import "./style.scss";

const MovieList = () => {
  const {
    data: { movies, isLoading, searchValue },
    method: { handleLogout, handleGetMovies, setSearchValue },
  } = useHooks();

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      handleGetMovies(searchValue);
    }, 1000);
    return () => clearTimeout(delayDebounceFn);
  }, [searchValue]);

  return (
    <section className="movie-section">
      <div className="movie-section__title">
        <h1>Movies Search</h1>
        <button type="button" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="movie-search">
        <CustomInput
          value={searchValue}
          required
          type="text"
          name="username"
          placeholder="Masukkan pencarian untuk judul film ... "
          onChange={(event) => setSearchValue(event.target.value)}
        />
      </div>
      {movies.length > 0 ? (
        <div className="movie-list">
          {isLoading
            ? Array.from({ length: 6 }).map((item: any) => (
                <MovieCardSkeleton key={item} />
              ))
            : movies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  image={movie.image}
                  title={movie.title}
                  description={movie.description}
                  genres={movie.genres}
                  rating={movie.rating}
                  duration={movie.duration}
                  parentalGuidance={movie.parentalGuidance}
                  producers={movie.producers}
                  onActionClick={() => alert(`Clicked on ${movie.title}`)}
                />
              ))}
        </div>
      ) : (
        <EmptyView />
      )}
    </section>
  );
};

export default MovieList;
