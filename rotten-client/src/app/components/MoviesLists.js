import React from 'react';
import MoviesCard from './MoviesCard';

const MoviesLists = ({ data }) => {
  return (
    <>
      {data.map((categories) => (
        <div key={categories._id} className='px-4 md:px-12 mt-4'>
          <div>
            <p className='text-white text-md md:text-xl lg:text-2xl font-semibold uppercase tracking'>
              {categories.name}
            </p>
            <div className='text-white flex space-x-3 space-y-8 overflow-hidden overflow-x-scroll example1'>
              {categories.movies.map((movie) => (
                <MoviesCard key={movie._id} data={movie} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MoviesLists;