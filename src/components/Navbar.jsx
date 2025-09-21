import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

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
    <motion.nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
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

        <motion.ul 
          className='list-none hidden md:flex flex-row gap-10 items-center'
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, staggerChildren: 0.1 }}
        >
          {navLinks.map((nav, index) => (
            <motion.li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.1, color: "#ffffff" }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href={`#${nav.id}`} 
                className="cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  setActive(nav.title);
                  const element = document.getElementById(nav.id);
                  if (element) {
                    element.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                      inline: 'nearest'
                    });
                  }
                }}
              >
                {nav.title}
              </a>
            </motion.li>
          ))}
          <motion.li
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.a
              href="/src/assets/Shashwat_Deo_Resume.pdf"
              download="Shashwat_Deo_Resume.pdf"
              className="bg-[#915EFF] hover:bg-[#7c3aed] text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 ease-out text-[16px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume
            </motion.a>
          </motion.li>
        </motion.ul>

        <div className='md:hidden flex justify-end items-center'>
          <motion.div 
            className='hamburger-menu cursor-pointer p-2 rounded-lg hover:bg-white/10 transition-all duration-300'
            onClick={() => setToggle(!toggle)}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className='w-6 h-5 flex flex-col justify-between'>
              <motion.span 
                className='block h-0.5 w-full bg-white'
                animate={{
                  rotate: toggle ? 45 : 0,
                  y: toggle ? 8 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span 
                className='block h-0.5 w-full bg-white'
                animate={{
                  opacity: toggle ? 0 : 1,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span 
                className='block h-0.5 w-full bg-white'
                animate={{
                  rotate: toggle ? -45 : 0,
                  y: toggle ? -8 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>

          <AnimatePresence>
            {toggle && (
              <motion.div
                className="p-3 black-gradient absolute top-14 right-1 w-[180px] max-w-[calc(100vw-16px)] z-10 rounded-xl shadow-2xl border border-white/10"
                initial={{ opacity: 0, scale: 0.8, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <motion.ul 
                  className='list-none flex justify-end items-start flex-1 flex-col gap-3'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1, staggerChildren: 0.1 }}
                >
                  {navLinks.map((nav, index) => (
                    <motion.li
                      key={nav.id}
                      className={`font-poppins font-medium cursor-pointer text-[16px] ${
                        active === nav.title ? "text-white" : "text-secondary"
                      }`}
                      onClick={() => {
                        setToggle(!toggle);
                        setActive(nav.title);
                        const element = document.getElementById(nav.id);
                        if (element) {
                          element.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                            inline: 'nearest'
                          });
                        }
                      }}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                      whileHover={{ scale: 1.05, color: "#ffffff" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>{nav.title}</span>
                    </motion.li>
                  ))}
                  <motion.li 
                    className="mt-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                  >
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
                  </motion.li>
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
