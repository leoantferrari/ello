import {withAuthenticationRequired} from "@auth0/auth0-react";
import React from "react";
import {PageLoader} from "./PageLoader";

type Props = {
    component: any,
};
export const AuthenticationGuard = ({component}: Props) => {
    // TODO: Rewrite to check for if the user is registered, not only authenticated
    const Component = withAuthenticationRequired(component, {
        onRedirecting: () => (
            <div className="page-layout">
                <PageLoader/>
            </div>
        ),
        returnTo: '/hello'
    });

    return <Component/>;
};