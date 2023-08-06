import {Link} from "react-router-dom";
import React from "react";
import {Button} from "react-bootstrap";

export const EditAccountButton: React.FC = () => {

    return (
        <Link to={'/edit-profile'}><Button variant="outline-secondary">
            Edit
        </Button></Link>
    );
};