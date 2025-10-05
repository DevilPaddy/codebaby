import React, { useState, useEffect } from 'react';
import { IoSchoolSharp } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; }
  }, [isOpen]);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar glass-card px-4 py-2 md:px-10 md:py-3 border-[1.4px] rounded-xl border-zinc-300
          flex justify-between items-center relative bg-white/70 backdrop-blur-md shadow-sm z-40">
        <div className="brand-icon flex items-center justify-start gap-2">
          <div className='logo h-8 w-8 md:h-10 md:w-10 bg-blue-600 rounded-lg flex items-center justify-center'>
            <IoSchoolSharp size={22} color='white' />
          </div>
          <div className="brand-name text-lg sm:text-xl md:text-2xl font-bold">
            <a href='/' className='text-black'>
              AQUILA <span className='text-blue-600'>IELTS</span>
            </a>
          </div>
        </div>

        {/* desktop links */}
        <div className="hidden md:flex items-center justify-center gap-6 lg:gap-10 font-medium">
          <a href="/">Home</a>
          <a href="/">Courses</a>
          <a href="/">Mock Test</a>
          <a href="https://www.anujbelsare.tech/about">Contact</a>
          <a href="https://www.anujbelsare.tech/about">About Us</a>
        </div>

        {/* desktop CTA */}
        <div className="hidden md:block">
          <a className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700" href="/">Free Trial</a>
        </div>

        {/* mobile toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(true)} className="focus:outline-none z-50" aria-label="Open menu">
            <FiMenu size={25} />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY (sibling of nav) */}
      <div
        className={`fixed inset-0 bg-white md:hidden z-[9999] transform transition-transform duration-300 ease-in-out
                    ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        role="dialog"
        aria-modal="true"
      >
        {/* top-right close */}
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)} className="focus:outline-none" aria-label="Close menu">
            <FiX size={24} />
          </button>
        </div>

        {/* center links */}
        <div className="flex flex-col items-center justify-center h-[calc(100%-64px)] gap-6 text-black text-lg font-medium">
          <a href="/" onClick={handleLinkClick} className="hover:text-blue-700">Home</a>
          <a href="/" onClick={handleLinkClick} className="hover:text-blue-700">Courses</a>
          <a href="/" onClick={handleLinkClick} className="hover:text-blue-700">Mock Test</a>
          <a href="https://www.anujbelsare.tech/about" onClick={handleLinkClick} className="hover:text-blue-700">Contact</a>
          <a href="https://www.anujbelsare.tech/about" onClick={handleLinkClick} className="hover:text-blue-700">About Us</a>

          <a
            href="/"
            onClick={handleLinkClick}
            className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Free Trial
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
