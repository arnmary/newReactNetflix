import { text } from '@fortawesome/fontawesome-svg-core';
import React, { useState } from 'react';

function Genres() {
  const [movies, setMovies] = useState([]);
  const genres = ["Drama", "Thriller", "Supernatural"];
const listStyle ={
  textAlign:'start',
  color:' rgb(167, 166, 166)'
}
  const fetchMoviesByGenre = async (genre) => {
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=b12cd858&s=${genre}`);
      const data = await response.json();
      setMovies(data.Search);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  return (
    <div>
      <div className="overHeading inter-500">
        {genres.map((genre, index) => (
          <React.Fragment key={genre}>
            <p onClick={() => fetchMoviesByGenre(genre)} style={{ cursor: "pointer", color: "wthite" }}>
              {genre}
            </p>
            {index < genres.length - 1 && <p>I</p>}
          </React.Fragment>
        ))}
      </div>
      
      <div className="movies-list">
        <h2 style={listStyle}>Movies:</h2>
        <ul>
          {movies.map((movie) => (
            <li style={listStyle} key={movie.imdbID}>{movie.Title} </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Genres;


