"use client"
import React, { useState } from 'react'
import UpdateUser from '../components/UpdateUser'
import { data } from 'autoprefixer'

const UserInfo = ({user, id, reloadComp}) => {
   const [modalOpen, setModalOp] = useState(false)

   const handleOpenModal = () => {
      setModalOp(true)
   }
   
   const onClose = () => {
      setModalOp(false)
   }

   const update = async (user) => {
      try {
         console.log(user);
         // const url = "http://127.0.0.1:5000/users" + id
         // const responses = await fetch(url, {method: 'PUT', body: JSON.stringify(user)});
         // const data = await responses.json()
         // setUsers(data) 
       } catch (error) {
         
       }
   }


   const promote = async () => {
      console.log("in promote");
      try {
         const data = {
            "username": user.username,
            "email": user.email,
            "password": user.password,
            "isAdmin": true
         }
         const url = "http://127.0.0.1:5000/users/" +id
         console.log(data);
         await fetch(url, {method: 'PUT', headers: {"content-Type": "application/json"}, body: JSON.stringify(data)});
         reloadComp()
      } catch (error) {
         
      }
   }

   const dePromote = async () => {
      try {
         const data = {
            "username": user.username,
            "email": user.email,
            "password": user.password,
            "isAdmin": false
         }
         const url = "http://127.0.0.1:5000/users/" +id
         console.log(data);
         await fetch(url, {method: 'PUT', headers: {"content-Type": "application/json"}, body: JSON.stringify(data)});
         reloadComp()
      } catch (error) {
         
      }
   }

   const removeUser = async () => {
      try {
         const url = "http://127.0.0.1:5000/users/" + id
         const response = await fetch(url, {method: 'DELETE'})
         reloadComp()
      } catch (error) {
         
      }
   }

  return (
      <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
         <td className="py-3 px-6 text-left">
            <div className="flex items-center">
               <div className="mr-2">
                     <img className="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/women/2.jpg"/>
               </div>
               <span>{user.username}</span>
            </div>
         </td>
         <td className="py-3 px-6 text-left">
            <div className="flex items-center">
                  <span className="font-medium">{user.email}</span>
            </div>
         </td>
         
         <td className="py-3 px-6 text-center">
            {user.isAdmin ? (
               <button className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs" onClick={dePromote}>Admin</button>
            ): <button className="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs" onClick={promote} >User</button>}
         </td>
         
         <td className="py-3 px-6 text-center">
            <div className="flex item-center justify-center">
               <button className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110" onClick={handleOpenModal}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
               </button>
               
               <button className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110" onClick={removeUser}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
               </button>
            </div>
         </td>
         <UpdateUser isOpen={modalOpen} closeModal={onClose} user={user} update={reloadComp} />
      </tr>
   )
}

export default UserInfo