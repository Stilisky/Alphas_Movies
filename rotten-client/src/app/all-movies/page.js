"use client"
import Image from 'next/image'
import Billboard from '../components/Billboard'
import MoviesLists from '../components/MoviesLists'
import { useState, useEffect } from 'react'; // Importez useEffect

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies()
  }, []);

  const fetchMovies = async () => {
    try{
      const url = "http://127.0.0.1:5000/movies";
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setMovies(data)

    } catch(error){
      console.error('error:' + error)
    }
  }

  return (
    <main>
      <Billboard />
      <div className='pb-40'>
        <MoviesLists text="Upcoming" data={movies} />
      </div>
    </main>
  )
}