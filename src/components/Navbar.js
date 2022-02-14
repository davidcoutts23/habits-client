import React from "react";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Scorecard from "./Scorecard";
import Tracker from "./Home";

export default function NavbarComponent() {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="tracker">Tracker</Nav.Link>
              <Nav.Link href="about">About</Nav.Link>
              <Nav.Link href="scorecard">Scorecard</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/scorecard" element={<Scorecard />} />
        <Route path="/" element={<Scorecard />} />
      </Routes>
    </Router>
  );
}

{
  /* <Route path="/" element={<Home />} /> */
}
