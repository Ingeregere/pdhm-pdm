import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
  <Container>
  <Navbar.Brand href="#home">PDH/M-PDM</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-left">
      <Nav.Link href="#features">Accueil</Nav.Link>
      <NavDropdown title="Pdh/m-pdm" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Vision</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Mission</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Nos Partenaires</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Innovation</NavDropdown.Item>

      </NavDropdown>
      <NavDropdown title="Supervision" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">National</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Regional</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Provinciale</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Zonale</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Collinale</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#features">Apropos</Nav.Link>
      <Nav.Link href="#features">Contactez-nous</Nav.Link>
     
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
  );
}

export default Navigation;
