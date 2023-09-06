import React from 'react'
import MoviesCard from './MoviesCard'

const MoviesLists = ({text}) => {
  return (
    <div className='px-4 md:px-12 mt-4'>
        <div>
            <p className='text-white text-md md:text-xl lg:text-2xl font-semibold uppercase tracking'>
                {text}
            </p>
            <div className='text-white flex space-x-3 space-y-8 overflow-hidden overflow-x-scroll example1'>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
            </div>
        </div>
    </div>
  )
}

export default MoviesLists