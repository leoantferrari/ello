import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

import logo from '../logo.png';


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

                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
                    <Nav.Link
                        as={Link}
                        to="/unknown"
                    >
                        Unknown
                    </Nav.Link>
                    <Navbar.Brand href="/" className="mx-auto d-none d-lg-block"><img
                        src={logo}
                        height="40"
                        className="d-inline-block align-top"
                        alt="ElloMl Logo"
                    /></Navbar.Brand>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationWithLogin;