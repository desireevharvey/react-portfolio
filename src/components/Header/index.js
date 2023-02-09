import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './index.css';


export default function Header() {
  return (

<Navbar bg="light" variant="light">
<Container>
<div class="position-absolute top-50 start-50 translate-middle">


  <Nav className="me-auto">
    <Nav.Link href="/">Home</Nav.Link>
    <Nav.Link href="/aboutme">About</Nav.Link>
    <Nav.Link href="/resume">Resume</Nav.Link>
    <Nav.Link href="/projects">Projects</Nav.Link>

  </Nav>
  </div>
</Container>
</Navbar>
  )
}
