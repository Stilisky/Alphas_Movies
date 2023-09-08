"use client"
import React, { useEffect, useState } from 'react'
import AdminSidebar from '../../components/AdminSidebar'
import AdminMovies from '../../components/AdminMovies'

const page = () => {
  const [movies, setMovie] = useState([])
  const [films, setFilms] = useState([])
  const [cat, setCat] = useState([])
  const [catName, setName] = useState("")

  useEffect(()=> {
    getMovies()
    getfilms()
    getCategories()
  }, [])
  
  const getfilms = async () => {
    const bearer = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNmYyNjhhMzI5OTU4ODE5MDhjNmY4YTkzMzAyYjg3NiIsInN1YiI6IjY0ZjVkMzVhM2Q0M2UwMzg5MjNhYzBiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cSxuR1gE_VeGdUbPp06TWn0nUNS11WEt3rlT-zMV7kY"
    try {
       const url = 'https://api.themoviedb.org/3/movie/now_playing'
       const response = await fetch(url, { headers: { "authorization": bearer } })
       const data = await response.json()
       setFilms(data.results)
       setName("NOW PLAYING")
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

  const getCategories = async () => {
    try {
      const url = "http://127.0.0.1:5000/categories"
      const response = await fetch(url)
      const data = await response.json()
      setCat(data)
    } catch (error) {
      
    }
  }

  const updateFilms = async (val) => {
    const bearer = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNmYyNjhhMzI5OTU4ODE5MDhjNmY4YTkzMzAyYjg3NiIsInN1YiI6IjY0ZjVkMzVhM2Q0M2UwMzg5MjNhYzBiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cSxuR1gE_VeGdUbPp06TWn0nUNS11WEt3rlT-zMV7kY"
    switch (val) {
      case "UP COMING":
        try {
            const url = 'https://api.themoviedb.org/3/movie/upcoming'
            const response = await fetch(url, {headers: {"authorization": bearer}})
            const data = await response.json()
            setFilms(data.results)
            setName("UP COMING")
        } catch (error) {

        }
        break;
      case "POPULAR":
        try {
            const url = 'https://api.themoviedb.org/3/movie/popular'
            const response = await fetch(url, {headers: {"authorization": bearer}})
            const data = await response.json()
            setFilms(data.results)
            setName("POPULAR")
        } catch (error) {

        }
        break;
      case "TOP RATED":
        try {
            const url = 'https://api.themoviedb.org/3/movie/top_rated'
            const response = await fetch(url, {headers: {"authorization": bearer}})
            const data = await response.json()
            setFilms(data.results)
            setName("TOP RATED")
        } catch (error) {

        }
        break;
      default:
        try {
          const url = 'https://api.themoviedb.org/3/movie/now_playing'
          const response = await fetch(url, { headers: { "authorization": bearer } })
          const data = await response.json()
          setFilms(data.results)
          setName("NOW PLAYING")
       } catch (error) {  }
       break;

    }
  }

  return (
    <AdminSidebar>
      <AdminMovies movies={movies} films={films} reloadComp={getMovies} categories={cat} changeFilm={updateFilms} catName={catName} />
    </AdminSidebar>
  )
}

export default page