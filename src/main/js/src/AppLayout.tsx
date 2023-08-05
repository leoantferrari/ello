import {Auth0ProviderWithNavigate} from "./components/account/authentication/Auth0Navigate";
import React from "react";
import {Outlet} from "react-router-dom";
import {Container} from "react-bootstrap";
import NavigationWithLogin from "./components/NavigationWithLogin";

export const AppLayout = () => {
    return (
        <Auth0ProviderWithNavigate>
            <NavigationWithLogin/>
            <Container>
                <div className="my-3">
                    <Outlet/>
                </div>
            </Container>
        </Auth0ProviderWithNavigate>
    );
}