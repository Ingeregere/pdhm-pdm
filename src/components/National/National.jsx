import React from 'react'
import { Card, Container, Button } from 'react-bootstrap'
import { BsFillArrowRightCircleFill } from 'react-icons/bs';


function Vision() {
    return (
        <Container fluid={false}>
            <Card className=" mt-5 ">
                    <Card.Header className={'text-dark'} ><h3>Vision du PDH/M-PDM</h3></Card.Header>
                    <Card.Body>
                        <Card.Title>Vision du PDH/M-PDM</Card.Title>
                        <Card.Text className={'m-5'}>
                         <p>
                            <BsFillArrowRightCircleFill className={'ml-3'}  /> Mettre en marche une industrie organisée et professionnalisée avec des  sources soutenues des revenues qui contribuent au développement national en général et prévenir la solution aux problèmes vécus par la jeunesse motocycliste/motards: le chômage, 
                                le vol, les meurtres, les accidents routiers, diminution des jeunes chômeurs  dans le pays. 
                          </p>
                        <p> 
                            <BsFillArrowRightCircleFill className={'ml-3'} /> Créer de l’emploi et changer la mentalité des Motards.
                        </p>
                        </Card.Text>
                    </Card.Body>
            </Card>
        </Container>
    )
}

export default Vision
