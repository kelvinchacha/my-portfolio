import ChatBot from "./components/ChatBot";
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Skills from './components/Skills';
import Contact from './components/Contact';
import PrivacyToast from './components/PrivacyToast';
import BackToTop from './components/BackToTop';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <ChatBot />
      <HeroSlider />
      <About />
      <Services />
      <Projects />
      <TechStack />
      <Skills />
      <Contact />
      <PrivacyToast />
      <BackToTop />
      <Footer />
    </>
  );
}

export default App;