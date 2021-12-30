import React from 'react';
import {Card} from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";


function Content({currentContent}) {
        return (
            <Card className=" mt-5 ">
                <Card.Header className={'text-dark'} ><h3>{currentContent.title}</h3></Card.Header>
                <Card.Body>
                    <Card.Title>{currentContent.description}</Card.Title>
                    <div className={'m-5'}>
                        <div>{ReactHtmlParser(currentContent.content)} </div>
                    </div>
                </Card.Body>
            </Card>
        );
}

export default Content;