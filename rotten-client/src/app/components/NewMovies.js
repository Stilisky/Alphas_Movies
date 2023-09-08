"use client"
import React, { useState } from 'react'

const NewMovies = ({isOpen, onClose, categories, films}) => {
   const [catSel, setCat] = useState('')
   const [movie, setMovie] = useState('')

   const choiceCat = async (event) => {
      setCat(event.target.value)
   }

   
      // switch (val) {
      //    case "NOW PLAYING":
            

      //       break;
      //    case "UP COMING":
      //       try {
      //          const url = 'https://api.themoviedb.org/3/movie/upcoming'
      //          const response = await fetch(url, {headers: {"authorization": bearer}})
      //          const data = await response.json()
      //          setFilms(data.results)
      //       } catch (error) {
               
      //       }
      //       break;
      //    case "POPULAR":
      //       try {
      //          const url = 'https://api.themoviedb.org/3/movie/popular'
      //          const response = await fetch(url, {headers: {"authorization": bearer}})
      //          const data = await response.json()
      //          setFilms(data.results)
      //       } catch (error) {
               
      //       }
      //       break;
      //    case "TOP RATED":
      //       try {
      //          const url = 'https://api.themoviedb.org/3/movie/top_rated'
      //          const response = await fetch(url, {headers: {"authorization": bearer}})
      //          const data = await response.json()
      //          setFilms(data.results)
      //       } catch (error) {
               
      //       }
      //       break;
      // }

   const choiceMovie = async (event) => {
      setMovie(event.target.value)
      
   }

   const createMovie = () => {

   }

   const closeMovie = () => {
      onClose()
   }

   if (!isOpen) return null;
   return (
    <div>
      <div className="py-12 bg-gray-700 bg-opacity-25 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0">
         <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
            <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
               <div className="w-full flex justify-start text-gray-600 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-20 h-20">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5" />
                  </svg>
               </div>
               <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Upload Movie</h1>
               <div className="flex w-72 flex-col gap-6">
                  
                  <select value={catSel} onChange={choiceCat}>
                     {categories.map((cat) => (
                        <option key={cat._id} value={cat._id}>{cat.name}</option>
                     ))}
                  </select>
                  <label>Choice film</label>
                  <select value={movie} onChange={choiceMovie}>
                     <option>default</option>
                     
                  </select>
               </div>
               {films.map((film) => {
                  // console.log(film);
                  <div key={film.id}>{film.title}</div>
                  // <div>{film.title}</div>
               })}
               <label for="pass" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Password</label>
               <inpu type='password' required id="pass" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Password" />

               <label for="conf" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Confirm Password</label>
               <input type='password' required id="conf" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Confirm Password" />

               <div className="flex items-center justify-start w-full">
                     <button onClick={createMovie} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">Submit</button>
                     <button className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm" onClick={closeMovie} >Cancel</button>
               </div>
               <button className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600" onClick={closeMovie} aria-label="close modal" role="button">
                     <svg  xmlns="http://www.w3.org/2000/svg"  className="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                     </svg>
               </button>
            </div>
         </div>
      </div>
    </div>
   )
}

export default NewMovies