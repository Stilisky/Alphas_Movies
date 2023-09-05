import React from 'react'

export default function Hero() {
  return (
    <div className='flex items-center justify-center h-[500px] bg-fixed bg-center bg-cover custom-img'>
      <div className='absolute top-0 left-0 right-0 bottom-0 h-[500px] bg-black/70 z-[2]' />
      <div className='p-5 z-[2] mt-[-1rem]'>
        <h2 className='text-5xl text-center text-[#1ce783] font-bold'> Welcome to Alphas</h2>
        <p className='py-5 text-center text-[white] text-xl'> A website where you can find all your favorite movies! 
        </p>
      </div>
    </div>
  )
}
