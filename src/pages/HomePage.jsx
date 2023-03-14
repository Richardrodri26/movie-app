import React, { useContext, useEffect, useState } from "react";
import { Header } from "../components";
import MoviesContext from "../context/movies/MoviesContext";
import { Carousel } from "../components/Carousel";

export const HomePage = () => {
  const {getMovies} = useContext(MoviesContext)
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="bg-neutral-900">
      <Header/>
      <Carousel/>
    </div>
  );
};
