
import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import '../../index.css';

export default function CardExample() {
  return (
    <>
    
      <Col md={3}>
        <Card style={{ width: "40rem" }}>
        <Card.Img variant="top" src="https://i.postimg.cc/PxjBW2MS/200362906-5f8107f1-6ae9-4b6b-ac8b-c1c8d269df4c.png
" />
          <Card.Body>
            <Card.Title>My First Portfolio</Card.Title>
            <Card.Text>
             This was my first project. I wanted to create a portfolio to showcase my
             personality, style and skillset.

             Languages: HTML, CSS, Javascript
            </Card.Text>
            <Button href="https://github.com/desireevharvey/desireeHarvey_Portfolio">Github Repo</Button>{' '}
            <Button href="https://desireevharvey.github.io/desireeHarvey_Portfolio/">Live Site/App</Button>{' '}

          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card style={{ width: "40rem" }}>
        <Card.Img variant="top" src="https://i.postimg.cc/g28Bk3Vd/204708928-72b7f933-b01c-46ae-b53f-ef9ed3557fdb.png
" />
          <Card.Body>
            <Card.Title>Adopt-A-Pet</Card.Title>
            <Card.Text>
            The goal was to make a full CRUD app with 7 restful routes. 
            My approach was to keep it simple in the beginning to ensure 
            that it worked properly. I wanted create a design aesthetic 
            that is user friendly, intuitive, and pleasing to the eye.


            Languages: EJS, Javascript, HTML, CSS, Shell, Node.js, 
            MongoDB, Express, Bootstrap
            </Card.Text>
            <Button href="https://github.com/desireevharvey/adopt_A_Pet">Github Repo</Button>{' '}
            <Button href="https://i.postimg.cc/63B7JQTh/204708928-72b7f933-b01c-46ae-b53f-ef9ed3557fdb.png">Live Site/App</Button>{' '}

          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card style={{ width: "40rem" }}>
        <Card.Img variant="top" src="https://i.postimg.cc/kXVpz0D2/210301116-941b7853-4883-4a16-80e9-91a96a43714b.jpg
" />
          <Card.Body>
            <Card.Title>Yard-Sail</Card.Title>
            <Card.Text>
              Yard Sail is a full stack application with a React 
              frontend. The purpose of Yard Sail is to allow users 
              (buyers and sellers) to view and post local items for 
              sale.
            </Card.Text>
            <Button href="https://github.com/tehranimilad/Yard-Sail">Github Repo</Button>{' '}
            <Button href="https://yard-sail-app.herokuapp.com/">Live Site/App</Button>{' '}

          </Card.Body>
        </Card>
      </Col>
      <Col md={3}>
        <Card style={{ width: "40rem" }}>
        <Card.Img variant="top" src="https://i.postimg.cc/Fs2B4TJD/Screen-Shot-2023-02-08-at-8-49-45-PM.png
" />
          <Card.Body>
            <Card.Title>Event Seeker</Card.Title>
            <Card.Text>
              My events is a full stack application with a React 
              frontend. When the user creates an account, they 
              are allowed to log in in order to create, edit or 
              delete events.
            </Card.Text>
            <Button href="https://github.com/desireevharvey/my_events_app">Github Repo</Button>{' '}
            <Button href="https://event-seeker.herokuapp.com/">Live Site/App</Button>{' '}

          </Card.Body>
        </Card>
      </Col>
    
    </>
  );
}