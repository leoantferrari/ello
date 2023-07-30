import {useAuth0} from "@auth0/auth0-react";
import React from "react";
import {Button} from "react-bootstrap";

export const LoginButton: React.FC = () => {
    const {loginWithRedirect} = useAuth0();

    const handleLogin = async () => {
        await loginWithRedirect({
            appState: {
                returnTo: "/",
            },
            authorizationParams: {
                prompt: "login",
            },
        });
    };

    return (
        <Button onClick={handleLogin}>
            Log In
        </Button>
    );
};
