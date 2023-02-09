import React from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';
import {FcDownload} from "react-icons/fc" 


export default function resume() {
  return (
    <div><h1>resume</h1>

    <Button variant="info" size='sm'><FcDownload />
  <a href="https://docs.google.com/document/d/1W0CY81zoUai61M9R-CuGYzvIjAPc0UwLWcrPAAaI2Zo/edit?usp=sharing" target="_blank">Download my Resume</a></Button> 

    </div>
  )
}
