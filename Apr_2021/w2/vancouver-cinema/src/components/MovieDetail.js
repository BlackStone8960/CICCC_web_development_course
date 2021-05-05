import React, { useEffect, useState } from 'react';
import Header from './Header';
import Genre from './Genre';

const MovieDetail = (props) => {
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    if(props.location.state && props.match.params.id) {
      const movies = props.location.state;
      const data = movies && movies.filter((movie) =>
        movie.id === Number(props.match.params.id)
      )
      console.log(data[0]);
      setMovieData(data[0]);  
    }
  }, []);

  return (
    <section className="main-container">
      <Header />
      <div className="detail-wrapper">
        <img
          src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movieData.poster_path}`}
          alt={movieData.title}
          className="detail-poster"
        >
        </img>
        <div className="detail-describe">
          <div className="detail-headline">
            <div className="detail-title">{movieData.title}</div>
            <div className="detail-vote_average"><b>{movieData.vote_average}</b> / 10 <span>({movieData.vote_count})</span></div>
          </div>
          <div className="detail-releaseDate">Released at: {movieData.release_date}</div>
          <p className="detail-overview">{movieData.overview}</p>
          <div className="movie-genre">
            {
              movieData.genre && movieData.genre.map((genre) => (
                <Genre key={genre} genre={genre} />
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
};

export { MovieDetail as default };