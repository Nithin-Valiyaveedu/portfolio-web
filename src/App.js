import './App.css';
import HeroSection from './components/HeroSection';
import Hero from './components/Hero';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Contact from './components/Contact';
function App() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Hero/>
      <Projects/>
      <Contact/>
      <Footer/>
      
   </div>
  );
}

export default App;
