"use client"
import React, { useEffect, useState } from 'react'
import AdminSidebar from '../../components/AdminSidebar'
import AdminMovies from '../../components/AdminMovies'

const page = () => {
  const [categories, setCat] = useState([])
  const [movies, setMovie] = useState([])
  const [films, setFilms] = useState([])

  useEffect(()=> {
    getCategories()
    getMovies()
  }, [])

  const getCategories = async () => {
    try {
      const url = "http://127.0.0.1:5000/categories"
      const response = await fetch(url)
      const data = await response.json()
      setCat(data)
    } catch (error) {
      
    }
  }
  const getfilms = async () => {
    try {
       const bearer = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNmYyNjhhMzI5OTU4ODE5MDhjNmY4YTkzMzAyYjg3NiIsInN1YiI6IjY0ZjVkMzVhM2Q0M2UwMzg5MjNhYzBiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cSxuR1gE_VeGdUbPp06TWn0nUNS11WEt3rlT-zMV7kY"
       const url = 'https://api.themoviedb.org/3/movie/now_playing'
       const response = await fetch(url, {headers: {"authorization": bearer}})
       const data = await response.json()
       setFilms(data.results)
    } catch (error) {
       
    }
  }

  const getMovies = async () => {
    try {
      const url = "http://127.0.0.1:5000/movies"
      const response = await fetch(url)
      const data = await response.json()
      setMovie(data)
    } catch (error) {
      
    }
  }

  return (
    <AdminSidebar>
      <AdminMovies movies={movies} categories={categories} reloadComp={getMovies} films={films}/>
    </AdminSidebar>
  )
}

export default page