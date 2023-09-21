import React, {useEffect, useMemo, useRef, useState} from "react";
import {Message} from "../../model/Message";
import MessageSwipeCard, {MessageSwipeInfo} from "./MessageSwipeCard.component";

type MessageSwipe = {
    messages: Message[],
}
export const ExampleStack: React.FC<MessageSwipe> = (props: MessageSwipe) => {

    const [displayMessages, setDisplayMessages] = useState<MessageSwipeInfo[]>([])
    const [currentIndex, setCurrentIndex] = useState(props.messages.length - 1)
    const [lastDirection, setLastDirection] = useState()
    // used for outOfFrame closure
    const currentIndexRef = useRef(currentIndex)

    function extractUrlsAndCreateMessage(inputString:string) {
        const urlPattern = /((?:https?|ftp):\/\/[^\s/$.?#].[^\s]*)/g;
        const urls = inputString.match(urlPattern) || [];

        const messageWithLinks = inputString.replace(urlPattern, (url) => {
            return `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`;
        });

        return { messageWithLinks, urls };
    }

    useEffect(()=> {
        const msgs:MessageSwipeInfo[] = []
        if (props.messages && props.messages.length>0) {
            props.messages.forEach((msg) => {
                const processed= extractUrlsAndCreateMessage(msg.message);
                if (processed.urls.length>0) {
                    msgs.push({message:processed.messageWithLinks,link:processed.urls[0]?processed.urls[0]:'', urlEnding:msg.urlEnding, header:''})
                }
            })
            setDisplayMessages(msgs)
        }
    },[props.messages])
    const childRefs = useMemo(
        () =>
            Array(props.messages.length)
                .fill(0)
                .map((i) => React.createRef()),
        []
    )

    const updateCurrentIndex = (val: number) => {
        setCurrentIndex(val)
        currentIndexRef.current = val
    }
    // set last direction and decrease current index
    const swiped = (direction: any, nameToDelete: any, index: number) => {
        setLastDirection(direction)
        updateCurrentIndex(index - 1)
    }

    // @ts-ignore
    return (
        <div>
            <div style={{display:"grid"}}>
                <div style={{ gridArea:"1/1/1/1"}}>No cards left</div>
                {displayMessages.map((character, index) => (
                    <div style={{ gridArea:"1/1/1/1"}}><MessageSwipeCard displayMessage={character}
                                         swipeLeft={() => swiped('left', character.message, index)}
                                         swipeRight={() => swiped('right', character.message, index)}/></div>

                ))}
            </div>
        </div>
    )
}