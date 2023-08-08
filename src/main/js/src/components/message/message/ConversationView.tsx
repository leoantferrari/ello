import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {useAccount} from "../../account/Account.hooks";
import {MessageService} from "../../../api/message/MessageService";
import {Message} from "../../../model/Message";
import {MessageInput} from "./send/MessageInput";
import {Conversation} from "../../../model/Conversation";

export const ConversationView = () => {
    const {id} = useParams();
    const {getAccessTokenSilently} = useAccount();
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
                })
            })
        }
    }, [forceUpdate])

    return<div><h3>{conversation?.title}</h3><br/>{messages?.map((message, eventIndex) => (
        <div>{message.author.firstName+": "+message.message}<br/></div>
        ))}<MessageInput onClose={()=>setForceUpdate(true)} urlEnding={id?id:''}/> </div>
}