import React from "react";
import "./style.scss";

const MovieCardSkeleton: React.FC = () => {
  return (
    <div className="movie-card-skeleton">
      <div className="movie-card-skeleton__image" />
      <div className="movie-card-skeleton__content">
        <div className="movie-card-skeleton__title" />
        <div className="movie-card-skeleton__details">
          <div className="movie-card-skeleton__detail" />
          <div className="movie-card-skeleton__detail" />
        </div>
        <div className="movie-card-skeleton__summary">
          <div className="movie-card-skeleton__rating" />
        </div>
        <div className="movie-card-skeleton__description" />
        <div className="movie-card-skeleton__genres" />
      </div>
      <div className="movie-card-skeleton__action">
        <div className="movie-card-skeleton__action-button" />
      </div>
    </div>
  );
};

export default MovieCardSkeleton;
