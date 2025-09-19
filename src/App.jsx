import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, ScrollToTop } from "./components";
import Footer from "./components/Footer";
import Certifications from "./components/Certifications";
import Education from "./components/Education";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
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
        <div className='relative z-0'>
          <Contact />

          <StarsCanvas />
          <Footer/>
        </div>
        
        <ScrollToTop />
      </div>
    </BrowserRouter>
  );
}

export default App;
