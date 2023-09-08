"use client"
import React, { useState } from "react";

const PassWordInfo = (id) => {
  const [passwordFormData, setPasswordFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [error, setError] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPasswordValue = e.target.value;
    setConfirmPassword(confirmPasswordValue);
    setPasswordsMatch(formData.password === confirmPasswordValue);
  };

  const handleSubmitPassword = async (e) => {
    e.preventDefault();
    if (!passwordsMatch) {
      return setError("Passwords do not match!");
    }
    try {
      const response = await fetch("http://localhost:3000/users/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Account updated succesfully !");
        window.location.href = "/all-movies";
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmitPassword}>
      <div class="form-group mb-6">
        <label class="form-label inline-block mb-2 text-white font-bold">
          Password
        </label>
        <input
          name="oldPassword"
          type="password"
          value={passwordFormData.oldPassword}
          onChange={handlePasswordChange}
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
            focus:outline-none"
          placeholder="Enter old password"
        />
      </div>
      <div class="form-group mb-6">
        <label class="form-label inline-block mb-2 text-white font-bold">
          New password
        </label>
        <input
          type="password"
          name="newPassword"
          value={passwordFormData.newPassword}
          onChange={handlePasswordChange}
          class="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-black bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="exampleInputPassword2"
          placeholder="Enter new password"
        />
      </div>
      <div class="form-group mb-6">
        <label class="form-label inline-block mb-2 text-white font-bold">
          Confirm new password
        </label>
        <input
          type="password"
          name="newPasswordConfirm"
          value={passwordFormData.newPasswordConfirm}
          onChange={handleConfirmPasswordChange}
          class="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-black bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="exampleInputPassword2"
          placeholder="Confirm your new password"
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

export default PassWordInfo;
