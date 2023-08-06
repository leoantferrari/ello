import React, {useCallback, useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {useEditAccount} from "./EditAccount.hooks";
import {PageLoader} from "../PageLoader";


type Props = {
    buttonText?: string,
    hasEditButton?: boolean
}
const EditAccount: React.FC<Props> = ({buttonText, hasEditButton}: Props) => {
    const {editing, setEditing, userActions, user, saveUser, isLoading, isRegistered} = useEditAccount(!!hasEditButton);

    const [validated, setValidated] = useState(false);

    const saveAction = useCallback(async (event: any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            saveUser();
        }
        event.preventDefault();
        setValidated(true);
    }, [saveUser]);


    let editButton = <></>;
    let saveButton = <></>;

    if (hasEditButton) {
        editButton = <> {' '} <Button className="float-end" variant={editing ? 'secondary' : 'primary'}
                                      onClick={() => setEditing(!editing)}>
            {editing ? 'Cancel' : 'Edit'}
        </Button></>
    }

    if ((hasEditButton && editing) || !hasEditButton) {
        saveButton = <Button className="float-end" variant="primary" type="submit" disabled={isLoading}>
            {buttonText ? buttonText : 'Save'}
        </Button>
    }

    return isLoading ? (<PageLoader/>) : (
        <Form noValidate validated={validated} onSubmit={saveAction}>
            <Form.Group controlId="formBasicFirstName">
                <Form.Label className="col-sm-6">First Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter first name"
                    required
                    disabled={isLoading || !editing}
                    value={user.firstName}
                    onChange={(e) => userActions.setFirstName(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="formBasicLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter LastName"
                    required
                    disabled={isLoading || !editing}
                    value={user.lastName}
                    onChange={(e) => userActions.setLastName(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    required
                    disabled={isRegistered || isLoading || !editing}
                    value={user.email}
                    onChange={(e) => userActions.setEmail(e.target.value)}
                />
            </Form.Group>
            <Row>
                <Col>
                    {saveButton}
                    {editButton}
                </Col>
            </Row>

        </Form>);
}

export default EditAccount;