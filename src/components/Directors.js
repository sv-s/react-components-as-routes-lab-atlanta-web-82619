import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director => {
        return (<div>
          <h2>Name: {director.name}</h2>
          <span>
            Movies:
            <ul>
              {director.movies.map(movie => {
                return (<li>{movie}</li>)
              })}
            </ul>
          </span>
        </div>)
      })}
    </div>
  );
}

export default Directors
