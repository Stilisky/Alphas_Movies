"use client"
import React, { useEffect, useState } from 'react'
import UserModal from '../components/UserModal'
import UserInfo from '../components/UserInfo'

const Users = ({users, reloadComponent}) => {
   const [modalOpen, setModalOp] = useState(false)

   const handleOpenModal = () => {
      setModalOp(true)
   }
   
   const onClose = () => {
      setModalOp(false)
      reloadComponent()
   }

  return (
    <div>
      <div className="overflow-x-auto">
        <div className="min-w-screen min-h-screen bg-gray-100 flex items-start justify-center bg-gray-100 font-sans overflow-hidden mt-5">
            <div className="w-full lg:w-5/6">
               <div className='w-full'>
                  <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                     <button onClick={handleOpenModal} className="bg-[#14472C] text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                        Create User
                     </button>
                  </div>
               </div>
               <UserModal isOpen={modalOpen} onClose={onClose} />
               <div className="bg-white shadow-md rounded my-6">
                  <table className="min-w-max w-full table-auto">
                     <thead>
                        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                           <th className="py-3 px-6 text-left">Username</th>
                           <th className="py-3 px-6 text-left">Email</th>
                           <th className="py-3 px-6 text-center">Status</th>
                           <th className="py-3 px-6 text-center">Actions</th>
                        </tr>
                     </thead>
                     <tbody className="text-gray-600 text-sm font-light">
                        {users.map((user) => (
                           <UserInfo key={user._id} user={user} id={user._id} reloadComp={onClose}/>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Users