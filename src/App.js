import Header from './Components/Header/Header.jsx';
import Banner from './Components/Hero/Banner.jsx';
import About from './Components/About/About.jsx';
import Portfolio from './Components/Portfolio/Portfolio.jsx';
import Experience from './Components/Experience/Experience.jsx';
import Section from './Components/Section/Section.jsx';
import Contact from './Components/Contact/Contact.jsx'


import './App.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <About />
      <Portfolio />
      <Experience />

      {/* <Section /> */}

      <Contact />
    </div>
  );
}

export default App;
