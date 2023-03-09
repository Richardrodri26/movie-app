import React from 'react'
import { useParams } from 'react-router-dom';

const MoviePage = () => {

  const { id } = useParams();
  console.log(id)

  return (
    <div>MoviePage</div>
  )
}

export default MoviePage