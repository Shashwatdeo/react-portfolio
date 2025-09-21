import { BrowserRouter } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, ScrollToTop } from "./components";
import Footer from "./components/Footer";
import Certifications from "./components/Certifications";
import Education from "./components/Education";

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.1
    }
  }
};

const sectionVariants = {
  initial: {
    opacity: 0,
    y: 30
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const App = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div 
          className='relative z-0 bg-primary'
          variants={pageVariants}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className='bg-hero-pattern bg-cover bg-no-repeat bg-center'
            variants={sectionVariants}
          >
            <Navbar />
            <Hero />
          </motion.div>
          
          <motion.div variants={sectionVariants}>
            <About />
          </motion.div>
          
          <motion.div variants={sectionVariants}>
            <Tech />
          </motion.div>
          
          <motion.div variants={sectionVariants}>
            <Works />
          </motion.div>
          
          <motion.div variants={sectionVariants}>
            <Experience />
          </motion.div>
          
          <motion.div variants={sectionVariants}>
            <Certifications />
          </motion.div>
          
          <motion.div variants={sectionVariants}>
            <Education />
          </motion.div>
          
          <motion.div variants={sectionVariants}>
            <Feedbacks />
          </motion.div>
          
          <motion.div className='relative z-0' variants={sectionVariants}>
            <Contact />
            <StarsCanvas />
            <Footer/>
          </motion.div>
          
          <ScrollToTop />
        </motion.div>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
