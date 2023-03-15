import React, { useContext, useEffect, useState } from "react";
import { Card } from "./Card";
import MoviesContext from "../context/movies/MoviesContext";

export const Carousel = ({ movies, title }) => {
  return (
    <>
      <p className="text-xl font-bold text-white ml-10 pt-10">{title}</p>
      <div className="scrollbar-hide  w-auto h-auto p-8 items-center overflow-x-auto overscroll-x-auto flex space-x-6 overflow-y-visible transition ease-in-out delay-150 hover:duration-150">
        {movies.map((movie) => (
          <Card
            id={movie.id}
            imgUrl={movie.poster_path}
            title={movie.title}
            popularity={movie.popularity}
            posterImg={movie.poster_path}
            banner={movie.backdrop_path}
            description={movie.overview}
            key={movie.id}
          />
        ))}
      </div>
    </>
  );
};
