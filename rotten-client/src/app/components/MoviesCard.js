import React from 'react'
import Image from 'next/image'
import wallpaper from '../../../public/Images/desktop-wallpaper-spiderman-hollywood-movie-thumbnail.jpg'

const MoviesCard = () => {
  return (
    <div className='card my-5 flex-shrink-0'>
      <div className='imgbox'>
        <Image src={wallpaper} alt='spider' className='image' />
      </div>
      <div className='info'>
        <h1 className='text-2xl md:text-3xl'><strong>Title</strong></h1>
        <div className='flex space-x-2'>
          <button type="button" class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-black bg-[#1ce783] rounded-lg w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Action
          </button>
          <button type="button" class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-black bg-[#1ce783] rounded-lg w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            See more
          </button>
        </div>
        <p className='text-white'>
          lorem chbkhds csjcvsc sbd c hck scskchc sdcsjvc c ckschd csc sjc js cl: ccls :csdch scl dhslc shc schdscs
        </p>

      </div>
    </div>
  )
}

export default MoviesCard