import React from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';
import {FcDownload} from "react-icons/fc" 
import { motion } from "framer-motion";
import { Image } from 'react-bootstrap';
import p1 from "./assets/p1.jpg";
import p2 from "./assets/p2.jpg";



export default function resume() {
  return (
    <motion.div className="container text-center"       
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 3 }}
    >

<Button variant="secondary" bg="dark" size='sm' className='rez'><FcDownload /> 
  <a href="https://docs.google.com/document/d/1d8_A0daWDl6nrE1o6AGKpQbC9FBu8bNmsqEXODIKjtM/edit?usp=sharing" target="_blank">Download my Resume</a></Button>{' '}




<div class="container">
    <div class="row gy-3">
        <div class="col-sm">
            <div class="card h-100 border-0">
            <Image className="pages" src={p1} class="card-img-top" alt="..."/>

              </div>
        </div>
        <div class="col-sm">
            <div class="card h-100 border-0">
            <Image className="pages" src={p2} class="card-img-top" alt="..."/>
                </div>
              </div>
        </div>
        </div>
    





{/* 
  <Image className="pages" src={p1}></Image>
  <Image className="pages" src={p2}></Image> */}

    
    {/* <object data="https://docs.google.com/document/d/1d8_A0daWDl6nrE1o6AGKpQbC9FBu8bNmsqEXODIKjtM/edit?usp=sharing" type="application/pdf" width="1000em" height="750em">
      <p>Alternative text - include a link <a href="https://docs.google.com/document/d/1d8_A0daWDl6nrE1o6AGKpQbC9FBu8bNmsqEXODIKjtM/edit?usp=sharing">to the PDF!</a></p>
  </object> */}

  
  {/* <Button variant="warning" size='sm' className='rez'><FcDownload /> 
  <a href="https://docs.google.com/document/d/1d8_A0daWDl6nrE1o6AGKpQbC9FBu8bNmsqEXODIKjtM/edit?usp=sharing" target="_blank">Download my Resume</a></Button>{' '} */}

    </motion.div>
  )
}