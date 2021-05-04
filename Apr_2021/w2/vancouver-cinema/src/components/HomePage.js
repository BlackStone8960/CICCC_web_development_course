import React, {useEffect, useState} from 'react';
import APIContext from '../context/API-context';
import MovieList from './MovieList';
import axios from 'axios';

const Homepage = () => {
  const [APIData, setAPIData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const API = {
        baseURL: "https://api.themoviedb.org/3/",
        key: "62157c10c2f3f945ca640aea2fc9b617"
      }
      const result = await axios(`${API.baseURL}movie/now_playing?api_key=${API.key}&language=en-US&page=1`);
      const genre = await axios(`${API.baseURL}genre/movie/list?api_key=${API.key}&language=en-US`);
      // const result = await axios("https://api.themoviedb.org/3/movie/550?api_key=62157c10c2f3f945ca640aea2fc9b617");
      // なんかイロイロややこしいので結局Reduxで管理するようにする->やっぱいいや
      setAPIData(result.data);
      console.log(result.data);
      console.log(genre);
    } // 例外処理後で書く
    fetchData();
  }, [])
  
  return (
    <APIContext.Provider value={{ APIData }}>
      <h1>MovieList</h1>
      <MovieList />
    </APIContext.Provider>
  );
};

export { Homepage as default };