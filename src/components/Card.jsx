import React from 'react'

export const Card = ({imgUrl, title, popularity}) => {
  const URL_IMAGE = "https://image.tmdb.org/t/p/original";
  const url = URL_IMAGE + imgUrl
    
    return (
        <div className='h-[400px] w-52 min-w-[220px] max-w-[208px] rounded-t-lg overflow-hidden'>
            <img className='h-[250px] w-full rounded-t-lg bg-cover' src={url}/>
            <div className='w-auto h-auto bg-blue-200 rounded-b-lg'>
                <p className='text-white text-bold text-lg px-1 py-2'>{title}</p>
                <p className='text-white text-md px-2 py-1'>{`Popularidad: ${popularity}`}</p>
            </div>
        </div>
    )
}

