import React, { useState } from 'react';
import Image from 'next/image';
import wallpaper from '../../../public/Images/desktop-wallpaper-spiderman-hollywood-movie-thumbnail.jpg';

const MoviesCard = ({ favorite, movieList }) => {

    const removeFavorite = async () => {
        try {
            if (!localStorage.getItem("token")) {
              window.location.href = "/login";
              return;
            }
        
            const url = "http://127.0.0.1:5000/api/map/unfavorite/" + favorite._id; 
            const response = await fetch(url, {
              headers: { "authorization": "Bearer " + localStorage.getItem("token")}
            });
        
            if (response.ok) {
              movieList()
            } else {
              console.error("Erreur in unFavorite.");
            }
          } catch (error) {
            console.error('Erreur : ' + error);
          }
    }
    return (
        <div className='card my-5 flex-shrink-0'>
            <div className='imgbox'>
                <Image src={favorite.image} width={300} height={300} alt='spider' className='image' />
            </div>
            <div className='info'>
                <h1 className='text-2xl text-white md:text-3xl'>
                    <strong>{favorite.title}</strong>
                </h1>
                <div className='flex space-x-2'>
                    <button
                        type="button"
                        className={`inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-black bg-[#b3b3b3] rounded-lg w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
                    >
                        {favorite.director}
                    </button>
                    <button
                        type="button"
                        className={`inline-flex space-x-2 px-5 py-2.5 text-sm font-medium text-center text-black bg-[#a9cc9c] rounded-lg w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 items-center justify-center dark:focus:ring-blue-800`}
                    >
                        <span>{favorite.likes.length}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                        </svg>
                    </button>
                    <button
                        onClick={removeFavorite}
                        type="button"
                        className={`inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-black bg-[#f0e3cc] rounded-lg w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MoviesCard;
