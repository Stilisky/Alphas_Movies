import React from 'react';
import Image from 'next/image';
import { BsChevronDown, BsSearch } from 'react-icons/bs';
import billboard from '../../../public/Images/felipe-bustillo-4VDRCoNuvE0-unsplash.jpg';

function Billboard() {
  return (
    <div
      className='relative h-[650px] bg-cover bg-center'
      style={{
        backgroundImage: `url(${billboard.src})`,
      }}
    >
      <div className='w-full h-full absolute bg-opacity-50 bg-[#02020233] bg-fixed py-24'>
        <div className='text-white container mx-auto py-40 px-5 md:px-0 space-y-2 md:space-y-0 flex flex-col md:flex-row items-center justify-evenly'>
          <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full md:w-1/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
          <input type="date" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full md:w-1/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          <input type="date" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full md:w-1/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full md:w-1/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
          <button type="submit" class="text-white w-full md:w-1/5 bg-red-500 font-medium text-sm px-5 py-2.5 text-center flex items-center justify-center space-x-3">
            <BsSearch className='ml-3' />
            <p>Submit</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Billboard;