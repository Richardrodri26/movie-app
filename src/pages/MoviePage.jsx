import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MoviePage = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState();

  const API_KEY = "a6e8bd7e88f8039d24bcd9c29cd51230";
  const API_URL = "https://api.themoviedb.org/3";
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";
  // endpoint para las imagenes
  const URL_IMAGE = "https://image.tmdb.org/t/p/original";

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}`,
      {
        params: {
          api_key: API_KEY,
        },
      }
    );
    setMovie(data);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="mt-20">
      <h3>{movie?.title}</h3>
      <img src={URL_IMAGE + movie?.backdrop_path} width={500} alt="1" />
      <img src={URL_IMAGE + movie?.poster_path} width={500} alt="1" />
      <p>{movie?.overview}</p>
    </div>
  );
};

export default MoviePage;
