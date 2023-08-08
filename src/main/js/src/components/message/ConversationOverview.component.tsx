import React from "react";
import {useConversationOverview} from "./ConversationOverview.hooks";
import {Button, Col, Row} from "react-bootstrap";
import {CardRow} from "../card/CardRow";
import {TbReload} from "react-icons/tb";
import {PageLoader} from "../account/PageLoader";

export const ConversationOverview = () => {
    const { userConversations, isLoading, setIsForceReload } = useConversationOverview();

    if(isLoading)
        return <PageLoader/>

    return <div>
        <CardRow title={'Your Conversations'} cards={userConversations.map((conversation) => {return {title:conversation.title, message:conversation.urlEnding, link:'../conversation/'+conversation.urlEnding}})} emptyText={'No Convos'}
                 disappearOnEmpty={false}/>
        <div style={{display: "flex", justifyContent: "space-between"}}>
            <div/>
            <Button onClick={() => setIsForceReload(true)} variant="outline-primary">
                <TbReload size={20} style={{marginRight: "5px", marginBottom: "3px"}}/>Reload Page
            </Button>
        </div>
    </div>
}