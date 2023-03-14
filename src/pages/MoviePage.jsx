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

  const mediaqueryList = window.matchMedia("(max-width: 425px)")

  console.log(mediaqueryList)

  return (
    <div className="">
      <div className="relative max-h-[500px] ">
        <img
          className="w-full cover blur-sm"
          src={URL_IMAGE + movie?.backdrop_path}
          alt="1"
        />

        <div className="absolute top-[15%] left-10 right-10 flex justify-around items-center">
          <div className="w-1/3 h-96 text-white flex flex-col gap-5">
            <h3 className="font-bold text-3xl">{movie?.title}</h3>
            <p>{movie?.overview}</p>
          </div>

          <img
            className=" max-w-[300px] w-2/3"
            src={URL_IMAGE + movie?.poster_path}
            alt="1"
          />
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
