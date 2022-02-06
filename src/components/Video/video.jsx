import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Player } from 'video-react';
import ReactPlayer from 'react-player'

function VideoPdhm() {
  return (
      <Container>
      <Row>
          <Col md={6}>
              <h3>Notre publicité</h3>
              <ReactPlayer url='https://www.youtube.com/watch?v=6APhgYV4BkU&t=242s' controls={true} /> 
          </Col>
          <Col md={6}>

          </Col>
      </Row>
      </Container>
  )
} 
  
export default VideoPdhm;
