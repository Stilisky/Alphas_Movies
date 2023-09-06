import React from 'react'

export default function Hero() {
  return (
    <div className='flex items-center justify-center h-[500px] bg-fixed bg-center bg-cover custom-img'>
      <div className='absolute top-0 left-0 right-0 bottom-0 h-[500px] bg-black/70 z-[2]' />
      <div className='p-5 z-[2] mt-[-1rem]'>
      <div className='text-center'>
        <h2 className='text-5xl text-[#1ce783] font-bold'>Discover the World of Entertainment</h2>
        <p className='py-5 text-[white] text-3xl font-bold'> Start Browsing Now
        </p>
        <button
          type="button"
          class=" item-center rounded border-2 border-success text-[#1ce783] px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-success transition duration-150 ease-in-out hover:border-success-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-success-600 focus:border-success-600 focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
          >
          Get Started
        </button>
        </div>
      </div>
    </div>
  )
}
