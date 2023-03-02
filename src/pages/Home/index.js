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
<div className="row gy-3">
        <div className="col-sm">
            <div className="card h-100 border-0">

            <h5 className="card-title">     
                <div className='Social'>
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
          </div></h5>
            <Image src="https://i.postimg.cc/XqkfbfCB/IMG-1189.jpg" className="card-img-top rounded-circle" alt="..."/>
                <div className="card-body">
                <h5 className="card-title">Software Engineer</h5>

                  <p className="card-text1 col-lg-6">
                  I'm Desiree, a Software Engineer with a background in leadership 
            and client/customer experience. Thank you for taking the time to 
            view my portfolio; please feel free to contact me via email using
            the icon above!</p>

                        <h5 className="card-title">     
                <div className='Social'>
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
          </div></h5>
                </div>
              </div>
              </div>
              </div> */}

{/* 
<div className="container">
    <div className="row gy-3">
    	<div className="card col-md-12 p-3 border-0">
    		<div className="row">
    			<div className="col-md-4">
    				<Image className="w-75 rounded-circle" src="https://i.postimg.cc/XqkfbfCB/IMG-1189.jpg"/>
    			</div>
    			<div className="col-md-8">
    				<div className="card-block">
    					<h6 className="card-title w-75">Software Engineer</h6>
    					<p className="card-text text-justify w-30">
              I'm Desiree, a Software Engineer with a background in leadership 
            and client/customer experience. </p>
            <p>Thank you for taking the time to 
            view my portfolio; please feel free to contact me via email using
            the icon above!
              </p>
              <h5 className="card-title">     
                <div className='Social w-75'>
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
          </div></h5>
    				</div>
    			</div>
    		</div>
    	</div>
    </div>
</div> */}

<div class="container">
    <div class="row gy-3">
        <div class="col-sm">
            <div class="card h-100 border-0">
                <div class="card-body">
                  <Image className="pic w-40 rounded-circle" src="https://i.postimg.cc/XqkfbfCB/IMG-1189.jpg"/>
                </div>
              </div>
        </div>
        <div class="col-sm">
            <div class="card h-100 border-0">
                <div class="card-body2">
                <h4 className="card-title w-75">Software Developer</h4>
    					<p className="card-text text-justify w-75">
              I'm Desiree, a Software Developer with a background in leadership 
            and client/customer experience. Thank you for taking the time to 
            view my portfolio; please feel free to contact me via email using
            the icon below!
              </p>
              <h5 className="card-title">     
                <div className='Social w-75'>
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
          </div></h5>
          
                </div>
              </div>
        </div>
        </div>
    </div>


    </motion.div>
    </>
  )
}



