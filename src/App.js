import logo from './logo.svg';
import './App.css';
import {NavBar} from "./components/NavBar";
import {Banner} from './components/Banner'
import {TimeLine} from "./components/TimeLine";
import {Skills} from "./components/Skills";
import {Projects} from "./components/Projects";
import {Contact} from "./components/Contact";
import {FlipCard} from "./components/Flipcard";



import 'bootstrap/dist/css/bootstrap.min.css';
import Flipcard from './components/Flipcard';

function App() {
  return (
    <div className="App">
      <NavBar/> 
      <Banner/>
      <br></br>
      <TimeLine/>
      <br></br>
      <Skills/>
      <Flipcard/>
      <Projects/>
      
      <Contact/>
      
    </div>
  );
}

export default App;
