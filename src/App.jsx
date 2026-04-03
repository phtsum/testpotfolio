import './styles/main.scss';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';

import Highlights from './components/Highlights';

import Contact from './components/Contact';
import Brands from "./components/Brands";
import Clubs from "./components/Clubs";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Clubs />
      <Highlights />
     
      <Brands />
      <Contact />
    </>
  );
}

export default App;
