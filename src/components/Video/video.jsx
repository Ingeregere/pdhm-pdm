import React,{useEffect,useState} from 'react';
import { Col, Container, Row,Card } from 'react-bootstrap';
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
            <Card style={{ width: '100%',marginLeft: '5rem',marginTop: '3.5em',height: '360px' }}>
                <Card.Body>
                    <Card.Text style={{lineHeight:'2.5em'}}>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content......
                    </Card.Text>
                    <Card.Link href="#">Télecharger en pdf</Card.Link>
                </Card.Body>
            </Card>

          </Col>
      </Row>
      </Container> 
  )
} 
  
export default VideoPdhm;
