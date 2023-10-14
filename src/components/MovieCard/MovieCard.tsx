import React from "react";
import "./style.scss";

type MovieCardProps = {
  image: string;
  title: string;
  description: string;
  rating: number;
  genres: string[];
  duration: string;
  producers: string[];
  parentalGuidance: string;
  onActionClick: () => void;
};

const MovieCard = (props: MovieCardProps) => {
  const {
    image,
    title,
    description,
    rating,
    genres,
    duration,
    producers,
    parentalGuidance,
    onActionClick,
  } = props;

  return (
    <div className="movie-card">
      <img src={image} alt={title} className="movie-card__image" />
      <div className="movie-card__wrapper">
        <div className="movie-card__content">
          <h2 className="movie-card__title">{title}</h2>
          <p>
            {parentalGuidance} / {duration} / {genres.join(", ")}
          </p>
          <div className="movie-card__summary">
            <h3>Summary</h3>
            <span className="movie-card__rating">Rating: {rating}</span>
          </div>
          <p className="movie-card__description">{description}</p>
          <p className="movie-card__genres">Producer: {producers.join(", ")}</p>
        </div>
        <div className="movie-card__action">
          <button
            type="button"
            className="movie-card__action-button"
            onClick={onActionClick}
          >
            &#9658; Watch Trailer
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
