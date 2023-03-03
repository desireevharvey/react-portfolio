import React from 'react'
import './index.css';
import { Image } from 'react-bootstrap';
import { motion } from "framer-motion";


import s1 from "./assets/github.svg";
import s2 from "./assets/gmail.svg";
import s3 from "./assets/linked.svg";



<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />

 

export default function home() {
  return (
    <>

              <motion.div className="container text-center   bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
      >




{/*               
    <div className='Parent'>

          </div> */}
          

          
{/*           
          <h5 className="Job">Software Engineer</h5>
       
        <Image className="Pic" src="https://i.postimg.cc/XqkfbfCB/IMG-1189.jpg" fluid />
      
        <div class='text-image'>
          <p>I'm Desiree, a Software Engineer with a background in leadership 
            and client/customer experience. Thank you for taking the time to 
            view my portfolio; please feel free to contact me via email using
            the icon above! </p>

  

    </div>

    </div>  */}



{/* 

 <div className="card rounded-7 border-0">
    <div className="row gy-3">
        <div className="col-sm">
                <div className="card-body">
                  <Image className="pic w-50" src="https://i.postimg.cc/HnFhKh3y/IMG-4950.jpg"/>
                </div>
              </div>
        <div className="col-sm">
          
                <h4 className="card-title1 w-75">Software Developer</h4>


    					<p className="card-text text-justify w-75">
              I'm Desiree, a Software Developer with a background in leadership 
            and client/customer experience. Thank you for taking the time to 
            view my portfolio; please feel free to contact me via email using
            the icon below!
              </p>
  
              <div className='social w-75'>
        <a href="https://www.linkedin.com/in/desireeharvey/">
          <Image src={s3}
          className="link" />
          </a>
          <a href="mailto:desireevharvey@gmail.com">
          <Image src={s2}
          className="mail" />
          </a>
          <a href="https://github.com/desireevharvey">
          <Image src={s1}
          className="git" />
          </a>
          </div>
           
        </div>
        </div>
    </div>  */}


<div className="card border-0">
  <div className="row gy-3">
    <div className="col-sm">
      <div className="card-body rounded-7">
        <Image className="pic w-50" src="https://i.postimg.cc/HnFhKh3y/IMG-4950.jpg"/>
      </div>
    </div>
    <div className="col-sm">
      <h4 className="card-title1 w-75">Software Developer</h4>
      <p className="card-text text-justify w-75">
        I'm Desiree, a Software Developer with a background in leadership and client/customer experience. Thank you for taking the time to view my portfolio; please feel free to contact me via email using the icon below!
      </p>
      <div className='social w-75'>
        <a href="https://www.linkedin.com/in/desireeharvey/">
          <Image src={s3} className="link" />
        </a>
        <a href="mailto:desireevharvey@gmail.com">
          <Image src={s2} className="mail" />
        </a>
        <a href="https://github.com/desireevharvey">
          <Image src={s1} className="git" />
        </a>
      </div>
    </div>
  </div>
</div>



    </motion.div>
    </>
  )
}



