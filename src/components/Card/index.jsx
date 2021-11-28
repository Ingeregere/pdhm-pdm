import { Card, Col, Container, Row,Button } from 'react-bootstrap';
import moto2 from '../../assets/images/2.jpg'
import moto4 from '../../assets/images/4.jpg'
import moto7 from '../../assets/images/7.jpg'

function CardProduct() {
  return (
    <Container fluid className={'mt-5'}>
    <Row>
      <Col>
      <Card style={{ width: '18rem' }} className={'mb-3'}>
  <Card.Img variant="top" src={moto2} />
  <Card.Body>
    <Card.Title  className={'text-primary'}>Business Plan</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">En savoir plus</Button>
  </Card.Body>
</Card>
      </Col>
      <Col>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={moto4} />
  <Card.Body>
    <Card.Title  className={'text-primary'}>Règlement</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">En savoir plus</Button>
  </Card.Body>
</Card>
      </Col>
      <Col>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={moto7} />
  <Card.Body>
    <Card.Title  className={'text-primary'}>Historique</Card.Title>
    <Card.Text >
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">En savoir plus</Button>
  </Card.Body>
</Card>
      </Col>
      <Col>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={moto2} />
  <Card.Body>
    <Card.Title className={'text-primary'}>Manuel de procedure</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">En savoir plus</Button>
  </Card.Body>
</Card>
      </Col>
    </Row>
  </Container>
  
  );
}

export default CardProduct;
