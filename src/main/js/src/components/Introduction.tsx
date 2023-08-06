import React, {useEffect, useState} from "react";
import {LoginButton} from "./account/buttons/LoginButton";
import {LogoutButton} from "./account/buttons/LogoutButton";
import {useAuth0} from "@auth0/auth0-react";

export const Introduction = () => {
    const [message, setMessage] = useState("");
    const {user} = useAuth0();

    useEffect(() => {
        fetch('api/example')
            .then(response => response.text()).then(message => setMessage(message))
    }, [])
    let text = <p>No User logged in</p>
    if (user?.email) {
        text = <p>Hi there {user.email}</p>
    }

    return (
        <div>
            <div className="my-5">
                <h3>Hey there, something <b>new</b> is being created here! So stay tuned!</h3>
                <p>
                    {message}
                </p>
                {text}
                <br/>
                <p> {user?.email ? <LogoutButton/> : <LoginButton/>}</p>
            </div>
            <br/>
        </div>
    );
};