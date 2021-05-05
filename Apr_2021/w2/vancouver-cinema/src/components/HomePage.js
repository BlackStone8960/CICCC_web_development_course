import React, {useEffect, useState} from 'react';
import APIContext from '../context/API-context';
import MovieList from './MovieList';
import axios from 'axios';
import Header from './Header';

const Homepage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const API = {
        baseURL: "https://api.themoviedb.org/3/",
        key: "62157c10c2f3f945ca640aea2fc9b617"
      }
      const movies = await axios(`${API.baseURL}movie/now_playing?api_key=${API.key}&language=en-US&page=1`);
      const genre = await axios(`${API.baseURL}genre/movie/list?api_key=${API.key}&language=en-US`);
      const moviesData = movies.data.results;
      const genreData = genre.data.genres;

      moviesData.forEach((movie, movieIndex, movieArray) => {
        movieArray[movieIndex].genre = [];
        movie.genre_ids.forEach((movieGenreId) => {
          genreData.forEach((genre) => {
            movieGenreId === genre.id && movieArray[movieIndex].genre.push(genre.name);
          })
        })
      });

      setMovies(moviesData);
      console.log(moviesData);
      console.log(genreData);
    } // 例外処理後で書く
    fetchData();
  }, [])
  
  return (
    <APIContext.Provider value={{ movies }}>
      <section className="main-container">
        <Header />
        <div className="main-wrapper">
          <MovieList />
        </div>
      </section>
    </APIContext.Provider>
  );
};

export { Homepage as default };