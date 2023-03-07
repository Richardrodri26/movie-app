import React, { useEffect, useState } from 'react'
import { Card } from '../components/Card'
import axios from "axios";

export const MoviesPage = () => {
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
    <div className='bg-red-500 h-auto w-auto'>
      <div className='scrollbar-hide w-auto h-auto p-2 items-center mt-6 overflow-x-auto overscroll-x-contain flex space-x-6 overflow-y-hidden'>

        {
          movies.map((movie) => (
            <Card imgUrl={movie.poster_path} key={movie.id}/>
          ))
        }
        
      </div>
    </div>
  )
}

