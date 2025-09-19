import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Shashwat Deo &nbsp;
            <span className='sm:block hidden'> | Portfolio</span>
          </p>
        </Link>

        <ul className='list-none hidden md:flex flex-row gap-10 items-center'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <li>
            <a
              href="/src/assets/Shashwat_Deo_Resume.pdf"
              download="Shashwat_Deo_Resume.pdf"
              className="bg-[#915EFF] hover:bg-[#7c3aed] text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 ease-out transform hover:scale-105 text-[16px]"
            >
              Resume
            </a>
          </li>
        </ul>

        <div className='md:hidden flex flex-1 justify-end items-center'>
          <div 
            className='hamburger-menu cursor-pointer p-2 rounded-lg hover:bg-white/10 transition-all duration-300'
            onClick={() => setToggle(!toggle)}
          >
            <div className='w-6 h-5 flex flex-col justify-between'>
              <span 
                className={`block h-0.5 w-full bg-white transition-all duration-300 ease-out ${
                  toggle ? 'rotate-45 translate-y-2' : ''
                }`}
              ></span>
              <span 
                className={`block h-0.5 w-full bg-white transition-all duration-300 ease-out ${
                  toggle ? 'opacity-0' : ''
                }`}
              ></span>
              <span 
                className={`block h-0.5 w-full bg-white transition-all duration-300 ease-out ${
                  toggle ? '-rotate-45 -translate-y-2' : ''
                }`}
              ></span>
            </div>
          </div>

          <div
            className={`${
              !toggle ? "opacity-0 pointer-events-none translate-y-[-10px]" : "opacity-100 pointer-events-auto translate-y-0"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[180px] z-10 rounded-xl transition-all duration-300 ease-out shadow-2xl border border-white/10`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href="/src/assets/Shashwat_Deo_Resume.pdf"
                  download="Shashwat_Deo_Resume.pdf"
                  className="bg-[#915EFF] hover:bg-[#7c3aed] text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 ease-out text-[14px] flex items-center gap-2"
                  onClick={() => setToggle(!toggle)}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
