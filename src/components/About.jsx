import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      whileHover={{ 
        y: -10, 
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
      className="w-full max-w-[280px] mx-auto"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="w-full"
      >
        <motion.div 
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
          whileHover={{ 
            boxShadow: "0 20px 40px rgba(145, 94, 255, 0.3)",
            transition: { duration: 0.3 }
          }}
        >
          <div className="bg-tertiary rounded-[20px] py-6 px-4 sm:px-8 min-h-[250px] sm:min-h-[280px] flex justify-evenly items-center flex-col">
            <motion.img 
              src={icon} 
              alt={title} 
              className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
              whileHover={{ 
                rotate: 360,
                transition: { duration: 0.6 }
              }}
            />
            <h3 className="text-white text-[16px] sm:text-[20px] font-bold text-center leading-tight">{title}</h3>
          </div>
        </motion.div>
      </Tilt>
    </motion.div>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[14px] sm:text-[16px] lg:text-[17px] max-w-3xl leading-[24px] sm:leading-[28px] lg:leading-[30px]"
      >
        I'm a skilled Full Stack Developer with experience in JavaScript, and expertise in frameworks 
        like React, Node.js, and modern web technologies. I'm passionate about solving complex problems through clean, 
        efficient code and building intuitive user experiences. Currently pursuing B.Tech in Computer Science at LPU, 
        I love contributing to open-source projects and exploring new technologies. Let's work together to bring your ideas to life!
      </motion.p>

      <motion.div
        className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.2
            }
          }
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
      >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
