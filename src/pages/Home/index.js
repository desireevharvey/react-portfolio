import React from 'react'
import './index.css';
import { Image } from 'react-bootstrap';
import { motion } from "framer-motion";



export default function home() {
  return (
    <>
      <motion.div className="container text-center   bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
      >


        <a href="https://github.com/desireevharvey">
          <Image src="https://i.postimg.cc/Hs62b59z/317712-code-repository-github-repository-resource-icon.png"
          className="git" />
          </a>
          <a href="https://www.linkedin.com/in/desireeharvey/">
          <Image src="https://i.postimg.cc/MpXY5TsS/5296501-linkedin-network-linkedin-logo-icon.png"
          className="link" />
          </a>
          <a href="mailto:desireevharvey@gmail.com">
          <Image src="https://i.postimg.cc/fygLyNGL/gmail.png"
          className="mail" />
          </a>
    </motion.div>

          
<div>

          <h5 className="Job">Software Engineer</h5>
        <div>
        <Image className="Pic" src="https://i.postimg.cc/XqkfbfCB/IMG-1189.jpg" fluid />
        </div>
        <div class='text-image'>
          <p>I'm Desiree, a Software Engineer with a background in leadership 
            and client/customer experience. Thank you for taking the time to 
            view my portfolio; please feel free to contact me via email using
            the icon above! </p>

  
    </div>
    </div>


    </>
  )
}
