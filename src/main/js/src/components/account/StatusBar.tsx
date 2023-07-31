import React from "react";
import {LogoutButton} from "./LogoutButton.tsx";
import {LoginButton} from "./LoginButton.tsx";
import {useAuth0} from "@auth0/auth0-react";
import {Col} from "react-bootstrap";

export const StatusBar: React.FC = () => {
    const {isAuthenticated} = useAuth0();

    let buttonPanel = <><LoginButton/></>;

    if (isAuthenticated) {
        buttonPanel = <><LogoutButton/></>;
    }

    return <Col>{buttonPanel}</Col>
}