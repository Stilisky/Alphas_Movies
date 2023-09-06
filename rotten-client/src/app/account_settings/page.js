import React from 'react'

export default function account_settings() {
  return (
    <section>
      <div class="flex justify-center">
        <div class="w-[1000px] p-8">

          <div class="flex-1 max-w-screen-2xl mx-auto text-white">
            <div class="text-center py-10 text-3xl font-bold uppercase">My Account</div>
          </div>
          <div class="bg-blue-400 flex item-center justify-center">
          <div class="bg-white rounded-lg shadow-2xl w-3/4 m-4 my-10">
            <header class="bg-gray-100 rounded-t-lg py-5 px-4 text-xl font-extrabold uppercase">
              Settings
            </header>

            <div class="px-14 py-5">
              <form>              
                <div class="form-group mb-6">
                  <label  class="form-label inline-block mb-2 text-gray-700 font-bold">USERNAME</label>
                  <input type="text" name="username" for="username" class="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id=""
                    placeholder=""/>
                </div>
                <div class="form-group mb-6">
                  <label  class="form-label inline-block mb-2 text-gray-700 font-bold">Email</label>
                  <input for="email" type="email" name='email' class="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword2"
                    placeholder=""/>
                </div>
                <div class="form-group mb-6">
                  <label class="form-label inline-block mb-2 text-gray-700 font-bold">Password</label>
                  <input name="password" type="password" class="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Enter old password"/>
                </div>
                <div class="form-group mb-6">
                  <label class="form-label inline-block mb-2 text-gray-700 font-bold">New password</label>
                  <input type="password" class="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword2"
                    placeholder="Enter new password"/>
                </div>
                <div class="form-group mb-6">
                  <label class="form-label inline-block mb-2 text-gray-700 font-bold">Confirm new password</label>
                  <input type="password" class="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword2"
                    placeholder="Confirm your new password"/>
                </div>

                <div class="flex justify-end gap-3">
                  <button type="submit" class="bg-blue-400 text-blue-50 rounded-lg py-2 px-4 mt-5">Save</button>
                </div>
              </form>
            </div>


          </div>
        </div>


      </div>
    </div>
    </section >
  )
}
