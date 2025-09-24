import { BrowserRouter } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, ScrollToTop } from "./components";
import Footer from "./components/Footer";
import Certifications from "./components/Certifications";
import Education from "./components/Education";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        <About />
        <Tech />
        <Works />
        <Experience />
        <Certifications />
        <Education />
        <Feedbacks />

        <div className="relative">
          <Contact />
          <Footer />
        </div>

        <ScrollToTop />
      </div>
    </BrowserRouter>
  );
};

export default App;
