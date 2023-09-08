"use client"
import React, { useEffect } from 'react'

const Logout = () => {
   useEffect(() =>{
      localStorage.removeItem("token");
      window.location.href = "/"
   })
  return (
    <div>Logout</div>
  )
}

export default Logout