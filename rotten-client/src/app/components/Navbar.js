"use client"
import React, { useCallback, useEffect, useState } from 'react'
import NavbarItem from './NavbarItem'
import { BsChevronDown, BsSearch } from 'react-icons/bs';
import MobileMenu from './MobileMenu';

const TOP_OFFSET = 66;

function Navbar() {
  const [showMobileMenu, setshowMobileMenu] = useState(false);
  const [showBackground, setshowBackground] = useState(false);
  const toggleMobileMenu = useCallback(()=>{
    setshowMobileMenu((current) => !current);
  }, []);

  useEffect(()=>{
    const handleScroll = () =>{
      if(window.scrollX >= TOP_OFFSET){
        showBackground(true);
      }else{
        showBackground(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  },[]);

  return (
    <nav className='w-full fixed z-40'>
      <div className={`px-5 md:px-16 py-6 flex flex-row items-center transition duration-500 ${showBackground ? 'bg-zinc-900 bg-opacity-90' : '' }`}>
        <p className='text-1xl md:text-2xl uppercase text-red-500'><strong>ALPHA'S MOVIES</strong></p>
        <div className='flex-row ml-8 gap-7 hidden lg:flex'>
          <NavbarItem item="HOME"/>
          <NavbarItem item="MOVIES"/>
          <NavbarItem item="MY LISTS"/>
        </div>
        <div onClick={toggleMobileMenu} className='lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative'>
          <p className='text-sm text-white'>Browse</p>
          <BsChevronDown className='text-white transition'/>
          <MobileMenu isVisible={showMobileMenu}/>
        </div>
        <div className='flex flex-row ml-auto gap-7 items-center'>
          <div className='text-gray-200 hover:text-gray-300 cursor-pointer'>
            <BsSearch/>
          </div>
          <div className='text-gray-200 hover:text-gray-300 cursor-pointer'>
            Login
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar