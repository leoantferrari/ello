import React from "react"
import {CardProp} from "../../../model/CardProp";
import InstagramReelComponent from "../reels/InstagramReel.component";
import {Card, Col, Row} from "react-bootstrap";
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

    const isValidUrl = (urlString:string)=> {
        var urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
            '(\\#[-a-z\\d_]*)?$','i'); // validate fragment locator
        return !!urlPattern.test(urlString);
    }

    const cardMessage = <><div className={`d-flex flex-row justify-content-${align} `}>
        <div>
            <Card bg={bgColor} style={{ width: 'auto', textAlign: align, borderRadius:'15px' }}><Card.Body style={{paddingLeft:'10px', paddingRight:'10px', paddingTop:'4px', paddingBottom:'4px'}}><Card.Text style={{textAlign:'left',fontSize:'small', color:props.isUser?'black':'white'}}>{props.message.message}</Card.Text></Card.Body></Card></div>
    </div></>


    return <><Row>
        <Col style={{textAlign:'left'}}>
            {props.isUser || !props.showAuthor ?<p className="small mb-1 text-muted" />:<p className="small mb-1"><sub>{props.message.author.firstName} {props.message.author.lastName}</sub></p>}
        </Col>
        <Col style={{textAlign:'center'}}>
            <p className="small mb-1 text-muted"><sub>{props.message.date}</sub></p>
        </Col>
        <Col style={{textAlign:'right'}}>
            {props.isUser && props.showAuthor?<p className="small mb-1"><sub>{props.message.author.firstName} {props.message.author.lastName}</sub></p>:<p className="small mb-1 text-muted" />}
        </Col>
    </Row>{isValidUrl(props.message.message)?<div className={`d-flex flex-row justify-content-${align} `} style={{ margin: '4px 0' }}><InstagramReelComponent author={props.message.author.firstName} link={props.message.message} primary={!props.isUser}/></div>:cardMessage}</>
}