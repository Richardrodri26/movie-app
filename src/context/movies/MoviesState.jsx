import React, { useReducer } from "react";
import MoviesReducer from "./MoviesReducer";
import MoviesContext from "./MoviesContext";
import axios from "axios";

const MoviesState = (props) => {
  const initialState = {
    movies: [],
    moviesByCategory: [],
  };

  const [state, dispatch] = useReducer(MoviesReducer, initialState);

  const getMovies = async ( genre, searchKey) => {
    const API_KEY = "a6e8bd7e88f8039d24bcd9c29cd51230";
    const API_URL = "https://api.themoviedb.org/3";
    const IMAGE_PATH = "https://image.tmdb.org/t/p/original";
    // endpoint para las imagenes
    const URL_IMAGE = "https://image.tmdb.org/t/p/original";

    const type = searchKey ? "search" : "discover";
    const {
      data: { results },
    } = await axios.get(`${API_URL}/${type}/movie`, {
      params: {
        with_genres: genre,
        api_key: API_KEY,
        query: searchKey,
      },
    });
    //console.log("dataState", results);
    //setSelectedMovie(results[0])¿
    //console.log(movies[0].title);

    dispatch({
      type: "GET_MOVIES",
      payload: results,
    });
  };

  const getMoviesByCategories = async ( genre, title ,searchKey) => {
    const API_KEY = "a6e8bd7e88f8039d24bcd9c29cd51230";
    const API_URL = "https://api.themoviedb.org/3";

    const type = searchKey ? "search" : "discover";
    const {
      data: { results },
    } = await axios.get(`${API_URL}/${type}/movie`, {
      params: {
        with_genres: genre,
        api_key: API_KEY,
        query: searchKey,
      },
    });
    const removeDuplicates = (arr) => [...new Set(arr)];

    const data = removeDuplicates(results)

    const result = {
      title,
      data
    }

    dispatch({
      type: "GET_MOVIES_BY_CATEGORIES",
      payload: result,
    });
  };

  
  return (
    <MoviesContext.Provider
      value={{
        ...state,
        movies: state.movies,
        getMovies,
        getMoviesByCategories,
        moviesByCategory:state.moviesByCategory
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  )
};

export default MoviesState;
