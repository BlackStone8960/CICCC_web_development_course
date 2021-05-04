import React, { useContext } from 'react';
import APIContext from '../context/API-context';
import Movie from "./Movie";

const MovieList = () => {
  const { APIData } = useContext(APIContext);

  return (
    <div>
      {
        APIData.results && APIData.results.map((movie) => (
          <Movie key={movie.original_title} movie={movie} APIData={APIData}/>
        ))
      }
    </div>
  )
};

export { MovieList as default };