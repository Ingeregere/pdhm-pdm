import React,{useState} from 'react'
import './styles.css'
import AllServices from './services'
import { Form, Button, Container, Row,Alert, Col, FloatingLabel } from 'react-bootstrap';


function Contact() {
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState()
    const [mobile, setMobile] = useState([])
    const [province, setProvince] = useState('')
    const [commune, setCommune] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState('')

   
    const saveUserProfile = (event) =>{
        event.preventDefault();
        const data = {name,lastname,email, mobile, province, commune, message}
        AllServices.postContact(data)
            .then(response=>{
                console.log('New contact is sent', response.data)
                setSuccess(response.data.message)
                setError('')
                setName('')
                setLastname('')
                setEmail('')
                setProvince('')
                setCommune('')
                setMobile('')
                setMessage('')

            })
            .catch(error =>{
                console.log('something went wrong', error)
                setError('true')
                setSuccess('')
            })

    }
    const showSuccess = () => (

        <Alert className={"alert-success"} style={{ display: success ? '' : 'none' }}>
            <strong> <center>{success} {' '}</center> </strong>
        </Alert>
    )

    const showError = () => (

        <Alert className={"alert-danger"} style={{ display: error ? '' : 'none' }}>
            <strong><center>Veiller complète tous les champs</center></strong>
        </Alert>
    )
    
    
    return (
        <Container className={'bgContact p-5 mr-5'}>
            <h1 className={'text-center text-light'}>Formulaire de Contact</h1>
            <div className={'bg-light wrappercontact w-75 p-5'}>
            <Form className={''}>
            <span>{showError()}</span>
            <span>{showSuccess()}</span>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail" className={'mt-3'}>
                    <Form.Label>Nom</Form.Label>
                    <Form.Control 
                    type="text"
                     placeholder="Entrer le nom" 
                     value={name}
                      onChange={(e) => setName(e.target.value)}
                     />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword" className={'mt-3'}>
                    <Form.Label>Prénom</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Entrer le prénom" 
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail" >
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                    type="email" 
                    placeholder="Entrer l' email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                     />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control 
                    type="tel" 
                    placeholder="Entrer le numéro" 
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Province</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Entrer province"
                    value={province}
                    onChange={(e) => setProvince(e.target.value)}
                     />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Commune</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="entrer Commune" 
                    value={commune}
                    onChange={(e) => setCommune(e.target.value)}
                    />
                    </Form.Group>
                    <FloatingLabel controlId="floatingTextarea2" label="Commentaire" className={'mt-5'}>
                        <Form.Control
                        as="textarea"
                        placeholder="Laisse un commentaire ici"
                        style={{ height: '100px' }}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        />
                    </FloatingLabel>
                </Row>
        

        <Button variant="primary" type="submit" className={'mb-5 mx-5'} onClick={(event) => saveUserProfile(event)}>
            Envoyer
        </Button>
</Form>
</div>

        </Container>
        
    )
}

export default Contact
