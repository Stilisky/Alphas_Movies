import React, { useEffect, useState } from 'react';

const Mymodal = ({ isVisible, onClose, movieId }) => {
  const [movieData, setMovieData] = useState(null);
  const [comment, setComment] = useState('');

  useEffect(() => {
    if (isVisible && movieId) {
      fetchMovieById();
    }
  }, [isVisible, movieId]);

  const fetchMovieById = async () => {
    try {
      const url = `http://127.0.0.1:5000/movies/${movieId}`;
      const response = await fetch(url);
      const data = await response.json();
      setMovieData(data);
    } catch (error) {
      console.error('error: ' + error);
    }
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmitComment = async () => {
    try {
      const url = `http://127.0.0.1:5000/api/map/movie/${movieId}/comment`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ description: comment }),
      });
      if (response.ok) {
        const url = `http://127.0.0.1:5000/api/map/comment/64f990442eeb0982c4247c31/movie/64f88dbcb17e2a296c8c4371`;
      }
      setComment('')
      fetchMovieById()
    } catch (error) {
      console.error('error: ' + error);
    }
  };


  if (!isVisible) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50'>
      <div className="relative z-50 w-full max-w-2xl max-h-full">
        <div className="relative bg-black rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-white dark:text-white">
              {movieData && movieData.title}
            </h3>
            <button type="button" onClick={() => onClose()} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-6 space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {movieData && movieData.description}
            </p>
          </div>
          <label htmlFor="chat" className="sr-only">Your comment</label>
          <div className="flex items-center px-3 py-2 rounded-lg space-x-2">
            <button id='addTofavorite' type="button" className="inline-flex justify-center p-2 text-gray-500 border rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
              </svg>
              <span className="sr-only">Upload image</span>
            </button>
            <button id='like' type="button" className="p-2 text-gray-500 border rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
              <span className="sr-only">Add emoji</span>
            </button>
            <textarea id="chat" rows="1" onChange={handleCommentChange}
              value={comment}
              className="block mx-4 p-2.5 w-full bg-black text-white text-sm rounded-lg border focus:outline-none" placeholder="Your message..."></textarea>
            <button
              onClick={handleSubmitComment}
              className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
              <svg className="w-5 h-5 rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
              </svg>
              <span className="sr-only">Send message</span>
            </button>
          </div>
          <article className="p-6 text-base bg-black rounded-lg dark:bg-gray-900">
            {movieData && movieData.comments.map((comment) => (
              <div key={comment._id}>
                <footer className="flex space-x-2 items-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                  <h1>Oloni</h1>
                </footer>
                <p className="text-gray-400 dark:text-gray-400">{comment.description}</p>
                <hr className='my-3 bg-gray-500' />
              </div>
            ))}
          </article>
        </div>
      </div>
    </div>
  );
}

export default Mymodal;