import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const StarWrapper = (Component, idName) =>
  function HOC() {
    // Enable visual debugging when URL contains ?debugSections
    const isDebug = typeof window !== "undefined" && window.location.search.includes("debugSections");

    return (
      <motion.section
        variants={sectionVariants}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.15 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        style={isDebug ? { outline: "2px dashed rgba(145,94,255,0.6)", outlineOffset: "6px" } : undefined}
        data-section={idName}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            show: { 
              opacity: 1, 
              y: 0,
              transition: {
                duration: 0.6,
                ease: "easeOut"
              }
            }
          }}
        >
          <Component />
        </motion.div>
      </motion.section>
    );
  };

export default StarWrapper;
