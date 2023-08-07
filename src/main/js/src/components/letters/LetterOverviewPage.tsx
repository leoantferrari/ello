import React, {useState} from "react";
import EditLetter from "./edit/EditLetter.component";
import {Button} from "react-bootstrap";
import LetterOverviewComponent from "./view/LetterOverview.component";
import {BsPlus} from "react-icons/bs";

export const LetterOverviewPage = () => {
    const [show, setShow] = useState(false);
    return <div>
        <div style={{display: "flex", justifyContent: "space-between"}}>
            <h3>Letters</h3>
            <Button variant="outline-primary" onClick={()=>setShow(!show)}>
                <BsPlus size={20} style={{marginRight: "5px", marginBottom: "3px"}}/>Create Letter
            </Button>
        </div>
        <p>Please have a look at your Letters:</p>
        <div>
            <LetterOverviewComponent/>
        </div>
        <EditLetter handleClose={()=>setShow(!show)} show={show}/>
    </div>
}