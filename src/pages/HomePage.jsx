import React, { useContext, useEffect, useState } from "react";
import { Header } from "../components";
import MoviesContext from "../context/movies/MoviesContext";
import { MoviesPage } from "./MoviesPage";

// kabap79602@maazios.com
// Usu: appmovie23
// contra: Hola123456

// https://api.themoviedb.org/3/movie/2?api_key=a6e8bd7e88f8039d24bcd9c29cd51230

// https://api.themoviedb.org/3/discover/movie?api_key=a6e8bd7e88f8039d24bcd9c29cd51230

export const HomePage = () => {
  const {movies, getMovies} = useContext(MoviesContext)

  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";

  // endpoint para las imagenes
  const URL_IMAGE = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <Header/>
      <MoviesPage/>
    </>
  );
};
