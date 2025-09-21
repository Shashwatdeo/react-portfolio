import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-4 sm:p-5 rounded-2xl w-full max-w-[360px] mx-auto"
      >
        <div className="relative w-full h-[200px] sm:h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
            onError={(e) => {
              e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9IjIzMCIgdmlld0JveD0iMCAwIDM2MCAyMzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzNjAiIGhlaWdodD0iMjMwIiBmaWxsPSIjMzMzIi8+CjxyZWN0IHg9IjIwIiB5PSIyMCIgd2lkdGg9IjMyMCIgaGVpZ2h0PSIxOTAiIGZpbGw9IiM0NDQiLz4KPHN2ZyB4PSIxNjAiIHk9IjEwNSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgNDAgNDAiIGZpbGw9Im5vbmUiPgo8Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIyMCIgZmlsbD0iIzY2NiIvPgo8Y2lyY2xlIGN4PSIyMCIgY3k9IjE2IiByPSI2IiBmaWxsPSIjOTk5Ii8+CjxwYXRoIGQ9Ik04IDMyQzggMjYgMTEgMjIgMTYgMjJIMjRDMjkgMjIgMzIgMjYgMzIgMzJWMzRIOFYzMloiIGZpbGw9IiM5OTkiLz4KPC9zdmc+Cjx0ZXh0IHg9IjE4MCIgeT0iMTYwIiBmaWxsPSIjOTk5IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkltYWdlIG5vdCBmb3VuZDwvdGV4dD4KPC9zdmc+';
              e.target.alt = 'Project Image Not Found';
            }}
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div className="flex gap-2">
              {live_demo_link && (
                <div
                  onClick={() => window.open(live_demo_link, "_blank")}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                  title="Live Demo"
                >
                  <svg
                    className="w-1/2 h-1/2 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
              )}
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                title="Source Code"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 sm:mt-5">
          <h3 className="text-white font-bold text-[20px] sm:text-[24px] leading-tight">{name}</h3>
          <p className="mt-2 text-secondary text-[13px] sm:text-[14px] leading-relaxed">{description}</p>
        </div>

        <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[12px] sm:text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <motion.div 
        className="w-full flex"
        variants={fadeIn("", "", 0.1, 1)}
      >
        <motion.p
          className="mt-3 text-secondary text-[15px] sm:text-[17px] max-w-3xl leading-[28px] sm:leading-[30px]"
          variants={fadeIn("", "", 0.1, 1)}
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </motion.div>

      <motion.div 
        className="mt-16 sm:mt-20 flex flex-wrap gap-6 sm:gap-7 justify-center"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.3
            }
          }
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Works, "work");
