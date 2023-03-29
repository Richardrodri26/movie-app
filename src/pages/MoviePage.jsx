import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoIosReturnLeft } from "react-icons/io";
import { CardActor } from "../components";
import { Carousel } from "../components/Carousel";

const MoviePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState();
  const [cast, setCast] = useState();
  const [recomendations, setRecomendations] = useState()
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
  const fetchCast = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits`,
      {
        params: {
          api_key: API_KEY,
        },
      }
    );
    setCast(data);
  };
  const fetchRecomendatios = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/recommendations`,
      {
        params: {
          api_key: API_KEY,
        },
      }
    );
    setRecomendations(data);
  };

  const onChangeSize = () => {
    setSize(document.documentElement.clientWidth);
  };

  useEffect(() => {
    fetchMovies();
    fetchCast();
    fetchRecomendatios()
    window.addEventListener("resize", onChangeSize);
  }, [id]);

  //const mediaqueryList = window.matchMedia("(max-width: 425px)")
  // const image = size <= 425 ? movie?.poster_path : movie?.backdrop_path;
  const image = size ? movie?.poster_path : movie?.backdrop_path;

  // const a = document.documentElement.clientWidth;
  // console.log(a);

  //console.log(mediaqueryList.matches)
  //console.log(screen.width)
  console.log(recomendations);

  //console.log(movie?.genres);

  return (
    <div className="bg-neutral-900 h-screen">
      <div className="relative max-h-[600px] ">
        <img
          className="max-h-[550px] w-full object-cover "
          src={URL_IMAGE + image}
          alt="1"
        />

        <button
          onClick={() => navigate("/")}
          className=" text-white font-2xl flex justify-center items-center absolute top-5 left-5 h-10 w-10 bg-neutral-900 rounded-full"
        >
          <IoIosReturnLeft />
        </button>

        <div className="w-full absolute bottom-0 left-0 p-10 flex justify-start items-center bg-gradient-to-b from-transparent via-transparent to-neutral-900">
          <div className="mb-10 h-auto text-white flex flex-col gap-5">
            <div className="flex gap-5">
              {movie?.production_companies.map((company) => (
                <p className="font-bold" key={company.id}>
                  {company.name}
                </p>
              ))}
            </div>
            <h3 className="font-bold text-6xl">{movie?.title}</h3>
            <div className="flex gap-5">
              {movie?.genres.map((genre) => (
                <p
                  className="py-2 px-3 bg-neutral-700 rounded-full"
                  key={genre.id}
                >
                  {genre.name}
                </p>
              ))}
            </div>

            <div className="flex gap-10">
              <div className="py-2 px-3 text-xl font-bold rounded-lg flex justify-center items-center h-20 bg-neutral-700 ">
                <p className="-rotate-90 h-min text-sm w-min text-gray-300 grow-0">
                  Budget
                </p>
                <p className="grow">{movie?.budget}</p>
              </div>
              <div className="py-2 px-3 text-xl font-bold rounded-lg flex justify-center items-center h-20 bg-neutral-700 ">
                <p className="-rotate-90 h-min text-sm w-auto text-gray-300 grow-0">
                  Release
                </p>
                <p className="grow">{movie?.release_date}</p>
              </div>
              <div className="py-2 px-3 text-xl font-bold rounded-lg flex justify-center items-center h-20 bg-neutral-700 ">
                <p className="-rotate-90 h-min text-sm w-auto text-gray-300 grow-0">
                  status
                </p>
                <p className="grow">{movie?.status}</p>
              </div>
              <div className="py-2 px-3 text-xl font-bold rounded-lg flex justify-center items-center h-20 bg-neutral-700 ">
                <p className="-rotate-90 h-min text-sm w-auto text-gray-300 grow-0 ">
                  Length
                </p>
                <p className="grow">{`${movie?.runtime} min`}</p>
              </div>
            </div>
            {/* <p>{movie?.overview}</p> */}
          </div>
        </div>
      </div>

      <div className="w-full text-white h-auto pb-10 bg-neutral-900">
        <div className="w-[95%] mx-auto my-0">
          <div>
            <p className="font-xl font-bold">Description</p>
            <p>{movie?.overview}</p>
          </div>

          <div className="mt-10">
            <p className="font-xl font-bold">Cast</p>
            <div className="scrollbar-hide w-auto h-80 p-4 flex gap-2 items-center overflow-x-auto overscroll-x-auto space-x-6 overflow-y-hidden">
              {cast?.cast.map((character) => (
                <CardActor character={character} key={character.cast_id} />
              ))}
            </div>
          </div>
        </div>
      <Carousel movies={recomendations?.results} title="Recomendations" />

      </div>
    </div>
  );
};

export default MoviePage;
