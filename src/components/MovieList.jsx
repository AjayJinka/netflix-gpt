import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="text-white p-2 mb-2">
      <h1 className="text-2xl mb-2">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex gap-2">
          {movies?.map((movie) => {
            return (
              <MovieCard
                key={movie?.id}
                posterPath={movie?.poster_path}
                originalTitle={movie?.original_title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
