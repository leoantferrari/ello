import React, {useRef, useState} from 'react';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import {useAccount} from '../Account.hooks';
import {LogoutButton} from '../buttons/LogoutButton';
import {EditAccountButton} from '../buttons/EditAccountButton';
import {Col, Image, Row} from 'react-bootstrap';
import {Link} from "react-router-dom";

const UserPopover: React.FC = () => {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    const {auth0_user, currentUser} = useAccount();

    const handleClick = (event: any) => {
        setShow(!show);
        setTarget(event.target);
    };

    const handleHide = () => {
        setShow(false);
    };

    const handleImageFade = (e: any) => {
        if (e.currentTarget && e.currentTarget.firstChild) {
            e.currentTarget.firstChild.style.opacity = '0.5';
        }
    };

    const handleImageFadeOut = (e: any) => {
        if (e.currentTarget && e.currentTarget.firstChild) {
            e.currentTarget.firstChild.style.opacity = '1';
        }
    };

    return (
        <div ref={ref}>
            <div onMouseEnter={handleImageFade} onMouseLeave={handleImageFadeOut} onClick={handleClick}
                 style={{cursor: 'pointer'}}>
                <Row className='noGutters'>
                    <Col className='text-left d-none d-sm-block'>
                        <div style={{fontSize: '14px', whiteSpace: 'nowrap', marginTop: '5px'}}>
                            <b>{currentUser.firstName + ' ' + currentUser.surName}</b>
                        </div>
                        <div style={{color: 'gray', fontSize: '13px', whiteSpace: 'nowrap', marginTop: '-5px'}}>
                            {currentUser.isBusiness ? 'Company Account' : 'User Account'}
                        </div>
                    </Col>
                    <Col>
                        <Image
                            src={auth0_user?.picture ? auth0_user.picture : ''}
                            roundedCircle
                            style={{width: '45px', height: '45px'}}
                        />
                    </Col>
                </Row>
            </div>

            <Overlay
                show={false}
                target={target}
                placement="bottom"
                container={ref}
                containerPadding={20}
                onHide={handleHide} // close when clicking outside
                rootClose
            >
                <Popover id="popover-contained" style={{maxWidth: 'none'}}>
                    <Popover.Body style={{display: 'flex', flexDirection: 'column'}}>
                        <div style={{display: 'flex', justifyContent: 'center'}}>

                            <div style={{marginRight: '1rem'}}>
                                <Link to={'/editProfile'}>
                                    <div onClick={handleHide} onMouseEnter={handleImageFade}
                                         onMouseLeave={handleImageFadeOut}>
                                        <Image
                                            src={auth0_user?.picture ? auth0_user.picture : ''}
                                            roundedCircle
                                            style={{width: '75px', height: '75px'}}
                                        />
                                    </div>
                                </Link>
                            </div>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <br/>
                                <strong>{currentUser.firstName + ' ' + currentUser.surName}</strong>
                                <div>{currentUser.email}</div>
                            </div>
                        </div>
                        <div onClick={handleHide}
                             style={{alignItems: 'flex-end', display: 'flex', justifyContent: 'flex-end'}}>
                            <div>
                                <EditAccountButton/>
                            </div>
                            <div style={{marginLeft: '5px'}}>
                                <LogoutButton/>
                            </div>
                        </div>
                    </Popover.Body>
                </Popover>
            </Overlay>

            <Overlay
                show={show}
                target={target}
                placement="bottom"
                container={ref}
                containerPadding={20}
                onHide={handleHide} // close when clicking outside
                rootClose
            >
                <Popover id="popover-contained">
                    <Popover.Body style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <Link to={'/editProfile'}>
                            <div onClick={handleHide} onMouseEnter={handleImageFade} onMouseLeave={handleImageFadeOut}>
                                <Image
                                    src={auth0_user?.picture ? auth0_user.picture : ''}
                                    roundedCircle
                                    style={{width: '75px', height: '75px', marginBottom: '1rem'}}
                                />
                            </div>
                        </Link>

                        <strong>{currentUser.firstName + ' ' + currentUser.surName}</strong>
                        {currentUser.email}
                        <br/>
                        <br/>
                        <div onClick={handleHide}
                             style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                            <EditAccountButton/>
                            <LogoutButton/>
                        </div>
                    </Popover.Body>
                </Popover>
            </Overlay>


        </div>
    );
};

export default UserPopover;
