import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
// @ts-ignore
import logo from "./logo.png";
import {Outlet} from "react-router-dom";

export const Landing = () => {

    return (
    <div>
        <Outlet/>
    </div>)
}