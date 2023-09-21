import Card from 'react-bootstrap/Card';
import React, {useEffect, useState} from "react";
import {Badge, Container} from "react-bootstrap";
import {BsCalendar} from "react-icons/bs";
import {Swiper} from "./Swiper.component";
import {Message} from "../../model/Message";
import {MessageInput} from "../message/message/send/MessageInput";
import {ReelsService} from "../message/reels/instagramUtils";

type ReelInfo = {
    title: string,
    description: string,
    previewImage:string,
    reelLink: string
}
export type MessageSwipeInfo = {
    message:string,
    header:string,
    urlEnding:string,
    link:string
}
type MessageSwipe = {
    displayMessage: MessageSwipeInfo,
    swipeLeft: () => void,
    swipeRight: () => void
}
const MessageSwipeCard: React.FC<MessageSwipe> = (props: MessageSwipe) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [reelData, setReelData] = useState<ReelInfo>({reelLink:"", description:"",previewImage:"",title:""});

    useEffect(() => {
        ReelsService.getReelInfoFromLink(props.displayMessage.link).then((data) => {
            if (data) {
                setReelData(data);
            } else {
                setReelData({title: "", description: props.displayMessage.message, previewImage: "", reelLink: ""})
            }
        })
        setCurrentImage(0)
    }, [props.displayMessage]);

    const [swipeAnimation, setSwipeAnimation] = useState(false);

    function extractUrlsAndCreateMessage(inputString:string) {
        const urlPattern = /((?:https?|ftp):\/\/[^\s/$.?#].[^\s]*)/g;
        const urls = inputString.match(urlPattern) || [];

        const messageWithLinks = inputString.replace(urlPattern, (url) => {
            return `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`;
        });

        return { messageWithLinks, urls };
    }


    const item = extractUrlsAndCreateMessage(props.displayMessage.message);


    return (
        <Swiper onSwipeLeft={props.swipeLeft} onSwipeRight={props.swipeRight} contents={<Card>
            <Card.Img
                width={'100vw'}
                height={'500vh'}
                style={{objectFit: 'cover'}}
                variant="top"
                src={reelData.previewImage}
                alt="Card image"
            />
            <Container>
                <br/>
                <Card.Title className="justify-content-between">
                    <div className="d-flex justify-content-between">
                        <div>{reelData.title}</div>
                    </div>
                </Card.Title>
                <Card.Text>{reelData.description}<br/>
                    {props.displayMessage.message}
                </Card.Text>
                <br/>
                <div>
                   <MessageInput urlEnding={props.displayMessage.urlEnding} onClose={()=>console.log("lol")}/>
                </div>
                <br/>
            </Container>
        </Card>}/>

    );
}

export default MessageSwipeCard;