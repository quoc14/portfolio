import { useState } from "react";
import { portfolioData } from "./data/portfolioData";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Achievements from "./sections/Achievements";
import Certifications from "./sections/Certifications";
import Projects from "./sections/Projects";
import Gallery from "./sections/Gallery";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import Lightbox from "./components/Lightbox";

function App() {
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    images: [],
    currentIndex: 0,
  });

  const openLightbox = (images, index = 0) => {
    setLightbox({ isOpen: true, images, currentIndex: index });
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, images: [], currentIndex: 0 });
  };

  return (
    <div className="app">
      <Navbar data={portfolioData} />
      <main>
        <Hero data={portfolioData} />
        <About data={portfolioData} />
        <Experience data={portfolioData} openLightbox={openLightbox} />
        <Achievements data={portfolioData} openLightbox={openLightbox} />
        <Certifications data={portfolioData} openLightbox={openLightbox} />
        <Projects data={portfolioData} openLightbox={openLightbox} />
        <Gallery data={portfolioData} openLightbox={openLightbox} />
        <Contact data={portfolioData} />
      </main>
      <Footer data={portfolioData} />
      {lightbox.isOpen && (
        <Lightbox
          images={lightbox.images}
          currentIndex={lightbox.currentIndex}
          onClose={closeLightbox}
        />
      )}
    </div>
  );
}

export default App;
