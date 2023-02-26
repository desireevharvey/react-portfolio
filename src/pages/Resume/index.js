import React from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';
import {FcDownload} from "react-icons/fc" 
import { motion } from "framer-motion";
import p1 from "./assets/portfolio_p1.png";
import { Image } from 'react-bootstrap';

export default function resume() {
  return (
    <motion.div className="container text-center"       
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 3 }}
    >

  {/* <Image src={p1}></Image> */}


    <object data="https://docs.google.com/document/d/1d8_A0daWDl6nrE1o6AGKpQbC9FBu8bNmsqEXODIKjtM/edit?usp=sharing" type="application/pdf" width="1000em" height="750em">
      <p>Alternative text - include a link <a href="https://docs.google.com/document/d/1d8_A0daWDl6nrE1o6AGKpQbC9FBu8bNmsqEXODIKjtM/edit?usp=sharing">to the PDF!</a></p>
  </object>
  
  
  {/* <Button variant="warning" size='sm' className='rez'><FcDownload /> 
  <a href="https://docs.google.com/document/d/1d8_A0daWDl6nrE1o6AGKpQbC9FBu8bNmsqEXODIKjtM/edit?usp=sharing" target="_blank">Download my Resume</a></Button>{' '} */}

    </motion.div>
  )
}