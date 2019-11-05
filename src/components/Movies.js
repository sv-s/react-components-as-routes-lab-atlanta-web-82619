import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(movie => {
          return (<div>
            <h2>Title: {movie.title}</h2>
            <p>Minutes: {movie.time}</p>
            <span>Genres:
              <ul>
                {movie.genres.map(genre => {
                  return (<li>{genre}</li>)
                })}
              </ul>
            </span>
            <p>Metascore: {movie.metascore}</p>
          </div>)
        })}
    </div>
  );
};

export default Movies;
