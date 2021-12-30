import React, {useState, useEffect} from 'react'
import AllServices from './services'
import {  Container } from 'react-bootstrap'
import ContentPage from "../contentPage";


function HistoriqueContent() {
    const [content, setContent] = useState([])

    const getAllContent = () =>{
        AllServices.getAllServices().then((response) =>{
            setContent(response.data)
        })
    }
    useEffect(() => {
        getAllContent()
    }, [])

    return (

        <Container fluid={false}>
            { content && content.map(currentContent =>(
                <ContentPage currentContent={currentContent}  key={currentContent.id}/>
            ))}
        </Container>
    )
}

export default HistoriqueContent
