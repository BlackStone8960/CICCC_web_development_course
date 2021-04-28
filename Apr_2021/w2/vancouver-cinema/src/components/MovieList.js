import React, {useReducer} from 'react';
import booksReducer from '../reducer/booksReducer';
import BooksContext from '../context/books-context';
import Book from './Book';

const MovieList = () => {
  const [books, dispatch] = useReducer(booksReducer, {});

  return (
    <BooksContext.Provider value={{ books, dispatch }}>
      <h1>MovieList</h1>
      <h1>Booking</h1>
      <Book />
    </BooksContext.Provider>
  );
};

export { MovieList as default };