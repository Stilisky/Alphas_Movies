import React from 'react'

function MoviesTable({movie, reload}) {
   const removemovie = async () => {
      try {
         const url = "http://127.0.0.1:5000/movies/" + movie._id
         const response = await fetch(url, {method: 'DELETE'})
         reload()
      } catch (error) {
         
      }
   }
  return (
   <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
      <td className="py-3 px-6 text-left">
         <div className="flex items-center">
            <span>{movie.title}</span>
         </div>
      </td>
      <td className="py-3 px-6 text-left">
         <div className="flex items-center">
               <span className="font-medium">{movie.comments.length}</span>
         </div>
      </td>
      
      <td className="py-3 px-6 text-center">
      <span className="font-medium">{movie.likes.length}</span>
      </td>
      
      <td className="py-3 px-6 text-center">
         <div className="flex item-center justify-center">            
            <button className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110" onClick={removemovie}>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
               </svg>
            </button>
         </div>
      </td>
   </tr>
  )
}

export default MoviesTable