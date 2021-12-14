import React from 'react'
import { Card, Container, Button } from 'react-bootstrap'
import { BsFillArrowRightCircleFill } from 'react-icons/bs';


function Vision() {
    return (
        <Container fluid={false}>
            <Card className=" mt-5 ">
                    <Card.Header className={'text-dark'} >
                        <h4>
                        Partenaires  
                        </h4>

                    </Card.Header>
                    <Card.Body>
                        <Card.Title>Partenaires </Card.Title>
                        <Card.Text className={'m-5'}>
                         <p>
                            <BsFillArrowRightCircleFill className={'mr-3'}  /> 
                            Nyabenda jean  
                          </p>
                        <p> 
                            <BsFillArrowRightCircleFill className={'mr-3'} /> 
                            Nahimana jeannette      
                        </p>
                        <p> 
                            <BsFillArrowRightCircleFill className={'mr-3'} /> 
                            Karikurubu théodosie 
                        </p>
                        
                        </Card.Text>
                    </Card.Body>
            </Card>
        </Container>
    )
}

export default Vision
