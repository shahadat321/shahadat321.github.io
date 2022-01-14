import Header from './Components/Header';
import Banner from './Components/Banner';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Experience from './Components/Experience';
import Contact from './Components/Contact';
import { Controller } from "react-scrollmagic";
import './App.scss';

function App() {
  return (
    <div className="app">
      <Controller>
        <Header />
        <Banner />
        <About />
        <Portfolio />
        <Experience />
        <Contact />
      </Controller>
    </div>
  );
}

export default App;
