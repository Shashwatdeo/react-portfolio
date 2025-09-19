import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Tech = () => {
  return (
    <motion.div 
      className="flex flex-row flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
          }
        }
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      {technologies.map((technology, index) => (
        <motion.div 
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28" 
          key={technology.name}
          variants={{
            hidden: { opacity: 0, y: 50, scale: 0.5 },
            show: { 
              opacity: 1, 
              y: 0, 
              scale: 1,
              transition: {
                duration: 0.6,
                ease: "easeOut"
              }
            }
          }}
          whileHover={{ 
            scale: 1.2, 
            rotate: 360,
            transition: { duration: 0.6 }
          }}
        >
          <motion.div
            variants={iconVariants(2.5 + index * 0.5)}
            initial="initial"
            animate="animate"
            className="w-full h-full"
          >
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-full h-full object-contain"
              title={technology.name}
            />
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SectionWrapper(Tech, "skills");
