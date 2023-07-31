import React from "react";
import {Spinner} from "react-bootstrap";

export const PageLoader = () => {

    const loaderStyles = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        fontSize: "2rem",
    };

    return (
        <div style={loaderStyles}>
            <Spinner/>
        </div>
    );
};