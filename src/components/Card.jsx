import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import MoviesContext from "../context/movies/MoviesContext";

export const Card = () => {
  const { movies, getMovies } = useContext(MoviesContext);
  const URL_IMAGE = "https://image.tmdb.org/t/p/original";

  // useEffect(() => {
  //   getMovies();
  // }, [])

  return (
    <div className="flex justify-center gap-5">
      {movies.map((movie) => (
        <div
          className="block min-w-[200px] relative z-0 group hover:shadow-lg hover:shadow-red-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-150"
          key={movie.id}
        >
          <Link to={`/movies/${movie.id}`}>
            <img
              className="rounded-md "
              src={`${URL_IMAGE}${movie.poster_path}`}
              alt=""
            />
          </Link>
          
            <div className="bg-gradient-to-t from-black p-2 absolute top-1/2 left-0 z-20 opacity-0 group-hover:opacity-100 transition ease-in-out delay-150 group-hover:-translate-y-1  group-hover:duration-150">
            <h5 className="mb-2 min-h-[90px] text-xl font-medium leading-tight text-white">
              {movie.title}
            </h5>
            <p className="mb-4 text-base text-white">
              {movie.popularity}
            </p>
          </div>
           
        </div>
      ))}
    </div>
  );
};
