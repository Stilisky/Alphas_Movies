"use client"
import React, { useEffect, useState } from 'react'

const Admin = () => {
   const [movies, setMovies] = useState("")
   const [users, setUsers] = useState("")
   const [cat, setCat] = useState("")
   const [com, setCom] = useState("")
   const [like, setLike] = useState("")
   const [genre, setGenre] = useState("")
   useEffect (() => {
      getDashInfo()
   })
   const getDashInfo = async () => {
      const url = "http://127.0.0.1:5000/api/map/kpi"
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
      setCat(data.category)
      setCom(data.comment)
      setGenre(data.genre)
      setLike(data.like)
      setMovies(data.movie)
      setUsers(data.user)
   }
  return (
      <div>
         <div className='flex flex-row justify-center mt-14'>
            <div className='flex flex-col mr-8'>
               <a href="#" className="block max-w-sm p-6 bg-[#D3E4F5] border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Total Movies</h5>
                  <p className="flex item-center justify-center font-bold text-gray-700 dark:text-gray-400">{movies}</p>
               </a>
            </div>
            <div className='flex flex-col mr-8'>
               <a href="#" className="block max-w-sm p-6 bg-[#DDF5D3] border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Total Users</h5>
                  <p className=" flex font-bold text-gray-700 dark:text-gray-400 item-center justify-center">{users}</p>
               </a>
            </div>
            <div className='flex flex-col mr-8'>
               <a href="#" className="block max-w-sm p-6 bg-[#FCCCCE] border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Total Categories</h5>
                  <p className="flex font-bold text-gray-700 dark:text-gray-400 item-center justify-center">{cat}</p>
               </a>
            </div>
            <div className='flex flex-col mr-8'>
               <a href="#" className="block max-w-sm p-6 bg-[#CDF168] border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Total Comments</h5>
                  <p className="flex font-bold text-gray-700 dark:text-gray-400 item-center justify-center">{com}</p>
               </a>
            </div>
         </div>
         <div className='flex flex-row justify-center mt-20'>
            <div className='flex flex-col mr-8'>
               <a href="#" className="block max-w-sm p-6 bg-[#E3D4FF] border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Total Likes</h5>
                  <p className="flex item-center justify-center font-bold text-gray-700 dark:text-gray-400">{like}</p>
               </a>
            </div>
            <div className='flex flex-col mr-8'>
               <a href="#" className="block max-w-sm p-6 bg-[#FFF6D4] border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Total Genres</h5>
                  <p className=" flex font-bold text-gray-700 dark:text-gray-400 item-center justify-center">{genre}</p>
               </a>
            </div>
         </div>
      </div>
      
   )
}

export default Admin