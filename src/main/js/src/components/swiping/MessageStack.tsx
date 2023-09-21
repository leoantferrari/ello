import React, {useEffect, useState} from "react";
import {Message} from "../../model/Message";
import MessageSwipeCard from "./MessageSwipeCard.component";
import {current} from "@reduxjs/toolkit";

type MessageSwipe = {
    messages: Message[],
}
const MessageStack: React.FC<MessageSwipe> = (props: MessageSwipe) => {

    const [remainingMessages, setRemainingMessages] = useState<Message[]>([])

    const [currentIndex, setCurrentIndex] = useState(-1);

    useEffect(()=> {
        if (props.messages.length>0) {
            setRemainingMessages(props.messages)
            setCurrentIndex(0)
        }
    }, [props.messages])


    function changeIndex() {
        if (props.messages.length!=currentIndex) {
            setCurrentIndex(currentIndex+1);
        } else {
            setCurrentIndex(-1);
        }
    }

    let currentMessage = undefined;

    if (currentIndex>-1) {
        currentMessage = remainingMessages[currentIndex]
    }




    return (
        <div>
           </div>
    )

}
export default MessageStack;