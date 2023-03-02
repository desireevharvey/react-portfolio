


// export default function Header() {
//   return (
// <nav className="navbar navbar-expand-lg navbar-light bg-light">
//   <Nav.Link className="navbar-brand" href="#">Desiree V. Harvey</Nav.Link>
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>
//   <div className="collapse navbar-collapse" id="navbarNav">
//     <ul className="navbar-nav">
//       <li className="nav-item active">
//         <Nav.Link className="nav-link" href="/">Home</Nav.Link>
//       </li>
//       <li className="nav-item">
//         <Nav.Link className="nav-link" href="/aboutme">About</Nav.Link>
//       </li>
//       <li className="nav-item">
//         <Nav.Link className="nav-link" href="/resume">Resume</Nav.Link>
//       </li>
//       <li className="nav-item">
//         <Nav.Link className="nav-link" href="/projects">Projects</Nav.Link>
//       </li>
//     </ul>
//   </div>
// </nav>
//   )
// }



import React from "react";

import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

const App = () => (
  <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
    <Container>
      <Navbar.Brand href="/">Desiree V. Harvey</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/aboutme">About</Nav.Link>
          <Nav.Link href="/resume">Resume</Nav.Link>
          <Nav.Link href="/projects">Projects</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default App;