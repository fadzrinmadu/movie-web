import { faker } from "@faker-js/faker";

import { IMovieType } from "../types";
import { URL_IMAGE } from "../constants";

const mapMovies = (data: any[]): IMovieType[] => {
  return data.map((item: any) => {
    const count = 3;
    const genres = Array.from({ length: count }, () => faker.music.genre());
    const producers = Array.from({ length: count }, () =>
      faker.person.fullName(),
    );

    return {
      id: item.id || null,
      image: `${URL_IMAGE}/${item.poster_path}`,
      title: item.original_title || "",
      description: item.overview || "",
      genres,
      rating: item.vote_average || 0,
      duration: "2hr 49min",
      parentalGuidance: item.adult ? "PG-18" : "PG-13",
      producers,
    };
  });
};

export { mapMovies };
