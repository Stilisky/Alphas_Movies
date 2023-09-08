import React from 'react'
import AdminSidebar from '../../components/AdminSidebar'

const page = () => {
  if(!localStorage.getItem("token")) return (window.location.href = '/login')
  return (
    <AdminSidebar>
      
    </AdminSidebar>
  )
}

export default page