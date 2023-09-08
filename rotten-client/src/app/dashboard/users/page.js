"use client"
import React, { useEffect, useState } from 'react'
import AdminSidebar from '../../components/AdminSidebar'
import Users from '../../components/Users'

const page = () => {
  const [users, setUsers] = useState([])

   useEffect (() => {
      findUsers()
   },[])

  const findUsers = async () => {
    try {
      const url = "http://127.0.0.1:5000/users"
      const bearer = "Bearer " + localStorage.getItem("token")
      const responses = await fetch(url, {headers:{ "authorization": bearer }});
      const data = await responses.json()
      setUsers(data) 
    } catch (error) {
      
    }
  }

  if(!localStorage.getItem("token")) return (window.location.href = '/login')
  return (
    <AdminSidebar>
      <Users users={users} reloadComponent={findUsers}/>
    </AdminSidebar>
  )
}

export default page