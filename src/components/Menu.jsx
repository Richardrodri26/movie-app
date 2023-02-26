import React from 'react'
import {NavLink} from 'react-router-dom'


export const Menu = () => {
  return (
    <nav>
      <ul>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/about'}>About</NavLink>
      </ul>
    </nav>
  )
}