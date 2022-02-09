import React,{useEffect,useState} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ReactPlayer from 'react-player'
import AllServices from './services'
function VideoPdhm() {
    const[videoLink, setVideoLink] = useState([])
    const getLinkVideo = () =>{
        AllServices.getLinkVideo().then((response) =>{
            setVideoLink(response.data)
        })
      }
      useEffect(() => {
        getLinkVideo()
      }, [])

      const urlVideoLink = JSON.stringify(videoLink[0])
  return (
      <Container>
      <Row>
          <Col md={6}>
              <h3 className={'mt-3'}>Notre publicité de PDH/M-PDM</h3>
              <ReactPlayer url={urlVideoLink} controls={true} /> 
          </Col>
          <Col md={6}>

          </Col>
      </Row>
      </Container> 
  )
} 
  
export default VideoPdhm;
