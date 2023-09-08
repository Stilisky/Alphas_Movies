"use client"
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Billboard from '../components/Billboard';
import Favlist from '../components/Favlist';

const Page = () => {
  // const [formData, setFormData] = useState({
  //   favorites: [],
  //   username: '',
  //   email: '',
  //   id: ''
  // });
  const [user, setUser] = useState([])

  useEffect(() => {
    getUserToken();
  }, []);

  const getUserToken = async () => {
    try {
      const url = "http://127.0.0.1:5000/api/map/token";
      const token = "Bearer " + localStorage.getItem("token");
      const response = await fetch(url, {
        headers: { "Authorization": token }
      });

      if (response.ok) {
        const data = await response.json();
        // setFormData({
        //   favorites: data.favorites,
        //   username: data.username,
        //   email: data.email,
        //   id: data.id
        // });
        // console.log(formData);
        getUser(data.id)
      } else {
        console.error('Erreur lors de la récupération des données de l\'utilisateur.');
      }
    } catch (error) {
      console.error('Erreur : ' + error);
    }
  };

  const getUser = async (id) => {
    try {
      const url = "http://127.0.0.1:5000/users/myfavorites/" + id
      const token = "Bearer " + localStorage.getItem("token");
      const response = await fetch(url, {
        headers: { "Authorization": token }
      });
      const data = await response.json()
      setUser(data)
      // console.log(data);
    } catch (error) {
      
    }
  }

  return (
    <div>
      <Navbar />
      <Billboard />
      <div className='text-white w-full'>
        <div className='container mx-auto flex flex-wrap space-x-2'>
          {user.map((favorite) => (
            <Favlist key={user._id} favorite={favorite}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
