import React from 'react'
import './style.css'
import { BsFacebook, BsYoutube, BsTwitter } from 'react-icons/bs';
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
    <Nav className="me-auto ">
   
    <Nav.Link as={Link} to="/" className={'text-light'}>ACCUEIL</Nav.Link>
        <NavDropdown title={<span className="text-light my-auto">PDH/M-PDM</span>} id="collasible-nav-dropdown">
          <NavDropdown.Item  as={Link} to="/Vision">Vision</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/Mission">Mission</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/Nos-partenaires">Nos Partenaires</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/Innovation">Innovation</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title={<span className="text-light my-auto">SUPERVISION</span>} style={{color: 'red'}} id="collasible-nav-dropdown" className={'text-light'}>
          <NavDropdown.Item as={Link} to="/National">National</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/Regional">Regional</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/Provinciale">Provinciale</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/Zonale">Zonale</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/Collinaire">Collinale</NavDropdown.Item>
        </NavDropdown>
      <Nav.Link as={Link} to="/Contactez-nous" className={'text-light'}>CONTACTEZ-NOUS</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#deets" c> <span className={'text-light iconbtn'}><BsFacebook /></span></Nav.Link>
      <Nav.Link eventKey={2} href="#memes"> <span className={'text-light iconbtn'}><BsYoutube /></span></Nav.Link>
      <Nav.Link eventKey={2} href="#memes"><span className={'text-light iconbtn'}><BsTwitter /></span></Nav.Link>
    </Nav>

  </Navbar.Collapse>
  </Container>
</Navbar>
  );
}

export default Navigation;
