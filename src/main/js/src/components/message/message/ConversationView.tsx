import {useParams} from "react-router-dom";
import React, {useEffect, useRef, useState} from "react";
import {useAccount} from "../../account/Account.hooks";
import {MessageService} from "../../../api/message/MessageService";
import {Message} from "../../../model/Message";
import {MessageInput} from "./send/MessageInput";
import {Conversation} from "../../../model/Conversation";
import InstagramReelComponent from "../reels/InstagramReel.component";
import {MessageView} from "./Message";
import {Col, Container, Row} from "react-bootstrap";

export const ConversationView = () => {
    const {id} = useParams();
    const {getAccessTokenSilently, currentUser} = useAccount();
    const [messages, setMessages] = useState<Message[]>();
    const [conversation, setConversation] = useState<Conversation>();
    const [isLoading, setIsLoading] = useState(false);
    const [forceUpdate, setForceUpdate] = useState(false);

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

    return<div><h3>{conversation?.title}</h3><br/>

        <Row id={'scrolly'} style={{ overflowY: 'scroll',
            whiteSpace: 'pre-wrap',
            height:'400px'}} className={"d-flex justify-content-center"}>
            <Col md="12" lg="12" xl="12">
            {messages?.map((message, eventIndex) => (
                <><MessageView author={message.author.firstName} isUser={currentUser.email == message.author.email} message={message}/></>
            ))}
            </Col>
        </Row>
        <MessageInput onClose={()=>setForceUpdate(true)} urlEnding={id?id:''}/>
    </div>
}