import React from 'react'
import { Card, Container, Button } from 'react-bootstrap'
import { BsFillArrowRightCircleFill } from 'react-icons/bs';


function Vision() {
    return (
        <Container fluid={false}>
            <Card className=" mt-5 ">
                    <Card.Header className={'text-dark'} >
                        <h4>Mission :
                        renforcement économique et sécuritaire du pays
                        La création d’emploi, le changement de mentalité et sécurité professionnelle des motards.

                        </h4>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>Objectifs : mobiliser et former plusieurs motards sur tout le territoire du Burundi ;</Card.Title>
                        <Card.Text className={'m-5'}>
                         <p>
                            <BsFillArrowRightCircleFill className={'mr-3'}  /> 
                            Soutenir les motards et les sensibiliser à faire leurs épargnes envie d’obtenir des crédits pour réaliser leurs propres projets. 
                            Le renforcement économique et sécuritaire du pays ;  
                          </p>
                        <p> 
                            <BsFillArrowRightCircleFill className={'mr-3'} /> 
                            promouvoir le changement de comportement à travers le renforcement économique parmi les motards ;
                            -Soigner les motards, assistance juridique, mobiliser les motards d’être patriotiques;
                        </p>
                        <p> 
                            <BsFillArrowRightCircleFill className={'mr-3'} /> 
                            Soigner les motards, assistance juridique, mobiliser les motards d’être patriotiques;
                        </p>
                        <p> 
                            <BsFillArrowRightCircleFill className={'mr-3'} /> 
                            Assurer la sécurité des motards et des citoyens en général. 
                        </p>
                        </Card.Text>
                    </Card.Body>
            </Card>
        </Container>
    )
}

export default Vision
