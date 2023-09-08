"use client"
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Billboard from '../components/Billboard';

const Page = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    id: ''
  });

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const url = "http://127.0.0.1:5000/api/map/token";
      const token = "Bearer " + localStorage.getItem("token");
      const response = await fetch(url, {
        headers: { "Authorization": token }
      });

      if (response.ok) {
        const data = await response.json();
        setFormData({
          favorites: data.favorites,
          username: data.username,
          email: data.email,
          id: data.id
        });
        console.log(formData);
      } else {
        console.error('Erreur lors de la récupération des données de l\'utilisateur.');
      }
    } catch (error) {
      console.error('Erreur : ' + error);
    }
  };

  return (
    <div>
      <Navbar />
      <Billboard />
      <div className='text-white'>
        <h1>Username: {formData.username}</h1>
        <h1>Email: {formData.email}</h1>
        <h1>ID: {formData.id}</h1>
        <h1>favorites: {formData.favorites}</h1>
      </div>
    </div>
  );
};

export default Page;
