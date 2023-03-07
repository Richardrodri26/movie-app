import React, { useEffect, useState } from "react";
import { Header } from "../components";
import axios from "axios";

// kabap79602@maazios.com
// Usu: appmovie23
// contra: Hola123456

// https://api.themoviedb.org/3/movie/2?api_key=a6e8bd7e88f8039d24bcd9c29cd51230

// https://api.themoviedb.org/3/discover/movie?api_key=a6e8bd7e88f8039d24bcd9c29cd51230

export const HomePage = () => {
  const API_KEY = "a6e8bd7e88f8039d24bcd9c29cd51230";

  const API_URL = "https://api.themoviedb.org/3";
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";

  // endpoint para las imagenes
  const URL_IMAGE = "https://image.tmdb.org/t/p/original";

  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  //const [selectedMovie, setSelectedMovie] = useState({})
  const [movie, setMovie] = useState({ title: "Loading Movies" });
  //const [playing, setPlaying] = useState(false);

  // funcion para realizar la peticion get a la api
  const fetchMovies = async (searchKey) => {
    const type = searchKey ? "search" : "discover";
    const {
      data: { results },
    } = await axios.get(`${API_URL}/${type}/movie`, {
      params: {
        api_key: API_KEY,
        query: searchKey,
      },
    });
    //console.log("data", results);
    //setSelectedMovie(results[0])

    setMovies(results);
    setMovie(results[0]);
    //console.log(movies[0].title);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <Header />

      <div className="h-screen bg-red-400">
        <div className="w-[90%] flex justify-center items-center flex-wrap gap-5 p-2">
          {
          movies.map((movie) => (
            <div key={movie.id} className="h-80 w-auto bg-red-900">
              <img
                src={`${URL_IMAGE + movie.poster_path}`}
                alt={movie.id}
                className='h-full w-full bg-cover'
              />
              <h4 className="font-bold">{movie.title}</h4>
            </div>
          ))
          }
        </div>
      </div>
    </>
  );
};
