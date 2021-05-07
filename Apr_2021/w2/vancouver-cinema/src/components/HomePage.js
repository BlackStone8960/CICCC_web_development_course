import React from 'react';
import MovieList from './MovieList';
import Header from './Header';

const Homepage = () => {  
  return (
    <section className="main-container">
      <Header />
      <div className="main-wrapper">
        <MovieList />
      </div>
    </section>
  );
};

export { Homepage as default };