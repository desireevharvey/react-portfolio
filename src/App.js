import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Header from './components/Header';
import './App.css';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';


function App() {
  return (
    <>

    <div className="App">
      <h3 className="Name">Desiree V. Harvey</h3>
      <Link to="https://github.com/desireevharvey">
        <img
          src="https://i.postimg.cc/Hs62b59z/317712-code-repository-github-repository-resource-icon.png
          " className='Git'
          alt="example"
        />
      </Link>
      <Link to="https://www.linkedin.com/in/desireeharvey/">
        <img
          src="https://i.postimg.cc/MpXY5TsS/5296501-linkedin-network-linkedin-logo-icon.png
          " className='Link'
          alt="example"
        />
      </Link>
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
