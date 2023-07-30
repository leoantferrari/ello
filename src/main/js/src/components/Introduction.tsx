import React, {useEffect, useState} from "react";

export const Introduction = () => {
    const [message, setMessage] = useState("");

    const domain = process.env.REACT_APP_AUTH0_DOMAIN;
    const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
    const redirectUri = process.env.REACT_APP_AUTH0_CALLBACK_URL;
    const audience = process.env.REACT_APP_AUTH0_AUDIENCE;

    useEffect(() => {
        fetch('/example')
            .then(response => response.text()).then(message=> setMessage(message))
    },[])
    let text = <p>No User logged in</p>

    return (
        <div>
            <div className="my-5">
                <h3>Hey there, something <b>new</b> is being created here! So stay tuned!</h3>
                <p>
                    {message}
                </p>
                {text}
                <p>
                    {domain}<br/>{clientId} <br/>{redirectUri}<br/> {audience}
                </p>
            </div>
            <br/>
        </div>
    );
};