import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

gsap.registerPlugin(ScrollTrigger);

const useGsap = (elementRef, animation, delay = 0) => {
  useEffect(() => {
    if (elementRef.current) {
      gsap.fromTo(
        elementRef.current,
        animation.from,
        {
          ...animation.to,
          delay,
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, [elementRef, animation, delay]);
};

const EducationCard = ({ education, index }) => {
  const cardRef = useRef(null);
  useGsap(cardRef, {
    from: { opacity: 0, x: index % 2 === 0 ? -100 : 100, scale: 0.8 },
    to: { opacity: 1, x: 0, scale: 1, duration: 1, ease: "power3.out" },
  }, index * 0.3);

  return (
    <motion.div
      ref={cardRef}
      className={`relative flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} mb-6 sm:mb-8`}
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      {/* Timeline line - hidden on mobile */}
      <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-secondary"></div>
      
      {/* Timeline dot - hidden on mobile */}
      <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-tertiary z-10"></div>
      
      {/* Content card */}
      <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:mr-auto lg:pr-8' : 'lg:ml-auto lg:pl-8'}`}>
        <div className="bg-tertiary p-4 sm:p-5 lg:p-6 rounded-2xl shadow-card border border-primary/20">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
            <span className="text-white text-[12px] sm:text-[14px] font-medium">{education.period}</span>
            <span className={`text-[11px] sm:text-[12px] px-2 sm:px-3 py-1 rounded-full w-fit ${
              education.status === 'Ongoing' 
                ? 'bg-green-500/20 text-green-400' 
                : 'bg-blue-500/20 text-blue-400'
            }`}>
              {education.status}
            </span>
          </div>
          
          <h3 className="text-white text-[16px] sm:text-[18px] lg:text-[20px] font-bold mb-2 leading-tight">{education.degree}</h3>
          <p className="text-secondary text-[14px] sm:text-[15px] lg:text-[16px] font-medium mb-1">{education.institution}</p>
          <p className="text-secondary text-[12px] sm:text-[13px] lg:text-[14px]">{education.location}</p>
          
          {education.description && (
            <p className="text-secondary text-[12px] sm:text-[13px] lg:text-[14px] mt-3 leading-[18px] sm:leading-[20px]">{education.description}</p>
          )}
          
          {education.grade && (
            <div className="mt-3">
              <span className="text-white text-[12px] sm:text-[13px] lg:text-[14px] font-medium">Grade: {education.grade}</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Education = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  // Heading Animation
  useGsap(headingRef, {
    from: { opacity: 0, x: -50 },
    to: { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
  });

  // Paragraph Animation
  useGsap(paragraphRef, {
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
  }, 0.3);

  const educationData = [
    {
      degree: "B.Tech. Computer Science",
      institution: "Lovely Professional University",
      location: "Punjab, India",
      period: "2022 - 2026",
      status: "Ongoing",
      description: "Currently in 3rd year, focusing on software engineering, data structures, algorithms, and modern web technologies.",
      grade: "CGPA: 7.65"
    },
    {
      degree: "Intermediate (12th Grade)",
      institution: "Lucknow Public School",
      location: "Lucknow, Uttar Pradesh",
      period: "2020 - 2021",
      status: "Completed",
      description: "Completed with focus on Science stream including Mathematics, Physics, Chemistry, and Computer Science.",
      grade: "Percentage: 91%"
    },
    {
      degree: "High School (10th Grade)",
      institution: "Lucknow Public School",
      location: "Lucknow, Uttar Pradesh",
      period: "2018 - 2019",
      status: "Completed",
      description: "Completed with excellent academic performance and active participation in extracurricular activities.",
      grade: "Percentage: 90%"
    }
  ];

  return (
    <>
      <div ref={headingRef}>
        <p className={styles.sectionSubText}>Academic Journey</p>
        <h2 className={styles.sectionHeadText}>Education.</h2>
      </div>

      <p ref={paragraphRef} className="mt-4 text-secondary text-[14px] sm:text-[16px] lg:text-[17px] max-w-3xl leading-[24px] sm:leading-[28px] lg:leading-[30px]">
        My educational journey has been focused on building a strong foundation in computer science 
        and technology. Here's a timeline of my academic achievements and ongoing learning.
      </p>

      <div className="mt-12 sm:mt-16 lg:mt-20 relative">
        <div className="max-w-4xl mx-auto">
          {educationData.map((education, index) => (
            <EducationCard key={education.degree} education={education} index={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
