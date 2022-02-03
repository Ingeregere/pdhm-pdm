import React, {useState,useEffect} from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import AllServices from './services'
import './style.css'


function CarrouselSlide() {
const [carouselHorizontal, setCarouselHorizontal] = useState([])
const [carouselVertical, setCarouselVertical] = useState([])

const getAllCarouselHorizontal = () =>{
  AllServices.getAllCarouselHomepage().then((response) =>{
    setCarouselHorizontal(response.data)
  })
}
const getAllCarouselVertical = () =>{
  AllServices.getAllCarouselHomepageAside().then((response) =>{
    setCarouselVertical(response.data)
  })
}
useEffect(() => {
  getAllCarouselHorizontal()
  getAllCarouselVertical()
}, [])
  return (
    <Container fluid={true} >
  <Row className="mt-5 mb-5">
    <Col lg={9} className=" mb-5">
        <Carousel>
          {carouselHorizontal && carouselHorizontal.map(carousel =>(
            <Carousel.Item key={carousel.id}>
            <img
            className="d-block w-100"
            src={`https://back-office.pdhm-pdm.com/images/proprieties/${carousel.slide}`}
            alt="First slide"
            
            />
        </Carousel.Item>
          ))}
            
        </Carousel>
    </Col>
    <br /><br/>
    <Col lg={3} >
        <Carousel >
          { 
          carouselVertical && carouselVertical.map((carouselaside =>(
            <Carousel.Item key={carouselaside.id}>
            <img
            className="d-block w-100"
            src={`https://back-office.pdhm-pdm.com/images/proprieties/${carouselaside.image}`}
            alt={carouselaside.title}
            height={'415'}  
            />   
            <Carousel.Caption className={'topCarrouselAside'}>
              <h6>{carouselaside.title}</h6>
            </Carousel.Caption>
        </Carousel.Item>

          )))
            
          }
            
            
        </Carousel>
    </Col>
    
  </Row>

</Container>
  );
}

export default CarrouselSlide;
