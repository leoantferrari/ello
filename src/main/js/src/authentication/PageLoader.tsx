import React from "react";
import {Spinner} from "react-bootstrap";

export const PageLoader = () => {
    const loadingImg =
        "https://cdn.auth0.com/blog/hello-auth0/loader.svg";

    const loaderStyles = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        fontSize: "2rem",
    };

    const imgStyles = {
        width: "50px",
        height: "50px",
    };

    return (
        <div style={loaderStyles}>
            <Spinner/>
        </div>
    );
};