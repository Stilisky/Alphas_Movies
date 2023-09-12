"use client"
import React, { useEffect, useState } from 'react'
import AdminSidebar from '../../components/AdminSidebar'
import Genres from '../../components/Genres'

const page = () => {
  const [genres, setGenres] = useState([])

   useEffect(() => {
      allgenres()
   })

   const allgenres = async () => {
      try {
         const url ="http://127.0.0.1:5000/genres"
         const respons = await fetch(url)
         const data = await respons.json()
         setGenres(data)
      } catch (error) {
         
      }
   }
  return (
    <AdminSidebar>
      <Genres genres={genres}/>
    </AdminSidebar>
  )
}

export default page