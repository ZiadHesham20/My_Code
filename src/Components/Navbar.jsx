import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (hash) => {
    
    return location.hash === hash ? 'border-[var(--secondryColor)]' : 'border-[var(--secondryColorOpactiyNone)]';
  };

  return (
    <nav className="bg-[var(--mainColor)]  w-full  m-auto ">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Profile dropdown */}
            <div className="relative ml-3">
              <Link to={'/'}>
                <div className="flex items-center">
                  <img
                    className="h-8 w-8 rounded-full object-contain"
                    src="/image.png"
                    alt="My Code Logo"
                  />
                  <p className="text-white ms-2">My <code>{'<CODE/>'}</code></p>
                </div>
              </Link>

              {/* Dropdown menu */}
              
            </div>
          </div>
          {/* Navigation links */}
          <div className="hidden lg:ml-6 lg:flex items-center h-full space-x-4">
            <a
              href="#home"
              className={`rounded-sm px-3  h-full flex items-center  py-2 text-sm font-medium text-gray-300 border-b-4 ${isActive('#home')} hover:border-[var(--secondryColor)] transition-all ease-in-out tabLink`}
              aria-current="page"
            >
              Home
            </a>
            <a
              href="#aboutUs"
              className={`rounded-sm px-3  h-full flex items-center  py-2 text-sm font-medium text-gray-300 border-b-4 ${isActive('#aboutUs')}   hover:border-[var(--secondryColor)] transition-all ease-in-out tabLink`}
              id='aboutUsTab'
            >
              About Us
            </a>
            <a
              href="#services"
              className={`rounded-sm px-3  h-full flex items-center  py-2 text-sm font-medium text-gray-300 border-b-4 ${isActive('#services')} hover:border-[var(--secondryColor)] transition-all ease-in-out tabLink`}
            id='servicesTab'
            >
              Services
            </a>
            <a
              href="#portfolio"
              className={`rounded-sm px-3  h-full flex items-center  py-2 text-sm font-medium text-gray-300 border-b-4 ${isActive('#portfolio')} hover:border-[var(--secondryColor)] transition-all ease-in-out tabLink`}
            >
              Portfolio
            </a>
            <a
              href="#faq"
              className={`rounded-sm px-3  h-full flex items-center  py-2 text-sm font-medium text-gray-300 border-b-4 ${isActive('#portfolio')} hover:border-[var(--secondryColor)] transition-all ease-in-out tabLink`}
            >
              FAQ
            </a>
          </div>
          {/* contact button */}
          <div className=" hidden lg:flex items-center justify-center sm:items-stretch sm:justify-start">
            <div>
              <a href='#contactUs' className="active:scale-95 transition-all ease-in-out text-white bg-[var(--secondryColor)] w-[174.11px] h-[43.31px] rounded-[8.65px] hover:bg-[var(--secondryColorDark)] text-center flex justify-center items-center">
                Contact Us
              </a>
            </div>
          </div>
          {/* burger menu*/}
          <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
            {/* Mobile menu button*/}
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
              onClick={toggleMobileMenu}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`block h-6 w-6 ${isMobileMenuOpen ? 'hidden' : 'block'}`}
                viewBox="0 0 36 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  d="M2 2H34"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.1643 12H33.9998"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`h-6 w-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <a
            href="#"
            className={`block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white ${isActive('#')}`}
            aria-current="page"
          >
            Home
          </a>
          <a
            href="#aboutUs"
            className={`block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white ${isActive('#aboutUs')}`}
          >
            About Us
          </a>
          <a
            href="#services"
            className={`block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white ${isActive('#services')}`}
          >
            Services
          </a>
          <a
            href="#portfolio"
            className={`block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white ${isActive('#portfolio')}`}
          >
            Portfolio
          </a>
          <a
            href="#faq"
            className={`block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white ${isActive('#portfolio')}`}
          >
            FAQ
          </a>
          <a href='#contactUs' className="active:scale-95 transition-all ease-in-out text-white bg-[var(--secondryColor)] w-full h-[43.31px] rounded-[8.65px] hover:bg-[var(--secondryColorDark)] text-center flex justify-center items-center">
                Contact Us
              </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
