import React from 'react'

export const Card = ({imgUrl}) => {
  const URL_IMAGE = "https://image.tmdb.org/t/p/original";
  const url = URL_IMAGE + imgUrl
    
    return (
        <div className='h-80 w-auto'>
            <img className='w-44 h-2/3 rounded-t-lg bg-cover'
                src={url}
            />
            <div className='w-auto h-1/3 bg-blue-200 rounded-b-lg'>
                <p className='text-white text-bold text-xl px-4 py-2'>Norway</p>
                <p className='text-white text-md px-4 py-2'>Beautiful Landscape</p>
            </div>
        </div>
    )
}

