import React from 'react'

const FilmsTable = ({film, onClose, catName}) => {

   const createMovie = async () => {
      // console.log(film.id);
      try {
         const bearer = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNmYyNjhhMzI5OTU4ODE5MDhjNmY4YTkzMzAyYjg3NiIsInN1YiI6IjY0ZjVkMzVhM2Q0M2UwMzg5MjNhYzBiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cSxuR1gE_VeGdUbPp06TWn0nUNS11WEt3rlT-zMV7kY"
         //film information
         const tmdb = 'https://api.themoviedb.org/3/movie/' + film.id
         const res = await fetch(tmdb, { headers: { "authorization": bearer } })
         const data = await res.json()
         //Save movies process    
         
         const img = "http://image.tmdb.org/t/p/w500/" + film.poster_path
         const url = "http://127.0.0.1:5000/api/map/movies"
         const movie = {
            "title": film.title,
            "description": film.overview,
            "language": film.original_language,
            "release_date": film.release_date,
            "image": img,
            "catName": catName,
            "genre": data.genres[0].name,
            "director":data.production_companies[0].name
         }
         const token = "Bearer " + localStorage.getItem("token") 
         const response = await fetch(url, {method: "POST" ,headers: {"content-Type": "application/json", "authorization": token}, body: JSON.stringify(movie)})
         onClose()
      } catch (error) {
         console.log(error);
      }
   }

  return (
   <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
      <td className="py-3 px-6 text-left">
         <div className="flex items-center">
            <span>{film.title}</span>
         </div>
      </td>
      <td className="py-3 px-6 text-left">
         <div className="flex items-center">
            <span className="font-medium">{film.release_date}</span>
         </div>
      </td>
      
      <td className="py-3 px-6 text-center">
         <div className="flex item-center justify-center">
            <button className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110" onClick={createMovie}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
               <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            </button>
         </div>
      </td>
   </tr>
  )
}

export default FilmsTable