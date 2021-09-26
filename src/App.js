import './App.css';
import HeroSection from './components/HeroSection';
import Hero from './components/Hero';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Projects from './components/Projects';
function App() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Hero/>
      <Projects/>
      <Footer/>
      
   </div>
  );
}

export default App;
