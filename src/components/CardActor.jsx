import React from "react";

export const CardActor = ({ character }) => {
  const URL_IMAGE = "https://image.tmdb.org/t/p/original";
  return (
    <div className="h-44">
      <div className="h-24 w-24">
        <img
          className="object-cover h-full w-full rounded-full"
          src={`${URL_IMAGE}${character.profile_path}`}
          alt={character?.name}
        />
      </div>
      <div className="w-full">
        <p>
          {character?.name} as <span className="font-bold">{character?.character}</span>
        </p>
      </div>
    </div>
  );
};
