import {useAuth0} from "@auth0/auth0-react";
import React from "react";
import {Button} from "react-bootstrap";

export const SignUpButton: React.FC = () => {
    const {loginWithRedirect} = useAuth0();

    const handleSignUp = async () => {
        await loginWithRedirect({
            appState: {
                returnTo: "/signup",
            },
            authorizationParams: {
                prompt: "login",
                screen_hint: "signup",
            },
        });
    };


    return (
        <Button variant="outline-light" onClick={handleSignUp}>
            Sign Up
        </Button>
    );
};
