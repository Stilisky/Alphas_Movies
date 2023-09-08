import React from 'react'
import AccountInfo from '../components/AccountInfo'
import PassWordInfo from '../components/PassWordInfo'

const Account = ({user}) => {
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
                     <AccountInfo user={user} />
                     <PassWordInfo id={user.id}  />
                  </div>


               </div>
            </div>
         </div>
      </div>
   </section >
  )
}

export default Account