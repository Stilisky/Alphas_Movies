"use client"
import React, { useEffect, useState } from 'react'
import AdminSidebar from '../../components/AdminSidebar'
import Categories from '../../components/Categories'

const page = () => {
  const [cat, setGenres] = useState([])

   useEffect(() => {
      allCat()
   })

   const allCat = async () => {
      try {
         const url ="http://127.0.0.1:5000/categories"
         const respons = await fetch(url)
         const data = await respons.json()
         setGenres(data)
      } catch (error) {
         
      }
   }
  return (
    <AdminSidebar>
      <Categories categories={cat} />
    </AdminSidebar>
  )
}

export default page