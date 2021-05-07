import React from 'react';
import { connect } from 'react-redux';
import Movie from "./Movie";

export const MovieList = ({ movies }) => (
  <div className="movielist-wrapper">
    {
      movies.map((movie) => (
        <Movie key={movie.original_title} movie={movie} />
      ))
    }
  </div>
);

const mapStateToProps = (state) => ({
  movies: state.movies
})

export default connect(mapStateToProps)(MovieList);