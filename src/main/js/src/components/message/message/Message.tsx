import React from "react"
import {CardProp} from "../../../model/CardProp";
import InstagramReelComponent from "../reels/InstagramReel.component";
import {Badge, Card, Col, Row} from "react-bootstrap";
import {Message} from "../../../model/Message";

type Props = {
    message: Message,
    author:string,
    isUser:boolean,
    showAuthor:boolean,
    showTime:boolean,
}
export const MessageView: React.FC<Props> = (props) => {
    const align = props.isUser? 'end':'start';
    const bgColor = props.isUser ?'light':'primary';

    function extractUrlsAndCreateMessage(inputString:string) {
        const urlPattern = /((?:https?|ftp):\/\/[^\s/$.?#].[^\s]*)/g;
        const urls = inputString.match(urlPattern) || [];

        const messageWithLinks = inputString.replace(urlPattern, (url) => {
            return `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`;
        });

        return { messageWithLinks, urls };
    }


    const item = extractUrlsAndCreateMessage(props.message.message);

    const cardMessage = <><div className={`d-flex flex-row justify-content-${align} `}>
        <div>
            <Card bg={bgColor} style={{ width: 'auto', textAlign: align, borderRadius:'15px' }}><Card.Body style={{paddingLeft:'10px', paddingRight:'10px', paddingTop:'4px', paddingBottom:'4px'}}><Card.Text style={{textAlign:'left',fontSize:'small', color:props.isUser?'black':'white'}}>{props.message.message}</Card.Text></Card.Body></Card></div>
    </div></>


    return <><Row>
        <Col style={{textAlign:'left'}}>
            {props.isUser || !props.showAuthor ?<p className="small mb-1 text-muted" />:<p className="small mb-1"><sub>{props.message.author.firstName} {props.message.author.lastName}</sub></p>}
        </Col>
        <Col style={{textAlign:'center'}}>
            {props.showTime?<Badge className='opacity-50' style={{ paddingLeft:'4px',paddingRight:'4px', paddingBottom:'1px', paddingTop:'0px'}} bg="secondary">
                <p className="small mb-1 "><sub>{props.message.date}</sub></p>
            </Badge>:<div/>}
        </Col>
        <Col style={{textAlign:'right'}}>
            {props.isUser && props.showAuthor?<p className="small mb-1"><sub>{props.message.author.firstName} {props.message.author.lastName}</sub></p>:<p className="small mb-1 text-muted" />}
        </Col>
    </Row>{item.urls.length>0?<div className={`d-flex flex-row justify-content-${align} `} style={{ margin: '4px 0' }}><InstagramReelComponent message={item.messageWithLinks} author={props.message.author.firstName} link={item.urls[0]} primary={!props.isUser}/></div>:cardMessage}</>
}