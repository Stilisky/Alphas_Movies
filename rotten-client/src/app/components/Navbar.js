"use client"
import React, { useCallback, useEffect, useState } from 'react'
import NavbarItem from './NavbarItem'
import { BsChevronDown } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';
import { RiAccountPinBoxLine } from 'react-icons/ri';
import MobileMenu from './MobileMenu';
import { Button } from 'flowbite-react';
import { ButtonBase } from 'flowbite-react/lib/esm/components/Button/ButtonBase';

const TOP_OFFSET = 66;

function Navbar() {
  const [showMobileMenu, setshowMobileMenu] = useState(false);
  const [showBackground, setshowBackground] = useState(false);
  const toggleMobileMenu = useCallback(() => {
    setshowMobileMenu((current) => !current);
  }, []);
  const [admin, setAdmin] = useState(false)

  useEffect(() => {
    
    const handleScroll = () => {
      if (window.scrollX >= TOP_OFFSET) {
        setshowBackground(true);
      } else {
        setshowBackground(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <nav className='w-full fixed z-40'>
      <div className={`px-5 md:px-16 py-6 flex flex-row items-center transition duration-500 ${showBackground ? 'bg-zinc-900 bg-opacity-90' : ''}`}>
        <p className='text-1xl md:text-2xl uppercase text-[#1ce783]'><strong>ALPHA'S MOVIES</strong></p>
        <div className='flex-row ml-8 gap-7 hidden lg:flex'>
          <div className='text-white cursor-pointer hover:text-gray-300 transition'>
            <a href='/'>HOME</a>
          </div>
          <div className='text-white cursor-pointer hover:text-gray-300 transition'>
            <a href='/all-movies'>MOVIES</a>
          </div>
          <div className='text-white cursor-pointer hover:text-gray-300 transition'>
            <a href='/favorites'>MY LISTS</a>
          </div>
        </div>
        <div onClick={toggleMobileMenu} className='lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative'>
          <p className='text-sm text-white'>Browse</p>
          <BsChevronDown className='text-white transition h-6 w-6' />
          <MobileMenu isVisible={showMobileMenu} />
        </div>
        <div className='flex flex-row ml-auto gap-7 items-center'>
          <div>
            {localStorage.getItem("token") ? (
              <>
                <div className='flex space-x-3'>
                  <a href='/account'>
                    <RiAccountPinBoxLine className='text-white h-6 w-6' />
                  </a>
                  <a href='/logout'>
                    <FiLogOut className='text-white h-6 w-6' />
                  </a>
                </div>
              </>
            ) : (
              <div className='text-gray-200 hover:text-gray-300 cursor-pointer'>
                <a href='/login'>Login</a>
              </div>
            )}
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar