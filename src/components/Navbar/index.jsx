import React from 'react'
import './style.css'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark"  fixed="top" >
  <Container>
  <Navbar.Brand as={Link} to={'/'} >
                <img
                    src="/logopdm.png"
                    width="100"
                    height="60"
                    className="d-inline-block align-top logo"
                    alt="logo Pdh/m-pdm"
                /> {" "}
   
   </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto topHeader">
    </Nav>
    <Nav>
    <Nav.Link as={Link} to="/">Accueil</Nav.Link>
        <NavDropdown title="Pdh/m-pdm" id="collasible-nav-dropdown">
          <NavDropdown.Item  as={Link} to="/Vision">Vision</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/Mission">Mission</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/Nos-partenaires">Nos Partenaires</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/Innovation">Innovation</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Supervision" id="collasible-nav-dropdown">
          <NavDropdown.Item as={Link} to="/National">National</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/Regional">Regional</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/Provinciale">Provinciale</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/Zonale">Zonale</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/Collinaire">Collinale</NavDropdown.Item>
        </NavDropdown>
      <Nav.Link as={Link} to="/Contactez-nous">Contactez-nous</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  );
}

export default Navigation;
