import React from "react";
import {Outlet} from "react-router-dom";
import {useAccount} from "../account/Account.hooks";
import CreateAccountPage from "../account/edit/CreateAccountPage.component";

export const ProtectedOutlet: React.FC = () => {
    const {isRegistered, isAuthenticated} = useAccount();
    let sign = <Outlet/>
    if (isAuthenticated && !isRegistered) {
        sign = <CreateAccountPage/>

    }
    return <div>{sign}</div>
}
