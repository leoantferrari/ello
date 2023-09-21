import {useParams} from "react-router-dom";
import React, {useEffect, useRef, useState} from "react";
import {useAccount} from "../../account/Account.hooks";
import {MessageService} from "../../../api/message/MessageService";
import {Message} from "../../../model/Message";
import {MessageInput} from "./send/MessageInput";
import {Conversation} from "../../../model/Conversation";
import InstagramReelComponent from "../reels/InstagramReel.component";
import {MessageView} from "./Message";
import {Button, Col, Container, Row} from "react-bootstrap";
import {LinkPopup} from "../../swiping/LinkPopup";

export const ConversationView = () => {
    const {id} = useParams();
    const {getAccessTokenSilently, currentUser} = useAccount();
    const [messages, setMessages] = useState<Message[]>();
    const [conversation, setConversation] = useState<Conversation>();
    const [isLoading, setIsLoading] = useState(false);
    const [forceUpdate, setForceUpdate] = useState(false);

    const [showPopUp, setShowPopUp] = useState(false)
    useEffect(()=> {
        if (id) {
            getAccessTokenSilently().then((token: string) => {
                setIsLoading(true);
                MessageService.getConversationByUrl(id,token).then((conversation) => {
                    setConversation(conversation);
                    getAccessTokenSilently().then((token: string) => {
                        MessageService.getMessagesForConversation(id,token).then((messages) => {
                            setMessages(messages);
                            setIsLoading(false);
                            setForceUpdate(true)
                            const ele = document.getElementById("scrolly");
                            if (ele) {
                                ele.scrollTop = ele.scrollHeight+10;
                            }
                        })
                    })
                })

            })
        }
    },[getAccessTokenSilently])

    useEffect(() => {
        if(forceUpdate && id) {
            getAccessTokenSilently().then((token: string) => {
                MessageService.getMessagesForConversation(id,token).then((messages) => {
                    setMessages(messages);
                    setIsLoading(false);
                    setForceUpdate(false)
                    const ele = document.getElementById("scrolly");
                    if (ele) {
                        ele.scrollTop = ele.scrollHeight+10;
                    }
                })
            })
        }
    }, [forceUpdate])
    let lastAuthor = ''
    let lastTime = 0;
    return<div><h3>{conversation?.title} <Button onClick={()=> setShowPopUp(true)}>Show Messages</Button></h3><br/>

        <Row id={'scrolly'} style={{ overflowY: 'scroll',
            whiteSpace: 'pre-wrap',
            height:'400px'}} className={"d-flex justify-content-center"}>
            <Col md="12" lg="12" xl="12">
            {messages?.map((message, eventIndex) => {
                const showAuthor = !(lastAuthor==message.author.email)
                let showTime = false;
                lastAuthor = message.author.email;
                const messageDate = new Date(message.date);
                if (messageDate.getTime()-lastTime>5 * 60 * 1000) {
                    showTime = true;
                }
                lastTime = messageDate.getTime();
                return (
                <><MessageView showAuthor={showAuthor} showTime={showTime} author={message.author.firstName} isUser={currentUser.email == message.author.email} message={message}/></>
            )})}
            </Col>
        </Row>
        <br/>
        <MessageInput onClose={()=>setForceUpdate(true)} urlEnding={id?id:''}/>
        <LinkPopup messages={messages?messages:[]} show={showPopUp} onHide={() => setShowPopUp(false)}/>
    </div>
}