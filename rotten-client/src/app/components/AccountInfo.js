"use client"
import React, { useState } from "react";

const AccountInfo = ({ user }) => {
  const [username, setName] = useState(user.username);
   const [email, setEmail] = useState(user.email);
  const [id, setId] = useState(user.id);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    const token = "Bearer " + localStorage.getItem("token");
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/users/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Account updated succesfully !");
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
   
    <form onSubmit={handleSubmit}>
      <div class="form-group mb-6">
        <label class="form-label inline-block mb-2 font-bold text-white">
          USERNAME
        </label>
        <input
          type="text"
          name="username"
          for="username"
          value={username}
          onChange={handleChange}
          class="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-white
              bg-black bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
            focus:border-blue-600 focus:outline-none"
          id=""
          placeholder=""
        />
      </div>
      <div class="form-group mb-6">
        <label class="form-label inline-block mb-2 text-white font-bold">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          class="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-white
              bg-black bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
            focus:border-blue-600 focus:outline-none"
          id="exampleInputPassword2"
          placeholder=""
        />
      </div>
      <div class="flex justify-end gap-3">
        <button
          type="submit"
          class="border hover:bg-white hover:text-black text-blue-50 rounded-lg py-2 px-4 mt-5"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default AccountInfo;
