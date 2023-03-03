import React from 'react'
import './index.css';
import { motion } from "framer-motion";

import i1 from "./assets/react.svg";
import i2 from "./assets/boot.svg";
import i3 from "./assets/css.svg";
import i4 from "./assets/express.svg";
import i5 from "./assets/git.svg";
import i6 from "./assets/github.svg";
import i7 from "./assets/hero.svg";
import i8 from "./assets/html.svg";
import i9 from "./assets/jquery.svg";
import i10 from "./assets/js.svg";
import i11 from "./assets/mongod.svg";
import i12 from "./assets/mysql.svg";
import i13 from "./assets/node.svg";
import i14 from "./assets/npm.svg";
import i15 from "./assets/pyth.svg";
import i16 from "./assets/tail.svg";
import i17 from "./assets/postgresql.svg";
import i18 from "./assets/django.svg";


import { Image } from 'react-bootstrap';



export default function aboutme() {
  return (
    <motion.div className="container text-center"       
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 3 }}>


<div class="container">
    <div class="row gy-3">
        <div class="col-sm">
            <div class="card h-100 border-0">
                <div class="card-body">
                  <h5 class="card-title text-align-center">About Me</h5>
                  <p class="card-text1">
                  Software Developer adept at fundamentals of Javascript, HTML/CSS, React & Python. Consistently eager to learn, values daring experimentation, and is an enthusiastic leader invested in team 
                  collaboration to produce readable, maintainable, and consistent code. Enjoys problem-solving and working with development teams to both modernize and create custom applications. 
                  After years of working customer service jobs to support myself financially through college, I graduated with a BS in Marketing. Not long after was the staggering blow of the COVID-19 pandemic. 
                  With so much unexpected change, I had to adapt my way of thinking. I knew that I wanted to cultivate a new skill set to challenge myself. That is what started my transition to the tech world.</p>
                </div>
              </div>
        </div>
        <div class="col-sm">
            <div class="card h-100 border-0">
                <div class="card-body">
                  <h5 class="card-title">Skills</h5>
                  <p class="card-text2">
                  <Image src={i1} w-100></Image>
                  <Image src={i2} w-100></Image>
                  <Image src={i3} w-100></Image>
                  <Image src={i4} w-100></Image>
                  <Image src={i5} w-100></Image>
                  <Image src={i6} w-100></Image>
                  <Image src={i7} w-100></Image>
                  <Image src={i8} w-100></Image>
                  <Image src={i9} w-100></Image>
                  <Image src={i10} w-100></Image>
                  <Image src={i11} w-100></Image>
                  <Image src={i12} w-100></Image>
                  <Image src={i13} w-100></Image>
                  <Image src={i14} w-100></Image>
                  <Image src={i15} w-100></Image>
                  <Image src={i16} w-100></Image>
                  <Image src={i17} w-100></Image>
                  <Image src={i18} w-100></Image>


                  </p>
                </div>
              </div>
        </div>
        </div>
    </div>





{/* <div class="float-container">

  <div class="float-child">
    <h5 className="title">About Me</h5>
    <p>Software Developer adept at fundamentals of Javascript, HTML/CSS, React & Python. Consistently eager to learn, values daring experimentation, and is an enthusiastic leader invested in team collaboration to produce readable, maintainable, and consistent code. Enjoys problem-solving and working with development teams to both modernize and create custom applications. 
    After years of working customer service jobs to support myself financially through college, I graduated with a BS in Marketing. Not long after was the staggering blow of the COVID-19 pandemic. With so much unexpected change, I had to adapt my way of thinking. I knew that I wanted to cultivate a new skill set to challenge myself. That is what started my transition to the tech world.</p>

  </div>
  
  <div className="float-child">


    <h5 className="title2">Skills</h5>
    <div className='icons'>
      
  <Image src={i1}></Image>
  <Image src={i2}></Image>
  <Image src={i3}></Image>
  <Image src={i4}></Image>
  <Image src={i5}></Image>
  <Image src={i6}></Image>
  <Image src={i7}></Image>
  <Image src={i8}></Image>
  <Image src={i9}></Image>
  <Image src={i10}></Image>
  <Image src={i11}></Image>
  <Image src={i12}></Image>
  <Image src={i13}></Image>
  <Image src={i14}></Image>
  <Image src={i15}></Image>
  <Image src={i16}></Image>
  <Image src={i17}></Image>
  <Image src={i18}></Image>


  </div>
  </div>
  
</div> */}

    {/* <div className='txt'>
    <div className="cont1">
      <h5>About Me</h5>

  <p>Software Developer adept at fundamentals of Javascript, HTML/CSS, React & Python. Consistently eager to learn, values daring experimentation, and is an enthusiastic leader invested in team collaboration to produce readable, maintainable, and consistent code. Enjoys problem-solving and working with development teams to both modernize and create custom applications. 
  After years of working customer service jobs to support myself financially through college, I graduated with a BS in Marketing. Not long after was the staggering blow of the COVID-19 pandemic. With so much unexpected change, I had to adapt my way of thinking. I knew that I wanted to cultivate a new skill set to challenge myself. That is what started my transition to the tech world.</p>

</div>

    </div> */}
    </motion.div>
  )
}
