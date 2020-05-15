// Write your Character component here

import React from "react";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Col,
} from "reactstrap";

const Character = (props) => {
    return (
        <Col>
            <div className='wrapper'>
                <div>
                    <h1>{props.characterData.name}</h1>
                </div>
                <Card className='container' style={{ width: "105%" }}>
                    <CardBody>
                        <CardTitle>{props.characterData.name}</CardTitle>
                        <CardSubtitle>
                            {props.characterData.species}
                        </CardSubtitle>
                        <CardText>{props.characterData.gender}</CardText>
                    </CardBody>
                    <CardImg
                        top
                        width='100%'
                        src={props.characterData.image}
                        alt='Card image cap'
                    />
                </Card>
            </div>
        </Col>
    );
};
export default Character;
