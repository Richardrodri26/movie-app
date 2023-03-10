import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import MoviesContext from "../context/movies/MoviesContext";

export const Card = (props) => {
  const URL_IMAGE = "https://image.tmdb.org/t/p/original";

  return (
    <div className="flex justify-center gap-5">
        <div
          className="block min-w-[200px] rounded-lg bg-slate-500"
          key={props.id}
        >
          <Link to={`/movies/${props.id}`}>
            <img
              className="rounded-t-lg"
              src={`${URL_IMAGE}${props.posterImg}`}
              alt=""
            />
          </Link>
          <div className="p-2  ">
            <h5 className="mb-2 min-h-[116px] text-xl font-medium leading-tight text-neutral-800">
              {props.title}
            </h5>
            <p className="mb-4 text-base text-neutral-600">
              {props.popularity}
            </p>
          </div>
        </div>
    </div>
  );
};
