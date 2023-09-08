"use client"
import React, { useEffect, useState } from 'react'
import AccountInfo from '../components/AccountInfo'
import PassWordInfo from '../components/PassWordInfo'

export default function account_settings() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    id: ''
  })
  
  // useEffect(() => {
  //   getUser()
  // })

  const getUser = async () => {
    try {
      const url = "http://127.0.0.1:5000/api/map/token"
      const token = "Bearer " + localStorage.getItem("token")
      const response = await fetch(url, {headers: {"authorization": token}})
      const data = await response.json()
      setFormData({
        username: data.username,
        email: data.email,
        id: data.id
      })
      console.log(formData);
    }
    catch {

    }
  }

/*                    change password section                    */ 
  if(!localStorage.getItem("token")) return (window.location.href = '/login')
  return (
    <section>
      <div class="flex justify-center">
        <div class="w-[1000px] p-8">

          <div class="flex-1 max-w-screen-2xl mx-auto text-white">
            <div class="text-center text-3xl font-bold mt-10 uppercase">My Account</div>
          </div>
          <div class="flex item-center justify-center">
            <div class="bg-black rounded-lg shadow-2xl w-3/4 m-4 my-10">
              {/* {!passwordsMatch && <p className="text-red-500 text-center text-sm">Passwords do not match</p>} */}

              <div class="px-14 py-5">
                <AccountInfo user={formData} />
                <PassWordInfo id={formData.id}  />
              </div>


            </div>
          </div>


        </div>
      </div>
    </section >
  )
}
