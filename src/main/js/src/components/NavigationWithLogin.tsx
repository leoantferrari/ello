import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

// @ts-ignore
import logo from '../logo.png';
import {StatusBar} from "./account/StatusBar";


export const NavigationWithLogin = () => {
    return (
        <Navbar className="sticky-top"
                expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Brand href="/" className="ml-auto d-lg-none"><img
                    src={logo}
                    height="40"
                    className="d-inline-block align-top"
                    alt="ElloMl"
                /></Navbar.Brand>
                <Nav className="ml-auto d-lg-none">
                    <StatusBar/>
                </Nav>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
                    <Nav>
                        <Nav.Link
                            as={Link}
                            to="/">
                            Home
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link
                            as={Link}
                            to="/unknown">
                            Unknown
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link
                            as={Link}
                            to="/letters">
                            Letters
                        </Nav.Link>
                    </Nav>
                    <Navbar.Brand href="/" className="mx-auto d-none d-lg-block"><img
                        src={logo}
                        height="40"
                        className="d-inline-block align-top"
                        alt="ElloMl Logo"
                    /></Navbar.Brand>
                    <Nav className="ml-auto d-none d-lg-block">
                        <StatusBar/>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationWithLogin;