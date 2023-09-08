"use client";
import React, { useCallback, useEffect, useState } from "react";
import NavbarItem from "./NavbarItem";
import { BsChevronDown, BsSearch } from "react-icons/bs";
import MobileMenu from "./MobileMenu";
import { Button } from "flowbite-react";
import { ButtonBase } from "flowbite-react/lib/esm/components/Button/ButtonBase";

const TOP_OFFSET = 66;

function Navbar() {
  const [showMobileMenu, setshowMobileMenu] = useState(false);
  const [showBackground, setshowBackground] = useState(false);
  const toggleMobileMenu = useCallback(() => {
    setshowMobileMenu((current) => !current);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollX >= TOP_OFFSET) {
        setshowBackground(true);
      } else {
        setshowBackground(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="w-full fixed z-40">
      <div
        className={`px-5 md:px-16 py-6 flex flex-row items-center transition duration-500 ${
          showBackground ? "bg-zinc-900 bg-opacity-90" : ""
        }`}
      >
        <p className="text-1xl md:text-2xl uppercase text-[#1ce783]">
          <strong>ALPHA'S MOVIES</strong>
        </p>
        <div className="flex-row ml-8 gap-7 hidden lg:flex">
          <div className="text-white cursor-pointer hover:text-gray-300 transition">
            <a href="/">HOME</a>
          </div>
          <div className="text-white cursor-pointer hover:text-gray-300 transition">
            <a href="/all-movies">MOVIES</a>
          </div>
          <div className="text-white cursor-pointer hover:text-gray-300 transition">
            <a href="/favorites">MY LISTS</a>
          </div>
        </div>
        <div
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
        >
          <p className="text-sm text-white">Browse</p>
          <BsChevronDown className="text-white transition" />
          <MobileMenu isVisible={showMobileMenu} />
        </div>
        <div className="flex flex-row ml-auto gap-7 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer">
            <BsSearch />
          </div>
          <div>
            {localStorage.getItem("token") ? (
              <>
                <button
                  id="dropdownUserAvatarButton"
                  data-dropdown-toggle="dropdownAvatar"
                  class="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  type="button"
                >
                  <span class="sr-only">Open user menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6 bg-white rounded-full"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
                <div
                  id="dropdownAvatar"
                  class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    class="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownUserAvatarButton"
                  >
                    <li>
                      <a
                        href="/account_settings"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Settings
                      </a>
                    </li>
                  </ul>
                  <div class="py-2">
                    <a
                      href="/logout"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Log out
                    </a>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-gray-200 hover:text-gray-300 cursor-pointer">
                <a href="/login">Login</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
