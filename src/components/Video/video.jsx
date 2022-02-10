import React,{useEffect,useState} from 'react';
import { Col, Container, Row,Card, Button } from 'react-bootstrap';
import ReactPlayer from 'react-player'
import AllServices from './services'
import AllServicesPdf from './pdefServices';
import jsPDF from 'jspdf'
import ReactHtmlParser from "react-html-parser";
import MyAppPdf from './tespdf'
import historiquepdf from './historique.pdf'




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
      const Textpdf = pdfText.map(pdftextcurrent =>(
        ReactHtmlParser(pdftextcurrent.pdf)
    ))
    const datatext = Textpdf
    console.log("hello datetext: ",datatext)
      const  generatePDF = () => {
        var doc = new jsPDF('p', 'pt');
        
        doc.text(20, 20, 'This is the first title.')
        doc.addFont('helvetica', 'normal')
        doc.text(20, 60, 'hello')
        doc.text(20, 100, 'This is the thrid title.')      
        
        doc.save('pdh/m-pdm.bluez.pdf')
      }

       const urlVideoLink = JSON.stringify(videoLink[0])
       
    //    const pareser = ReactHtmlParser(JsonText)
      
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
                    <Card.Link href={Textpdf}>Télecharger en pdf</Card.Link>
                  
                </Card.Body>
            </Card>

          </Col>
      </Row>
      </Container> 
  )
} 
  
export default VideoPdhm;
