import React,{useEffect,useState} from 'react';
import { Col, Container, Row,Card, Button } from 'react-bootstrap';
import ReactPlayer from 'react-player'
import AllServices from './services'
import AllServicesPdf from './pdefServices';
import ReactHtmlParser from "react-html-parser";





function VideoPdhm() {
    const[videoLink, setVideoLink] = useState([])
    const [pdfText, setPdfText] = useState([])
    const getPdfAds = () =>{
        AllServicesPdf.getPdfAds().then((response) =>{
            setPdfText(response.data)
        })
      }
    const getLinkVideo = () =>{
        AllServices.getLinkVideo().then((response) =>{
            setVideoLink(response.data)
        })
      }
      useEffect(() => {
        getPdfAds()
        getLinkVideo()
      }, [])
                   
      const PdfDocument = pdfText.map(pdftextcurrent =>(
        ReactHtmlParser(pdftextcurrent.pdf)
    ))
    const TextPdf = pdfText.map(pdftextcurrent =>(
        ReactHtmlParser(pdftextcurrent.text)
    ))
   

       const urlVideoLink = JSON.stringify(videoLink[0])

  return (
      <Container fluid>
      <Row>
          <Col md={6} sm={12}>
              <h3 className={'mt-3'}>Notre publicité de PDH/M-PDM</h3>
              <ReactPlayer url={urlVideoLink} controls={true} width="720" height="360px" /> 
          </Col>
          <Col md={6} sm={12}>
            <Card   style={{marginTop: '3.8em', height: '360px'}}>
                <Card.Body>
                    <Card.Text style={{lineHeight:'1em'}}>
                    {TextPdf.length > 50 ?
                      `${TextPdf.substring(0, 50)}...` : TextPdf
                  }
                    </Card.Text>
                    <Card.Link href={`https://admin.pdhm-pdm.com//pdf/publicity/${PdfDocument}`}>Télecharger en pdf</Card.Link>
                </Card.Body>
            </Card>

          </Col>
      </Row>
      </Container> 
  )
} 
  
export default VideoPdhm;
