import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [
    "Full Stack Development",
    "Frontend Development", 
    "Backend Development",
    "Web Designing"
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex];
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  
  return (
    <section className={`relative w-full h-screen mx-auto` }>
      <motion.div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5` }
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", staggerChildren: 0.3 }}
      >
        <motion.div 
          className='flex flex-col justify-center items-center mt-28 md:mt-5 lg:5'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className='w-5 h-5 rounded-full bg-[#915EFF]' 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 200 }}
          />
          <motion.div 
            className='w-1 sm:h-80 h-40 violet-gradient' 
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            transition={{ duration: 1, delay: 0.8 }}
          />
        </motion.div>

        <motion.div 
          className="mt-28 md:mt-5 lg:5"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.h1 
            className={`${styles.heroHeadText} text-white` }
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Hi, I'm <motion.span 
              className='text-[#915EFF]'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              Shashwat Deo
            </motion.span>
          </motion.h1>
          <motion.p 
            className={`${styles.heroSubText} mt-2 text-white-100` }
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            I'm into <span className='text-[#915EFF]'>{currentText}</span>
            <span className='animate-pulse'>|</span> <br/>
            and creating amazing web experiences
          </motion.p>
        </motion.div>
      </motion.div>

      <ComputersCanvas />

      {/* Floating Avatar */}
      <motion.div
        className='fixed z-50 bottom-4 right-4 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8'
        initial={{
          opacity: 0,
          scale: 0.8,
          left: '50%',
          top: '50%',
          x: '-50%',
          y: '-50%',
          rotate: 180
        }}
        animate={{
          opacity: 1,
          scale: 1,
          left: 'auto',
          top: 'auto',
          right: '1rem',
          bottom: '1rem',
          x: 0,
          y: 0,
          rotate: 0
        }}
        transition={{
          duration: 1.5,
          delay: 1.5,
          type: 'spring',
          stiffness: 120,
          damping: 20,
          scale: { type: 'spring', stiffness: 200 },
          rotate: { duration: 0.8, delay: 1.5 }
        }}
        whileHover={{
          scale: 1.1,
          rotate: 3,
          transition: { duration: 0.2, type: 'spring' }
        }}
        style={{ maxWidth: 'calc(100vw - 2rem)', maxHeight: 'calc(100vh - 2rem)' }}
      >
        <motion.div
          className='w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-2 border-[#915EFF] shadow-lg cursor-pointer relative'
          whileHover={{
            boxShadow: '0 10px 25px rgba(145, 94, 255, 0.4)',
            borderColor: '#a855f7'
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Glow effect */}
          <motion.div
            className='absolute inset-0 rounded-full bg-gradient-to-r from-[#915EFF]/15 to-[#a855f7]/15'
            animate={{
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
          <img
            src='/profile.jpg'
            alt='Shashwat Deo'
            className='w-full h-full object-cover relative z-10'
          />
        </motion.div>
      </motion.div>

      

      <motion.div 
        className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        <a href='#about'>
          <motion.div 
            className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
