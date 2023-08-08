import React, {useState} from "react";
import {Button} from "react-bootstrap";
import {BsPlus} from "react-icons/bs";
import EditConversation from "./edit/EditConversation.component";
import {ConversationOverview} from "./ConversationOverview.component";

export const ConversationOverviewPage = () => {
    const [show, setShow] = useState(false);
    return <div>
        <div style={{display: "flex", justifyContent: "space-between"}}>
            <h3>Conversations</h3>
            <Button variant="outline-primary" onClick={()=>setShow(!show)}>
                <BsPlus size={20} style={{marginRight: "5px", marginBottom: "3px"}}/>Create Conversation
            </Button>
        </div>
        <p>Please have a look at your Conversations:</p>
        <div>
            <ConversationOverview/>
        </div>
        <EditConversation handleClose={()=>setShow(!show)} show={show}/>
    </div>
}