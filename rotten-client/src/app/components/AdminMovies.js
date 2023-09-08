"use client"
import React, { useState } from 'react'
import NewMovies from '../components/NewMovies'
import MoviesTable from '../components/MoviesTable'

const AdminMovies = ({movies, categories, reloadComp, films}) => {
   const [modalOpen, setModalOp] = useState(false)

   const OpenModal = () => {
      setModalOp(true)
   }
   
   const onClose = () => {
      setModalOp(false)
      reloadComp()
   }

   
   
  return (
   <div>
      <div className="overflow-x-auto">
         <div className="min-w-screen min-h-screen bg-gray-100 flex items-start justify-center bg-gray-100 font-sans overflow-hidden mt-5">
               <div className="w-full lg:w-5/6">
                  <div className='w-full'>
                     <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                        <button onClick={OpenModal} className="bg-[#14472C] text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                           Create Movies
                        </button>
                     </div>
                  </div>
                  <NewMovies isOpen={modalOpen} onClose={onClose} categories={categories} films={films}/>
                  <div className="bg-white shadow-md rounded my-6">
                     <table className="min-w-max w-full table-auto">
                        <thead>
                           <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                              <th className="py-3 px-6 text-left">Title</th>
                              <th className="py-3 px-6 text-left">Comments</th>
                              <th className="py-3 px-6 text-center">Likes</th>
                              <th className="py-3 px-6 text-center">Actions</th>
                           </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm font-light">
                           {movies.map((movie) => (
                              <MoviesTable key={movie._id} movie={movie} reload={onClose} />
                           ))}
                        </tbody>
                     </table>
                  </div>
               </div>
         </div>
      </div>
   </div>
  )
}

export default AdminMovies