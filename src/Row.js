import axios from './axios';
import React, { useEffect, useState } from 'react'
import './Row.css';

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const baseUrl = "https://image.tmdb.org/t/p/original";
  console.log(movies);

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(movie => (
          ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
            <img
              key={movie.id}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${baseUrl}/${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.name}
            />
          )

        ))}
      </div>
    </div>
  )
}

export default Row