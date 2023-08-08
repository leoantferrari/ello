import React, {useCallback} from "react";
import {Button, Col, Form, Row, Spinner} from "react-bootstrap";
import {useEditConversation} from "./EditConversation.hooks";
import Modal from "react-bootstrap/Modal";


type EditConversationProps = {
    handleClose: () => void;
    show: boolean;
    conversationUrl?: string;
};

const EditConversation: React.FC<EditConversationProps> = ({handleClose, show, conversationUrl}) => {

    const {conversation, isLoading, conversationActions, saveConversation, validated, setValidated} = useEditConversation(show, conversationUrl);

    const handleSubmit = useCallback(
        async (event: React.FormEvent<HTMLFormElement>) => {
            const form = event.currentTarget;
            if (!form.checkValidity()) {
                event.stopPropagation();
                event.preventDefault();
                setValidated(true);
            } else {
                saveConversation(handleClose);
                event.preventDefault();
                setValidated(true);
            }
        },
        [conversation, saveConversation, handleClose]
    );

    // @ts-ignore
    return (
        <Modal centered size="lg" show={show} onHide={handleClose} backdrop="static" keyboard={false}>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Modal.Header>
                    <Modal.Title>{conversationUrl ? 'Edit Conversation' : 'Create Conversation'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <Form.Group controlId="formTitle">
                                <Form.Label className="col-sm-6">Conversation Title</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter a title"
                                    required
                                    value={conversation.title}
                                    disabled={isLoading}
                                    onChange={(e) => conversationActions.setTitle(e.target.value)}
                                />
                            </Form.Group>
                        </Col>

                    </Row>

                </Modal.Body>
                <Modal.Footer>
                    <Form.Group controlId="formButtons">
                        <Button variant="secondary" disabled={isLoading} onClick={handleClose}>
                            Close
                        </Button>{' '}
                        <Button variant="primary" type="submit">
                            {isLoading ? <Spinner size="sm"/> : 'Save'}
                        </Button></Form.Group>
                </Modal.Footer>
            </Form>
        </Modal>
    );
};

export default EditConversation;
