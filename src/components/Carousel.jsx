import React, { useContext, useEffect, useState } from "react";
import { Card } from "./Card";
import MoviesContext from "../context/movies/MoviesContext";

export const Carousel = () => {
  const { movies } = useContext(MoviesContext)

  return (
      <div className="scrollbar-hide mt-10 w-auto h-auto p-8 items-center overflow-x-auto overscroll-x-auto flex space-x-6 overflow-y-auto">
        {movies.map((movie) => (
          <Card
            id={movie.id}
            imgUrl={movie.poster_path}
            title={movie.original_title}
            popularity={movie.popularity}
            posterImg={movie.poster_path}
            key={movie.id}
          />
        ))}
      </div>
  );
};
