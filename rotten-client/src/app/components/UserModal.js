"use client"
import React, { useState } from 'react'

const UserModal = ({isOpen, onClose, onCreate}) => {
   const [username, setName] = useState("");
   const [password, setPass] = useState("");
   const [email, setEmail] = useState("");
   const [conf, setConf] = useState("");
   const [error, setError] = useState('')

   const changeUsername = (event) => {
      setName(event.target.value)
   }

   const changeEmail = (event) => {
      setEmail(event.target.value)
   }

   const changePassword = (event) => {
      setPass(event.target.value)
   }

   const changeConf = (event) => {
      setConf(event.target.value)
   }

   const closeMod = () => {
      onClose()
   }

   const createUser = async () => {
      if (username && email && (password == conf)) {
         onCreate({username, email, password})
         onClose()
      }
      else {
         setError("Invalid informations")
      }
   }

   if(!isOpen) return null;
   return (
   <div>
      <div className="py-12 bg-gray-700 bg-opacity-25 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0">
         <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
            <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
               <div className="w-full flex justify-start text-gray-600 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-20 h-20">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
               </div>
               <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Create User</h1>
               <label for="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Username</label>
               <input id="name" onChange={changeUsername} required className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Username" />
               <label for="email" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Email</label>
               <div className="relative mb-5 mt-2">
                     <div className="absolute text-gray-600 flex items-center px-4 border-r h-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                           <path stroke-linecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                        </svg>
                     </div>
                     <input onChange={changeEmail} required type='email' id="email" className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-16 text-sm border-gray-300 rounded border" placeholder="mail@mail.com" />
               </div>

               <label for="pass" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Password</label>
               <input onChange={changePassword} type='password' required id="pass" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Password" />

               <label for="conf" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Confirm Password</label>
               <input onChange={changeConf} type='password' required id="conf" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Confirm Password" />

               <div className="flex items-center justify-start w-full">
                     <button onClick={createUser} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">Submit</button>
                     <button className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm" onClick={closeMod} >Cancel</button>
               </div>
               <button className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600" onClick={closeMod} aria-label="close modal" role="button">
                     <svg  xmlns="http://www.w3.org/2000/svg"  className="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                     </svg>
               </button>
            </div>
         </div>
      </div>
   </div>
  )
}

export default UserModal