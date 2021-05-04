import React from 'react';
import { Link } from 'react-router-dom';

const Movie = ({ movie, APIData }) => {
  return (
    <Link to={{
      pathname: `/item/${movie.id}`,
      state: APIData 
    }}>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`}
          alt={movie.title}
        >
        </img>
        <h1>{movie.title}</h1>
      </div>
    </Link>
  )
}

export {Movie as default};