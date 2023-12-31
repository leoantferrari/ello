import {useAuth0} from "@auth0/auth0-react";
import React from "react";
import {Button} from "react-bootstrap";

export const LogoutButton: React.FC = () => {
    const {logout} = useAuth0();

    const handleLogout = () => {
        logout({
            logoutParams: {
                returnTo: window.location.origin,
            },
        });
    };

    return (
        <Button variant="outline-primary" onClick={handleLogout}>
            Log Out
        </Button>
    );
};