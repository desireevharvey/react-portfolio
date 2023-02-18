import React from 'react'
import './index.css';
import { Image } from 'react-bootstrap';
import {FcGoogle} from "react-icons/fc" 



export default function home() {
  return (
    <div>

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

          
          


          <h5 className="Job">Software Engineer</h5>

        <Image className="Pic" src="https://i.postimg.cc/XqkfbfCB/IMG-1189.jpg" fluid />
        <div class='text-image'>
          <p>I'm Desiree, a Software Engineer with a background in leadership 
            and client/customer experience. Thank you for taking the time to 
            view my portfolio; please feel free to reach out to me via the 
            contact form above! </p>

    </div>
    </div>




  )
}
