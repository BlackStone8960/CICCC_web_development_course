import React, {useEffect, useState, useReducer} from 'react';
import moviesReducer from '../reducer/moviesReducer';
import BooksContext from '../context/books-context';
import MovieList from './MovieList';
import axios from 'axios';

const Homepage = () => {
  const [movies, dispatch] = useReducer(moviesReducer, {});
  const [APIData, dispatch] = useReducer(APIDataReducer);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://api.themoviedb.org/3/movie/550?api_key=62157c10c2f3f945ca640aea2fc9b617");
      setData(result.data);
      console.log(data);
    }
    fetchData();
  }, [])

  return (
    <BooksContext.Provider value={{ movies, dispatch }}>
      <h1>MovieList</h1>
      <MovieList />
    </BooksContext.Provider>
  );
};

export { Homepage as default };