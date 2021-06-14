import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Particles from 'react-particles-js';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

// FONTAWESOME IMPORTS
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas);

function App() {
  return (
    <>
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 6,
                color: '#f9ab00',
              },
            },
          },
        }}
      />
      <Navbar />
      <Header />
      <AboutMe />
      <Experience />
      <Projects />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
