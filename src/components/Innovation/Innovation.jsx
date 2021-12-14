import React from 'react'
import { Card, Container, Button } from 'react-bootstrap'
import { BsFillArrowRightCircleFill } from 'react-icons/bs';


function Vision() {
    return (
        <Container fluid={false}>
            <Card className=" mt-5 ">
                    <Card.Header className={'text-dark'} >
                        <h4>
                        INNOVATION 
                        </h4>

                    </Card.Header>
                    <Card.Body>
                        <Card.Title>INNOVATION</Card.Title>
                        <Card.Text className={'m-5'}>
                         <p>
                            <BsFillArrowRightCircleFill className={'mr-3'}  /> 
                            Localisation/Tracking des motards sur tout le territoire et leur changement de mentalités.  
                          </p>
                        <p> 
                            <BsFillArrowRightCircleFill className={'mr-3'} /> 
                            Renforcement économique et sécuritaire du pays.       
                        </p>
                        <p> 
                            <BsFillArrowRightCircleFill className={'mr-3'} /> 
                            Eduquer la clientèle à apprendre la culture d'épargner.  
                        </p>
                        
                        </Card.Text>
                    </Card.Body>
            </Card>
        </Container>
    )
}

export default Vision
