import React from 'react'
import { MdVideoLibrary, MdPlayCircleFilled } from "react-icons/md";

export const Header = () => {
    return (
        <header className={`h-screen bg-cover flex items-center justify-end bg-starwars`}>
            <div className='text-white h-full w-1/2 bg-gradient-to-r from-transparent via-black to-black p-5 flex flex-col items-end pr-40 py-20'>
                <div className='mt-20 mb-5 w-full text-right font-bold text-4xl'>
                    Star Wars: Clone Wars
                </div>
                <div className='flex gap-2 mb-2'>
                    <div className='rounded-full border-blue-500 border-2 bg-blue-500 px-2'>Adventure</div>
                    <div className='rounded-full border-blue-500 border-2 bg-blue-500 px-2'>Fantasy</div>
                    <div className='rounded-full border-blue-500 border-2 bg-blue-500 px-2'>Action</div>
                </div>
                <div className='my-1.5 text-slate-100'>
                   Español - Diciembre 10 1997(USA)- 2h 36m 
                </div>
                <div className='mb-8 text-right w-full font-semibold text-gray-300'>
                    Star Wars, traducido al español como La Guerra de las Galaxias, es una franquicia compuesta de películas, novelas, cómics, videojuegos y juguetes.
                </div>
                <div className=' w-full flex gap-5 justify-end items-center'>
                    <div>
                        <button className='rounded-full flex items-center gap-2 p-1 border-blue-900 border-8 bg-blue-900'>Wacth Trailer<MdVideoLibrary/></button >
                    </div>
                    <div>
                        <button className='rounded-full flex items-center gap-2 p-1 border-green-500 border-8 bg-green-500'>Wacth Movie<MdPlayCircleFilled/></button>
                    </div>
                </div>
            </div>
        </header>
    )
}


