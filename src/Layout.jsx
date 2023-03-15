import { useContext, useEffect } from "react";
import MoviesContext from "./context/movies/MoviesContext";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/";
import { AboutPage, HomePage, SearchPage } from "./pages";
import "./App.css";
import MoviesState from "./context/movies/MoviesState";
import MoviePage from "./pages/MoviePage";


const Layout = ({children}) => {
  const {movies, moviesByCategory, getMovies,getMoviesByCategories} = useContext(MoviesContext)
  if(moviesByCategory && movies)return null
  useEffect(() => {
    getMovies();
    getMoviesByCategories(16, 'Animation');
    getMoviesByCategories(10751, 'Family');
    getMoviesByCategories(14, 'Fantasy');
  }, []);

  console.log(moviesByCategory)
  return (
    <>
    <Navbar/>
    <main>
    {children}
    </main>
    </>
    
  )
}

export default Layout