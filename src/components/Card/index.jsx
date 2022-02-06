import React,{useState,useEffect} from 'react'
import AllServices from './services'
import { Card, Col, Container, Row,Button } from 'react-bootstrap';
import './style.css'
import { Link } from 'react-router-dom';

function CardProduct() {
  const [historique, setHistorique] = useState([])
  const [reglement, setReglement] = useState([])
  const [businessplan, setBusinessPlan] = useState([])
  const [procedure, setProcedure] = useState([])



  const getHistorique = () =>{
    AllServices.getHistorique().then((response)=>{
      setHistorique(response.data)
    })
  }
  const getProcedure = () =>{
    AllServices.getManueldeprocedure().then((response)=>{
      setProcedure(response.data)
    })
  }

  const getBusinness = () =>{
    AllServices.getBusinnessPlan().then((response)=>{
      setBusinessPlan(response.data)
    })
  }

  const getReglement = () =>{
    AllServices.getReglement().then((response)=>{
      setReglement(response.data)
    })
  }
  useEffect(() => {
    getProcedure()
    getBusinness()
    getHistorique()
    getReglement()
  }, [])
  return (
    <Container fluid className={'mt-5'}>
      <h3>Nos activités</h3>
    <Row>
      <Col sm={3} >
      <Card style={{ width: '18rem' }} className={'mb-2 mt-2 mr-2 ml-2'} >
      {businessplan && businessplan.map(businness=>(
           <div key={businness.id}>
               <Card.Img 
               alt={businness.title}
               variant="top"
               src={`https://admin.pdhm-pdm.com/images/proprieties/${businness.image}`}
                />
              <Card.Body>
                <Card.Title  className={'text-primary'}>{businness.title}</Card.Title>
                <Card.Text >
                  {businness.description.length > 50 ?
                      `${businness.description.substring(0, 50)}...` : businness.description
                  }
                </Card.Text>
                <Link to={'/Businness-plan'}> <Button variant="primary">En savoir plus</Button></Link>
              </Card.Body>
           </div>
         ))}
      </Card>
      </Col>
      <Col sm={3} >
      <Card style={{ width: '18rem' }} className={'mb-2 mt-2 mr-2 ml-2'} >
      {reglement && reglement.map(Regle=>(
           <div key={Regle.id}>
               <Card.Img 
               alt={Regle.title}
               variant="top"
               src={`https://admin.pdhm-pdm.com/images/proprieties/${Regle.image}`}
                />
              <Card.Body>
                <Card.Title  className={'text-primary'}>{Regle.title}</Card.Title>
                <Card.Text >
                  {Regle.description.length > 50 ?
                      `${Regle.description.substring(0, 50)}...` : Regle.description
                  }
                </Card.Text>
                <Link to={'/Règlement'}> <Button variant="primary">En savoir plus</Button></Link>
              </Card.Body>
           </div>
         ))}
      </Card>
      </Col>
      <Col sm={3} >
      <Card style={{ width: '18rem' }} className={'mb-2 mt-2 mr-2 ml-2'} >
         {historique && historique.map(history=>(
           <div key={history.id}>
               <Card.Img 
               alt={history.title}
               variant="top"
               src={`https://admin.pdhm-pdm.com/images/proprieties/${history.image}`}
                />
              <Card.Body>
                <Card.Title  className={'text-primary'}>{history.title}</Card.Title>
                <Card.Text >
                  {history.description.length > 50 ?
                      `${history.description.substring(0, 50)}...` : history.description
                  }
                </Card.Text>
                <Link to={'/Historique'}> <Button variant="primary">En savoir plus</Button></Link>
              </Card.Body>
           </div>
         ))}
      </Card>
      </Col>
      <Col sm={3} >
      <Card style={{ width: '18rem' }} className={'mb-2 mt-2 mr-2 ml-2'} >
         {procedure && procedure.map(proceduremanuel=>(
           <div key={proceduremanuel.id}>
               <Card.Img 
               alt={proceduremanuel.title}
               variant="top"
               src={`https://admin.pdhm-pdm.com/images/proprieties/${proceduremanuel.image}`}
                />
              <Card.Body>
                <Card.Title  className={'text-primary'}>{proceduremanuel.title}</Card.Title>
                <Card.Text >
                  {proceduremanuel.description.length > 50 ?
                      `${proceduremanuel.description.substring(0, 50)}...` : proceduremanuel.description
                  }
                </Card.Text>
                <Link to={'/Procedure'}> <Button variant="primary">En savoir plus</Button></Link>
              </Card.Body>
           </div>
         ))}
      </Card>
      </Col>
    </Row>
  </Container>
  
  );
}

export default CardProduct;
