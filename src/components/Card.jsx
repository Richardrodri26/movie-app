import React from 'react'

export const Card = ({imgUrl, title, popularity}) => {
  const URL_IMAGE = "https://image.tmdb.org/t/p/original";
  const url = URL_IMAGE + imgUrl
    
    return (
        <div className="flex justify-center">
        <div className="block min-w-[132px] rounded-lg bg-slate-500">
            <img
              className="rounded-t-lg"
              src={url}
              alt=""
            />
          <div className="p-2  ">
            <h5 className="mb-2 min-h-[116px] text-xl font-medium leading-tight text-neutral-800">
              {title}
            </h5>
            <p className="mb-4 text-base text-neutral-600">
              {popularity}
            </p>
          </div>
        </div>
      </div>
    )
}

