import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Header from './components/Header';
import './App.css';
import { useMediaQuery } from 'react-responsive'


import { Desktop } from './components/desktop/component';
import { Laptop } from './components/laptop/component';
import { BigScreen } from './components/big-screen/component';
import { Mobile } from './components/mobile/component';
import { TabletMobile } from './components/tablet-mobile/component';

// transition
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./pages/AnimatedRoutes";



function App() {

  return (
    <>
    <div className="App">




      <Header/>

         
    </div>


    <main>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/aboutme" element={<AboutMe/>} />
      <Route path="/resume" element={<Resume/>} />
      <Route path="/projects" element={<Projects/>} />
    </Routes> 
</main>
</>


  );
}



export default App;