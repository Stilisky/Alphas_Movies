"use client"
import React, { useEffect, useState } from 'react'
import Account from '../components/Account'

const page = () => {
  const [user, setUser] = useState([])
  
  useEffect(() =>(
    getUserByToken()
  ))

  const getUserByToken = async () => {
    try {
      const bearer = "Bearer " + localStorage.getItem("token")
      const response = await fetch('http://localhost:5000/api/map/token', {
        headers: {
          'Content-Type': 'application/json',
          "authorization": bearer
        },
      });
      const data = await response.json()
      getUser(data.id)
    } catch (error) {
      window.location.href = '/login'
    }
  }

  const getUser = async (id) => {
    try {
      const bearer = "Bearer " + localStorage.getItem("token")
      const url = 'http://localhost:5000/users/' + id
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          "authorization": bearer
        },
      });
      const data = await response.json()
      setUser(data)
    } catch (error) {
      
    }
  }

  return (
    <div>
      tttt
    </div >
  )
}

export default page