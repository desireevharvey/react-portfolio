import React from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';
import {FcDownload} from "react-icons/fc" 


export default function resume() {
  return (
    <div><h1>resume</h1>

  
  <Button variant="warning" size='sm' className='rez'><FcDownload /> 
  <a href="https://docs.google.com/document/d/1d8_A0daWDl6nrE1o6AGKpQbC9FBu8bNmsqEXODIKjtM/edit?usp=sharing" target="_blank">Download my Resume</a></Button>{' '}

    </div>
  )
}
