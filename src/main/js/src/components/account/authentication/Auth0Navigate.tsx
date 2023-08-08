import {Auth0Provider} from "@auth0/auth0-react";
import React from "react";
import {useNavigate} from "react-router-dom";

type Props = {
    children: any,
};
export const Auth0ProviderWithNavigate = ({children}: Props) => {
    const navigate = useNavigate();

    const domain = process.env.REACT_APP_AUTH0_DOMAIN;
    const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
    const redirectUri = process.env.REACT_APP_AUTH0_CALLBACK_URL;
    const audience = process.env.REACT_APP_AUTH0_AUDIENCE;

    const onRedirectCallback = (appState: any) => {
        navigate(appState?.returnTo || window.location.pathname);
    };

    if (!(domain && clientId && redirectUri && audience)) {
        return null;
    }

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            authorizationParams={{
                audience: audience,
                redirect_uri: window.location.href.slice(0,window.location.href.indexOf(window.location.hostname)+window.location.hostname.length +(window.location.href.includes(":") ? 5:0))+"/" + "callback",
            }}
            onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    );
};