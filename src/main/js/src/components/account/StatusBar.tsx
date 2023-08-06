import React from "react";
import {LogoutButton} from "./buttons/LogoutButton";
import {LoginButton} from "./buttons/LoginButton";
import {SignUpButton} from "./buttons/SignUpButton";
import {useAccount} from "./Account.hooks";
import {Col} from "react-bootstrap";
import UserPopover from "./popover/UserPopover";

export const StatusBar: React.FC = () => {
    const {isFetching, isAuthenticated, isRegistered} = useAccount();

    let sign = <div></div>;
    let buttonPanel = <><LoginButton/>{' '}<SignUpButton/></>;

    if (isAuthenticated) {
        buttonPanel = <></>;
    }

    if (isRegistered) {
        sign = <UserPopover/>;
    }

    if (isAuthenticated && !isRegistered) {
        sign = <>Please <u>Register!</u></>
        buttonPanel = <LogoutButton/>
    }


    return isFetching ? <div/> : <Col>{sign}{' '}{buttonPanel}</Col>
}