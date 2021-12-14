import React from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import './style.css'
import manmotor from '../../assets/images/manmotor.jpg'
import directeur from '../../assets/images/directeur.jpeg'
// import employeur1 from '../../assets/images/employeur1.jpeg'
// import employeur2 from '../../assets/images/employeur2.jpeg'
// import employeur3 from '../../assets/images/employeur3.jpeg'
// import employeur4 from '../../assets/images/employeur4.jpeg'
import employeur5 from '../../assets/images/employeur5.jpeg'


function CarrouselSlide() {
  return (
    <Container fluid={true} >
  <Row className="mt-5 mb-5">
    <Col lg={9} className=" mb-5">
        <Carousel>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src={manmotor}
        alt="First slide"
        />
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src={manmotor}
        alt="Second slide"
        />
        
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src={manmotor}
        alt="Third slide"
        />

    
    </Carousel.Item>
        </Carousel>
    </Col>
    <br /><br/>
    <Col lg={3} >
        <Carousel >
    <Carousel.Item>
        <img
        className="d-block w-100 h-50"
        src={directeur}
        alt="First slide"
        />
        <Carousel.Caption className={'topCarrouselAside'}>
          <h6>Directeur Général et Visionnaire</h6>
        </Carousel.Caption>
    </Carousel.Item>
        </Carousel>
    </Col>
    
  </Row>

</Container>
  );
}

export default CarrouselSlide;
