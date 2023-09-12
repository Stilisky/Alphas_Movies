"use client"
import React, { useEffect, useState } from 'react'
import Account from '../components/Account'


const Page = () => {
  const [utili, setutili] = useState({});
  
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
        getUser(data.id)
      } else {
        console.error('Erreur lors de la récupération des données de l\'utilisateur.');
      }
    } catch (error) {
      console.error('Erreur : ' + error);
    }
  };

  const getUser = async (id) => {
    let data;
    try {
      const url = "http://127.0.0.1:5000/users/" + id
      const token = "Bearer " + localStorage.getItem("token");
      const response = await fetch(url, {
        headers: { "Authorization": token }
      });
      if(response.ok){
        data = await response.json();
      }
    } catch (error) {
      
    }
    setutili(data);
    // console.log(utili);
  }

  return (
    <div>
      <Account user={utili}/>
    </div>
  )
}

export default Page
