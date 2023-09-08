import React from 'react'
import AdminSidebar from '../components/AdminSidebar'
import Admin from '../components/Admin'


const Page = () => {
  if(!localStorage.getItem("token")) return (window.location.href = '/login')
  return (
    <AdminSidebar>
      <Admin/>
    </AdminSidebar>
  )
}

export default Page
