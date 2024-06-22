import React, { useState } from 'react';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to toggle user menu
  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <nav className="bg-[var(--mainColor)]  w-11/12 md:w-[633px] lg:w-[1311px] m-auto rounded-[14.42px]">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Profile dropdown */}
            <div className="relative ml-3">
              <div className="flex items-center">
                <button
                  type="button"
                  className={`relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 ${
                    isUserMenuOpen ? 'bg-gray-200' : ''
                  }`}
                  id="user-menu-button"
                  aria-expanded={isUserMenuOpen ? 'true' : 'false'}
                  onClick={toggleUserMenu}
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </button>
                <p className="text-white ms-2">Name</p>
              </div>

              {/* Dropdown menu */}
              <div
                className={`absolute left-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
                  isUserMenuOpen ? 'block' : 'hidden'
                }`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabIndex="-1"
              >
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-0"
                >
                  Your Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-1"
                >
                  Settings
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-2"
                >
                  Sign out
                </a>
              </div>
            </div>
          </div>
          {/* Navigation links */}
          <div className="hidden lg:ml-6 lg:flex items-center h-full space-x-4">
            <a
              href="#"
              className="rounded-sm px-3  h-full flex items-center  py-2 text-sm font-medium text-gray-300 border-b-4  border-[var(--secondryColor)] transition-all ease-in-out"
              aria-current="page"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="rounded-sm px-3  h-full flex items-center  py-2 text-sm font-medium text-gray-300 border-b-4  border-[var(--secondryColorOpactiyNone)] hover:border-[var(--secondryColor)] transition-all ease-in-out"
            >
              Team
            </a>
            <a
              href="#"
              className="rounded-sm px-3  h-full flex items-center  py-2 text-sm font-medium text-gray-300 border-b-4  border-[var(--secondryColorOpactiyNone)] hover:border-[var(--secondryColor)] transition-all ease-in-out"
            >
              Projects
            </a>
            <a
              href="#"
              className="rounded-sm px-3  h-full flex items-center  py-2 text-sm font-medium text-gray-300 border-b-4  border-[var(--secondryColorOpactiyNone)] hover:border-[var(--secondryColor)] transition-all ease-in-out"
            >
              Calendar
            </a>
          </div>
          {/* contact button */}
          <div className=" hidden lg:flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <button className="active:scale-95 transition-all ease-in-out text-white bg-[var(--secondryColor)] w-[174.11px] h-[43.31px] rounded-[8.65px] hover:bg-[var(--secondryColorDark)] ">
                Contact Me
              </button>
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
                className={`block h-6 w-6 ${
                  isMobileMenuOpen ? 'hidden' : 'block'
                }`}
                viewBox="0 0 36 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  d="M2 2H34"
                  stroke="white"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.1643 12H33.9998"
                  stroke="white"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
      <div
        className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pb-3 pt-2">
          <a
            href="#"
            className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
            aria-current="page"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Team
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Projects
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Calendar
          </a>
          <button className="active:scale-95 transition-all ease-in-out text-white bg-[var(--secondryColor)] w-full h-[43.31px] rounded-[8.65px]">
            Contact Me
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
