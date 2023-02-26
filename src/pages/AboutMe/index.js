import React from 'react'
import './index.css';
import { motion } from "framer-motion";


export default function aboutme() {
  return (
    <motion.div className="container text-center"       
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 3 }}>

    <div className='txt'>
      <h5>About Me</h5>

Software Developer adept at fundamentals of Javascript, HTML/CSS, React & Python. Consistently eager to learn, values daring experimentation, and is an enthusiastic leader invested in team collaboration to produce readable, maintainable, and consistent code. Enjoys problem-solving and working with development teams to both modernize and create custom applications. 

After years of working customer service jobs to support myself financially through college, I graduated with a BS in Marketing. Not long after was the staggering blow of the COVID-19 pandemic. With so much unexpected change, I had to adapt my way of thinking. I knew that I wanted to cultivate a new skill set to challenge myself. That is what started my transition to the tech world.



Skills:
   <p>Frontend: HTML ★ CSS ★ JavaScript ★ React ★ Bootstrap ★ Responsive Design</p>
   <p>Backend: Node.js ★ Express ★ MongoDB ★ Mongoose ★ Python ★ Django ★ SQL ★ PostgreSQL ★ RESTful API ★ Heroku</p>

    </div>
    </motion.div>
  )
}
