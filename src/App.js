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
  const isMobileDevice = useMediaQuery({
    query: "(min-device-width: 480px)",
  });
  
  const isTabletDevice = useMediaQuery({
    query: "(min-device-width: 768px)",
  });
  
  const isLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });
  
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1200px)",
  });
  
  const isBigScreen = useMediaQuery({
    query: "(min-device-width: 1201px )",
  });

  return (
    <>
    <div className="App">
        
{isMobileDevice && <Mobile />}
  {isTabletDevice && <>
  <TabletMobile />
  {isDesktop && <Desktop />}
  {isLaptop && <Laptop />}
  {isBigScreen && <BigScreen />}
</>}

      <h3 className="Name">Desiree V. Harvey</h3>

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
