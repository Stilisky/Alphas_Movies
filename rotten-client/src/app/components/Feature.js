import React from 'react'

export default function Feature() {
  return (
    <div className='bg-black h-auto'>
      <div className='relative pt-24 text-center text-bold mb-40'>
        <h2 className=' text-white text-xl mt-8 '> Critically Acclaimed Titles</h2>
        <h1 className=' text-5xl text-white text-bold mt-10 uppercase'>Find all the movies you love </h1>
      </div>
      <div class="mx-auto border-t bg-transparent opacity-25 border-gray-400 w-full my-4"></div>

      <div class=" flex justify-between ml-5 mr-4 space-x-6">

        <div class=" max-w-sm bg-cover h-[600px] w-1/2 pl-6 custom-spider"> 

        </div>
        <div className='w-1/2 mt-[300px] mr-12'> 
        <h2 className='text-white font-bold uppercase text-4xl mb-4'>Stay in the Loop with the Latest Hits</h2>
        <p className= 'text-[#1ce783] text-xl'>See What Critics Are Saying</p>
        </div>


      </div>
    </div>
  )
}
