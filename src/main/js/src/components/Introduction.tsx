import React, {useEffect, useState} from "react";

export const Introduction = () => {
    const [message, setMessage] = useState("");

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
            </div>
            <br/>
        </div>
    );
};