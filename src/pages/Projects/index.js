
import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import './index.css';
import { motion } from "framer-motion";
import { Image } from 'react-bootstrap';

export default function CardExample() {
  return (
    
    <motion.div className="container text-center"       
    initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
      >

<h5 className="Proj">Projects</h5>

<div class="container">
  <div class="row">
  <div class="col-md-4">
    <div class="card">
  <Image src="https://i.postimg.cc/PxjBW2MS/200362906-5f8107f1-6ae9-4b6b-ac8b-c1c8d269df4c.png" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">My First Portfolio</h5>
    <p class="card-text">This was my first project. I wanted to create a portfolio to showcase my
                        personality, style and skillset.</p>
                        <p>Technologies Used: HTML, CSS, Javascript</p>

            <Button variant="secondary" href="https://github.com/desireevharvey/desireeHarvey_Portfolio">Github Repo</Button>{' '}
            <Button variant="secondary" href="https://desireevharvey.github.io/desireeHarvey_Portfolio/">Live Site/App</Button>{' '}
  </div>
</div>
  </div>
  <div class="col-md-4">
    <div class="card">
  <Image src="https://i.postimg.cc/g28Bk3Vd/204708928-72b7f933-b01c-46ae-b53f-ef9ed3557fdb.png" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="Adopt-A-Pet">Adopt-A-Pet</h5>
    <p class="card-text">The goal was to make a full CRUD app with 7 restful routes. 
            My approach was to keep it simple in the beginning to ensure 
            that it worked properly. I wanted create a design aesthetic 
            that is user friendly, intuitive, and pleasing to the eye.</p>


           <p>Technologies Used: EJS, Javascript, HTML, CSS, Shell, Node.js, 
            MongoDB, Express, Bootstrap</p>
            <Button variant="secondary" href="https://github.com/desireevharvey/adopt_A_Pet">Github Repo</Button>{' '}
            <Button variant="secondary" href="https://adoptapet.herokuapp.com/">Live Site/App</Button>{' '}
  </div>
</div>
  </div>
  <div class="col-md-4">
    <div class="card">
  <Image src="https://i.postimg.cc/kXVpz0D2/210301116-941b7853-4883-4a16-80e9-91a96a43714b.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Yard Sail</h5>
    <p class="card-text">Yard Sail is a full stack application with a React 
              frontend. The purpose of Yard Sail is to allow users 
              (buyers and sellers) to view and post local items for 
              sale.</p>
              <p>Technologies Used: React, React Bootstrap, Cors, Node.js, Express, jwtSimple, Mongoose, Axios.</p>
            <Button variant="secondary" href="https://github.com/tehranimilad/Yard-Sail">Github Repo</Button>{' '}
            <Button variant="secondary" href="https://yard-sail-app.herokuapp.com/">Live Site/App</Button>{' '}

  </div>
</div>
  </div>
  <div class="col-md-4">
    <div class="card">
  <Image src="https://i.postimg.cc/Fs2B4TJD/Screen-Shot-2023-02-08-at-8-49-45-PM.png" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Event Seeker</h5>
    <p class="card-text">My events is a full stack application with a React 
              frontend. When the user creates an account, they 
              are allowed to log in in order to create, edit or 
              delete events.</p>
              <p>Technologies Used: React, React Bootstrap, Cors, Node.js, Express, jwtSimple, Mongoose, Axios, Bulma.</p>
            <Button variant="secondary" href="https://github.com/desireevharvey/my_events_app">Github Repo</Button>{' '}
            <Button variant="secondary" href="https://event-seeker.herokuapp.com/">Live Site/App</Button>{' '}
  </div>
</div>
  </div>
</div>
</div>

</motion.div>
  
  );
}
