import "aos/dist/aos.css"
import Hero from "./components/Hero"
import Header from "./components/Header"
import React, { useEffect, useState } from 'react';
import NavMobile from "./components/NavMobile";
import Aos from 'aos';
import About from "./components/About";
import Divisions from "./components/Divisions";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [navMobile, setNavMobile] = useState(false);

  useEffect(() => {
    Aos.init({
      duration: 1800,
      delay: 400,
    });
  })
  
  return <div className="overflow-hidden">
    <Header setNavMobile={setNavMobile}/>
    <Hero />
    <div className={`${navMobile ? 'right-0' : '-right-full'} fixed z-10 top-0 h-full transition-all duration-200`}>
      <NavMobile setNavMobile={setNavMobile}/>
    </div>
    <About/>
    <Divisions/>
    <Contact/>
    <Footer/>
  </div>
}

export default App
