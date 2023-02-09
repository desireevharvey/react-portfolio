import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Header from './components/Header';

function App() {
  return (
    <>
    <div className="App">
      <h1>Desiree V. Harvey</h1>
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
