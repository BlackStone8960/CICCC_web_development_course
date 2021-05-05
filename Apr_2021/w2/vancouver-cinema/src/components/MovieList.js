import React, { useContext } from 'react';
import APIContext from '../context/API-context';
import Movie from "./Movie";

const MovieList = () => {
  const { movies } = useContext(APIContext);

  return (
    <div className="movielist-wrapper">
      {
        Array.isArray(movies) && movies.map((movie) => (
          <Movie key={movie.original_title} movie={movie} movies={movies}/>
        ))
      }
    </div>
  )
};

export { MovieList as default };