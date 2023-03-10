import React from 'react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { url: "/", title: 'Home' },
  { url: "/search", title: 'Search' },
  { url: "/about", title: 'About' }
];


export const Navbar = () => {
  return (
    <div className='bg-transparent absolute top-0 flex text-white p-5 justify-end w-full'>
      <nav className='mr-32'>
        {
          navItems.map(item => (
            <NavLink className='mx-3' to={item.url} key={item.url}>{item.title}</NavLink>
          ))
        }
      </nav>
    </div>
  )
}