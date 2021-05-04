import React, { useEffect, useState } from 'react';

const MovieDetail = (props) => {
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    const APIData = props.location.state;
    const data = APIData.results && APIData.results.filter((movie) =>
      movie.id === Number(props.match.params.id)
    )
    console.log(data);
    setMovieData(data);
  }, []);

  return (
    <div>
      <div></div>
    </div>
  )
};

export { MovieDetail as default };