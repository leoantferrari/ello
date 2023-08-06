import {Auth0ProviderWithNavigate} from "./components/account/authentication/Auth0Navigate";
import React from "react";

import {Container} from "react-bootstrap";
import NavigationWithLogin from "./components/NavigationWithLogin";
import {ProtectedOutlet} from "./components/util/ProtectedOutlet";

;

export const AppLayout = () => {

    return (
        <Auth0ProviderWithNavigate>
            <NavigationWithLogin/>
            <Container>
                <div className="my-3">
                    <ProtectedOutlet/>
                </div>
            </Container>
        </Auth0ProviderWithNavigate>
    );
}