import React from "react";
import {Card, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import {Swiper} from "../swiping/Swiper.component";


interface LetterCardProps {
    title:string,
    message:string,
    link:string
}

const ViewCard: React.FC<LetterCardProps> = (props) => {

    return (
        <Col>
            <Swiper contents={<Card>
                <Link style={{textDecoration: 'none'}} to={props.link}>
                    <Card.Body>
                        <div className="d-flex justify-content-between">
                            <Card.Title>
                                <div>{props.title}</div>
                            </Card.Title>
                        </div>
                        <Card.Subtitle
                            style={{fontSize: 12, color: 'gray'}}> {props.message}</Card.Subtitle>
                    </Card.Body>
                </Link>
            </Card>}/>
        </Col>
    );
}

export default ViewCard;
