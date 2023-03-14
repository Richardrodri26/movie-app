import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const MoviePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState();
  const [size, setSize] = useState("");

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

  const onChangeSize = () => {
    setSize(document.documentElement.clientWidth);
  };

  useEffect(() => {
    fetchMovies();
    window.addEventListener("resize", onChangeSize);
  }, []);

  //const mediaqueryList = window.matchMedia("(max-width: 425px)")
  const image = !(size >= 425) ? movie?.poster_path : movie?.backdrop_path;

  // const a = document.documentElement.clientWidth;
  // console.log(a);

  //console.log(mediaqueryList.matches)
  //console.log(screen.width)

  //console.log(movie);

  return (
    <div className="bg-neutral-900 h-screen">
      <div className="relative max-h-[500px] ">
        <img
          className="max-h-[500px] w-full object-cover "
          src={URL_IMAGE + image}
          alt="1"
        />

        <span
          onClick={() => navigate("/")}
          className="absolute top-5 left-5  bg-white"
        >
          Regresar
        </span>

        <div className="w-full absolute bottom-0 left-0 p-10 flex justify-start items-center bg-gradient-to-b from-transparent via-neutral-900 to-neutral-900">
          <div className="h-auto text-white flex flex-col gap-5">
            <div className="flex gap-5">
              {movie?.production_companies.map((company) => (
                <p key={company.id}>{company.name}</p>
              ))}
            </div>
            <h3 className="font-bold text-3xl">{movie?.title}</h3>
            <div className="flex gap-5">
              {movie?.genres.map((genre) => (
                <p key={genre.id}>{genre.name}</p>
              ))}
            </div>
            {/* <p>{movie?.overview}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
