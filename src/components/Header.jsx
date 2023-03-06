import React from 'react'
import { MdVideoLibrary } from "react-icons/md";

export const Header = () => {
    return (
        <header className='h-screen bg-starwars bg-cover flex items-center justify-end'>
            <div className='text-white h-full w-1/2 bg-gradient-to-r from-transparent via-black to-black p-5 flex flex-col items-end pr-40 py-20'>
                <div className='mt-20 mb-5 w-full text-right font-bold text-4xl'>
                    Star Wars: Clone Wars
                </div>
                <div className='mb-8 text-right w-full font-semibold text-gray-300'>
                    Star Wars, traducido al español como La Guerra de las Galaxias, es una franquicia compuesta de películas, novelas, cómics, videojuegos y juguetes.
                </div>
                <div className=' w-full flex gap-5 justify-end items-center'>
                    <div>
                        <button className='rounded-full border-blue-900 border-4 bg-blue-900'>Wacth Trailer</button >
                    </div>
                    <div>
                        <button className='rounded-full border-green-500 border-4 bg-green-500'>Wacth Movie</button>
                    </div>
                </div>
            </div>
        </header>
    )
}


