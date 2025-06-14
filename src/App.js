import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import TimeLine from './components/TimeLine';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import CarouselProjects from './components/CarouselProjects';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Banner />
      <TimeLine />
      <Skills />
      <CarouselProjects />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;