import {Badge, Col, Row} from "react-bootstrap";
import React, {useState} from "react";
import {RiArrowRightSLine} from "react-icons/ri";
import {CardProp} from "../../model/CardProp";
import ViewCard from "./ViewCard";

type Props = {
    cards: CardProp[],
    title: string,
    emptyText: string,
    disappearOnEmpty: boolean
}

export const CardRow: React.FC<Props> = (props) => {

    const [showMore, setShowMore] = useState(false);

    function getDisplayRows(cards: CardProp[]) {
        let displayCards = cards
        if (!showMore) {
            if (displayCards.length == 1) {
                displayCards = cards.slice(0, 1); // Limit to 1 event if showMore is false
            } else if (displayCards.length == 2) {
                displayCards = cards.slice(0, 2); // Limit to 2 events if showMore is true and event count is 1 or 2
            } else if (displayCards.length == 3) {
                displayCards = cards.slice(0, 3); // Limit to 4 events if showMore is true and event count is more than 2
            } else if (displayCards.length > 3) {
                displayCards = cards.slice(0, 4);
            }
        }

        return <Row sm={1} md={2} xl={4} className="g-4"> {displayCards.map((cardProp, eventIndex) => (
            <ViewCard title={cardProp.title} link={cardProp.link} message={cardProp.message}/>
        ))}     </Row>
    }

    if (props.disappearOnEmpty && props.cards.length == 0) {
        return <></>
    }

    return <>
        <h5>
            <div className="d-flex justify-content-between">
                <div style={{cursor: 'pointer'}} onClick={() => setShowMore(!showMore)}> {props.title}
                    <RiArrowRightSLine/></div>
                <div><Badge pill>{props?.cards?.length}</Badge></div>
            </div>
        </h5>
        <div>
            {getDisplayRows(props.cards)}
            {props.cards.length == 0 && <Col style={{textAlign: "center"}} sm={12}><p>{props.emptyText}</p></Col>}
        </div>
        <br/></>
}