import React from 'react'

const AdminSidebar = ({children}) => {
  return (
   <div className="min-h-screen flex flex-row bg-gray-100">
      <div className="flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden">
         <div className="flex items-center justify-center h-20 shadow-md">
            <a href='/'><h1 className="text-3xl uppercase text-[#B0F1D1] font-bold">Alphas</h1></a>
            
         </div>
         <ul className="flex flex-col py-4">
            <li>
               <a href="/dashboard" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-black hover:text-gray-800">
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-home"></i></span>
                  <span className="text-sm font-medium">Dashboard</span>
               </a>
            </li>
            <li>
               <a href="/dashboard/users" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-black hover:text-gray-800">
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-music"></i></span>
                  <span className="text-sm font-medium">Users</span>
               </a>
            </li>
            <li>
               <a href="/dashboard/movies" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-black hover:text-gray-800">
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-drink"></i></span>
                  <span className="text-sm font-medium">Movies</span>
               </a>
            </li>
            <li>
               <a href="/dashboard/genres" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-black hover:text-gray-800">
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-shopping-bag"></i></span>
                  <span className="text-sm font-medium">Genres</span>
               </a>
            </li>
            <li>
               <a href="/dashboard/categories" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-black hover:text-gray-800">
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-chat"></i></span>
                  <span className="text-sm font-medium">Categories</span>
               </a>
            </li>
            <li>
               <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-black hover:text-gray-800">
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-log-out"></i></span>
                  <span className="text-sm font-medium">Logout</span>
               </a>
            </li>
         </ul>
      </div>
      <div className='flex flex-col bg-gray-100 w-full'>
         {children}
      </div>
   </div>
  )
}

export default AdminSidebar