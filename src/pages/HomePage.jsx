import React, { useContext, useEffect, useState } from "react";
import { Header } from "../components";
import MoviesContext from "../context/movies/MoviesContext";
import { Carousel } from "../components/Carousel";
import { Suspense } from "react";
import { fetchData } from "../fetchData";

const apiData = fetchData(
  "https://api.themoviedb.org/3/discover/movie?api_key=a6e8bd7e88f8039d24bcd9c29cd51230"
);
const categories = [16, 10751, 14];

const animationData = fetchData(
  `https://api.themoviedb.org/3/discover/movie?with_genres=${16}&api_key=a6e8bd7e88f8039d24bcd9c29cd51230`
)
const familyData = fetchData(
  `https://api.themoviedb.org/3/discover/movie?with_genres=${14}&api_key=a6e8bd7e88f8039d24bcd9c29cd51230`
)


export const HomePage = () => {
  const { movies, moviesByCategory, getMovies, getMoviesByCategories } =
    useContext(MoviesContext);

  // useEffect(() => {
  //   getMovies();
  //   getMoviesByCategories(16, "Animation");
  //   getMoviesByCategories(10751, "Family");
  //   getMoviesByCategories(14, "Fantasy");
  // }, []);

  //const {data, loading} = useFetch()


  const data = apiData.read().results;
  const dataAnimation = animationData.read().results;
  const dataFamily = familyData.read().results;


  return (
    <div className="bg-neutral-900">
      <Header />

      <Suspense fallback={<div>Loading...</div>}>
        {<Carousel movies={data} title="General" />}
        {<Carousel movies={dataAnimation} title="Animation" />}
        {<Carousel movies={dataFamily} title="Family" />}
      </Suspense>

      {/* {
        moviesByCategory?.map((movie, index )=> ( 
          <Carousel movies={movie.data} title={movie.title} key={index}/>
        ))
      } */}
      {/* <Carousel movies={moviesByCategory} title='Animation'/> */}
    </div>
  );
};
