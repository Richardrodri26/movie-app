import React, { useContext, useEffect } from 'react'
import MoviesContext from '../context/movies/MoviesContext';

export const Card = () => {
  const {movies, getMovies} = useContext(MoviesContext)
  const URL_IMAGE = "https://image.tmdb.org/t/p/original";

  // useEffect(() => {
  //   getMovies();
  // }, [])

    return (
       <div className="flex justify-center gap-5">
        {
          movies.map(movie => (
            <div className="block min-w-[200px] rounded-lg bg-slate-500" key={movie.id}>
            <img
              className="rounded-t-lg"
              src={`${URL_IMAGE}${movie.poster_path}`}
              alt=""
            />
          <div className="p-2  ">
            <h5 className="mb-2 min-h-[116px] text-xl font-medium leading-tight text-neutral-800">
              {movie.title}
            </h5>
            <p className="mb-4 text-base text-neutral-600">
              {movie.popularity}
            </p>
          </div>
        </div>
          ))
        }
      </div>
    )
}

