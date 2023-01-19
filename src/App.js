import GlobalStyle from './globalStyle';
import * as React from "react";
import './App.css';
//import { Theme } from 'tsparticles/dist/Options/Classes/Theme/Theme';
import { Route,Routes} from 'react-router-dom';
import Main from './components/Main';
import About from "./components/AboutPage";
import Skill from "./components/Skills";
import Work from "./components/Work";
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  return (
  <>
      <GlobalStyle/>
      <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/work" element={<Work/>} />
          <Route path="/skill" element={<Skill/>} />
          <Route path="/contact" element={<Contact/>}  />
          <Route path="/resume" element={<Resume/>}  />
      </Routes>  
    </>
    
  )
}
export default App;
