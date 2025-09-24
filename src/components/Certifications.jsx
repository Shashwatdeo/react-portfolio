import React, { useRef, useEffect } from "react";
import { Tilt } from "react-tilt";
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

const CertificationCard = ({ certification, index }) => {
  const cardRef = useRef(null);
  useGsap(cardRef, {
    from: { opacity: 0, y: 100, scale: 0.8 },
    to: { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" },
  }, index * 0.2);

  return (
    <Tilt className="w-full max-w-[380px] mx-auto">
      <div ref={cardRef} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div className="bg-tertiary rounded-[20px] py-4 sm:py-5 px-4 sm:px-6 lg:px-8 min-h-[350px] sm:min-h-[400px] flex flex-col justify-between">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4 gap-2">
              <h3 className="text-white text-[16px] sm:text-[18px] lg:text-[20px] font-bold leading-tight">{certification.title}</h3>
              <div className="text-[11px] sm:text-[12px] text-secondary">{certification.date}</div>
            </div>
            
            <div className="mb-3">
              <span className="text-[12px] sm:text-[14px] text-secondary">{certification.issuer}</span>
            </div>
            
            <p className="text-secondary text-[12px] sm:text-[13px] lg:text-[14px] leading-[20px] sm:leading-[22px] lg:leading-[24px] mb-3 sm:mb-4">
              {certification.description}
            </p>
            
            <div className="flex flex-wrap gap-3 mb-4">
              {certification.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="text-[13px] bg-primary/30 text-white font-medium px-3 py-1.5 rounded-full whitespace-nowrap border border-primary/40 shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex gap-3">
            {certification.verifyLink && (
              <a
                href={certification.verifyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#915EFF] hover:bg-[#7a3fe6] text-white text-[14px] font-medium py-2 px-4 rounded-lg text-center transition-all duration-300 cursor-pointer shadow-md"
              >
                Verify
              </a>
            )}
            {certification.viewLink && (
              <a
                href={certification.viewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-white/10 hover:bg-white/20 text-white text-[14px] font-medium py-2 px-4 rounded-lg text-center transition-all duration-300 cursor-pointer shadow-sm"
              >
                View
              </a>
            )}
          </div>
        </div>
      </div>
    </Tilt>
  );
};

const Certifications = () => {
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

  const certifications = [
    {
      title: "IBM DevOps and Software Engineering",
      issuer: "Coursera",
      date: "Nov 2024",
      description: "Professional certification covering CI/CD pipelines, containerization with Docker/Kubernetes, and agile methodologies. Earned by completing 6-course specialization with honors.",
      skills: ["DevOps", "CI/CD", "Docker", "Kubernetes", "Agile"],
      verifyLink: "https://www.coursera.org/account/accomplishments/professional-cert/DTDABRMW0WR2",
      viewLink: null
    },
    {
      title: "Cloud Computing Fundamentals",
      issuer: "NPTEL",
      date: "Nov 2024",
      description: "12-week course covering cloud architecture, virtualization, and deployment models. Hands-on experience with AWS services and distributed systems.",
      skills: ["AWS", "Virtualization", "Distributed Systems"],
      verifyLink: "https://drive.google.com/file/d/1gmxv2ujOyA5_yTU6RdV3CTaKPLF3deiZ/view?usp=sharing",
      viewLink: null
    },
    {
      title: "Server-Side JavaScript with Node.js",
      issuer: "Coursera",
      date: "Oct 2023",
      description: "Mastered Node.js runtime environment, Express framework, and REST API development. Built scalable server applications with MongoDB integration.",
      skills: ["Node.js", "Express", "REST APIs", "MongoDB"],
      verifyLink: "https://www.coursera.org/account/accomplishments/certificate/PM7CRUTKGGYU",
      viewLink: null
    },
    {
      title: "Generative AI with Large Language Models",
      issuer: "DeepLearning.AI",
      date: "Mar 2024",
      description: "Specialized training in transformer architectures, prompt engineering, and deploying LLM applications. Covered fine-tuning techniques and ethical considerations.",
      skills: ["LLMs", "Transformers", "Prompt Engineering"],
      verifyLink: "https://www.coursera.org/account/accomplishments/certificate/4CW3VEZMF7YL",
      viewLink: null
    },
    {
      title: "Build Web Applications in PHP",
      issuer: "Coursera",
      date: "Oct 2024",
      description: "Learned to develop dynamic web applications using PHP. Covered topics such as server-side scripting, database interaction, and form handling.",
      skills: ["PHP", "Web Development", "MySQL"],
      verifyLink: "https://www.coursera.org/account/accomplishments/verify/AEGXAAH7OILC",
      viewLink: null
    },
    {
      title: "Prompt Engineering For ChatGPT",
      issuer: "Vanderbilt University",
      date: "Apr 2024",
      description: "Acquired expertise in crafting effective prompts for ChatGPT to generate desired outputs. Explored techniques for guiding the model and improving response quality.",
      skills: ["ChatGPT", "Prompting", "Natural Language Processing"],
      verifyLink: "https://www.coursera.org/account/accomplishments/certificate/4A9F3C426UUC",
      viewLink: null
    }
  ];

  return (
    <>
      <div ref={headingRef}>
        <p className={styles.sectionSubText}>Achievements</p>
        <h2 className={styles.sectionHeadText}>Certifications & Courses.</h2>
      </div>

      <p ref={paragraphRef} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        Continuous learning is at the heart of my professional journey. Here are some of the certifications 
        and courses I've completed to stay updated with the latest technologies and best practices.
      </p>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10">
        {certifications.map((certification, index) => (
          <CertificationCard key={certification.title} certification={certification} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");
