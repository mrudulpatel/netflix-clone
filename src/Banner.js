import React, { useEffect, useState } from 'react'
import './Banner.css';
import axios from './axios';
import requests from "./Requests";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      setLoading(false);
      console.log(request.data.results);
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <header style={{
      backgroundImage: `url(${!loading ? `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}` :"https://images.unsplash.com/photo-1593642532979-7c1a43b0b6ac?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBpbWFnZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
        })`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
    }} className='banner'>
      <div className="banner__contents">
        <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner__buttons">
          <button id="banner__button">Play</button>
          <button id="banner__button">My List</button>
        </div>
        <h1 className="banner__description">{truncate(movie?.overview, 150)}</h1>
      </div>

      <div className="banner--fadeBottom" />


    </header>
  )
}

export default Banner