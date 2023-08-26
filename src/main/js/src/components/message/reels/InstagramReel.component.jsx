// Your React component file
import React, {useEffect, useState} from 'react';
import {ReelsService} from "./instagramUtils";
import {Button, Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import {type} from "@testing-library/user-event/dist/type";

const InstagramReelComponent = ({primary, link, author}) => {
    const [reelData, setReelData] = useState(null);

    useEffect(()=>{
       ReelsService.getReelInfoFromLink(link).then((data) => {
            if (data) {
                setReelData(data);
            }
        })
    },[link])

    return (
        <div>
            {reelData && (
                <div style={{width:'auto'}}>
                    {primary?<sub><b><i>{author} shared:</i></b><br/></sub>:<div/>}
                    <Card>
                        <Card.Header style={{padding: 0}}>
                            <Link style={{textDecoration:'none'}} to={link}>
                                <Card variant={primary?'primary':'light'} bg={primary?'primary':'light'} to={reelData.reelLink} style={{ flexDirection: 'row', color:primary?'white':'black'}}>
                                    <Card.Img style={{  height:'15vh', width: '20vh',objectFit: 'cover' }} src={reelData.previewImage} />
                                    <Card.Body style={{ maxHeight:'15vh', wordBreak:'break-all'}} >
                                        <Card.Text style={{fontSize:'small', whiteSpace: 'pre-line',
                                            lineHeight: 1.2,
                                            maxHeight: '5em',
                                            overflow: 'hidden',
                                            textOverflow: 'truncate'}}>
                                            <b>{reelData.title}</b><br/>
                                            <p style={{wordBreak: 'break-all'}} >
                                                {reelData.description}
                                            </p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card></Link>
                        </Card.Header>
                        <Card.Body style={{ paddingLeft:'10px', paddingRight:'10px', paddingTop:'4px', paddingBottom:'4px'}}>
                                <Card.Text style={{fontSize:'small'}}>
                                    {link}
                                </Card.Text>
                        </Card.Body>
                    </Card>
                    </div>
            )}

        </div>
    );
};

export default InstagramReelComponent;
