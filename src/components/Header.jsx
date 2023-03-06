import React from 'react'

export const Header = () => {
    return (
        <header className='h-[90vh] bg-starwars bg-cover flex items-center justify-end'>
            <div className='text-white h-full w-1/2 bg-gradient-to-r from-transparent to-black p-5 flex flex-col items-end'>
                <div className='h-1/3'>
                    Star Wars: Clone Wars
                </div>
                <div className='h-1/3'>
                    Star Wars, traducido al español como La Guerra de las Galaxias, es una franquicia compuesta de películas, novelas, cómics, videojuegos y juguetes.
                </div>
                <div className='h-1/3 flex justify-center items-center'>
                    <div>
                        Boton 1
                    </div>
                    <div>
                        Boton 2
                    </div>
                </div>
            </div>
        </header>
    )
}


