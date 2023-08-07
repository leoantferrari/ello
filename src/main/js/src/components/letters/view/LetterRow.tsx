import {Badge, Col, Row} from "react-bootstrap";
import LetterCard from "./LetterCard";
import React, {useState} from "react";
import {RiArrowRightSLine} from "react-icons/ri";
import {Letter} from "../../../model/Letter";

type Props = {
    letters: Letter[],
    title: string,
    emptyText: string,
    disappearOnEmpty: boolean
}

export const LetterRow: React.FC<Props> = (props) => {

    const [showMore, setShowMore] = useState(false);

    function getDisplayRows(letters: Letter[]) {
        let displayEvents = letters
        if (!showMore) {
            if (displayEvents.length == 1) {
                displayEvents = letters.slice(0, 1); // Limit to 1 event if showMore is false
            } else if (displayEvents.length == 2) {
                displayEvents = letters.slice(0, 2); // Limit to 2 events if showMore is true and event count is 1 or 2
            } else if (displayEvents.length == 3) {
                displayEvents = letters.slice(0, 3); // Limit to 4 events if showMore is true and event count is more than 2
            } else if (displayEvents.length > 3) {
                displayEvents = letters.slice(0, 4);
            }
        }

        return <Row sm={1} md={2} xl={4} className="g-4"> {displayEvents.map((event, eventIndex) => (
            <LetterCard letter={event}/>
        ))}     </Row>
    }

    if (props.disappearOnEmpty && props.letters.length == 0) {
        return <></>
    }

    return <>
        <h5>
            <div className="d-flex justify-content-between">
                <div style={{cursor: 'pointer'}} onClick={() => setShowMore(!showMore)}> {props.title}
                    <RiArrowRightSLine/></div>
                <div><Badge pill>{props?.letters?.length}</Badge></div>
            </div>
        </h5>
        <div>
            {getDisplayRows(props.letters)}
            {props.letters.length == 0 && <Col style={{textAlign: "center"}} sm={12}><p>{props.emptyText}</p></Col>}
        </div>
        <br/></>
}