import React from "react";
import {Badge, Card, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import {BsPeopleFill} from "react-icons/bs";
import {Letter} from "../../../model/Letter";


interface LetterCardProps {
    letter: Letter;
}

const LetterCard: React.FC<LetterCardProps> = (props) => {

    const letter = props.letter;


    return (
        <Col>
            <Card>
                <Link style={{textDecoration: 'none'}} to={'../letter/' + props.letter.urlEnding}>
                    <Card.Body>
                        <div className="d-flex justify-content-between">
                            <Card.Title>
                                <div>{props.letter?.title}</div>
                            </Card.Title>
                        </div>
                        <Card.Subtitle
                            style={{fontSize: 12, color: 'gray'}}> {props.letter.message}</Card.Subtitle>
                    </Card.Body>
                </Link>
            </Card>
        </Col>
    );
}

export default LetterCard;
