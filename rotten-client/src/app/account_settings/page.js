import React, { useState } from 'react'

export default function account_settings() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    oldPassword: '',
    newPassword: '',
    newPasswordConfirm: '',
  })
  const [error, setError] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleConfirmPasswordChange = (e) => {
    const confirmPasswordValue = e.target.value;
    setConfirmPassword(confirmPasswordValue);
    setPasswordsMatch(formData.password === confirmPasswordValue);
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!passwordsMatch) {
      return setError('Passwords do not match!');
    }
    try {
      const response = await fetch('http://localhost:3000/users/64f8b476dae2bf9f08358e53', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Account updated succesfully !');
      }
      else {
        const data = await response.json();
        alert(data.message);
      }
    }
    catch (error) {
      console.error('Error:', error);
    }
  };

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
              {!passwordsMatch && <p className="text-red-500 text-center text-sm">Passwords do not match</p>}

              <div class="px-14 py-5">
                <form onSubmit= {handleSubmit}>
                  <div class="form-group mb-6">
                    <label class="form-label inline-block mb-2 text-gray-700 font-bold">USERNAME</label>
                    <input type="text" name="username" for="username" value={formData.username} onChange={handleChange}class="form-control block
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
                      placeholder="" />
                  </div>
                  <div class="form-group mb-6">
                    <label class="form-label inline-block mb-2 text-gray-700 font-bold">Email</label>
                    <input type="email" name='email' value={formData.email} onChange={handleChange} class="form-control block
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
                      placeholder="" />
                  </div>
                  <div class="form-group mb-6">
                    <label class="form-label inline-block mb-2 text-gray-700 font-bold">Password</label>
                    <input name="oldPassword" type="password" value={formData.oldPassword} onChange={handleChange} class="form-control block
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
                      placeholder="Enter old password" />
                  </div>
                  <div class="form-group mb-6">
                    <label class="form-label inline-block mb-2 text-gray-700 font-bold">New password</label>
                    <input type="password" name="newPassword" value={formData.newPassword} onChange={handleChange}class="form-control block
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
                      placeholder="Enter new password" />
                  </div>
                  <div class="form-group mb-6">
                    <label class="form-label inline-block mb-2 text-gray-700 font-bold">Confirm new password</label>
                    <input type="password"  name="newPasswordConfirm" value={formData.newPasswordConfirm} onChange={handleConfirmPasswordChange}class="form-control block
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
                      placeholder="Confirm your new password" />
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
