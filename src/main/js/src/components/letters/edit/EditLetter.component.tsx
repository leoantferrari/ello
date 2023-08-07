import React, {useCallback} from "react";
import {Button, Col, Form, Row, Spinner} from "react-bootstrap";
import {useEditLetter} from "./EditLetter.hooks";
import Modal from "react-bootstrap/Modal";


type EditLetterProps = {
    handleClose: () => void;
    show: boolean;
    letterId?: number;
};

const EditLetter: React.FC<EditLetterProps> = ({handleClose, show, letterId}) => {

    const {letter, isLoading, letterActions, saveLetter, validated, setValidated} = useEditLetter(show, letterId);

    const handleSubmit = useCallback(
        async (event: React.FormEvent<HTMLFormElement>) => {
            const form = event.currentTarget;
            if (!form.checkValidity()) {
                event.stopPropagation();
                event.preventDefault();
                setValidated(true);
            } else {
                saveLetter(handleClose);
                event.preventDefault();
                setValidated(true);
            }
        },
        [letter, saveLetter, handleClose]
    );

    // @ts-ignore
    return (
        <Modal centered size="lg" show={show} onHide={handleClose} backdrop="static" keyboard={false}>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Modal.Header>
                    <Modal.Title>{letterId ? 'Edit Letter' : 'Create Letter'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <Form.Group controlId="formTitle">
                                <Form.Label className="col-sm-6">Letter Title</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter a title"
                                    required
                                    value={letter.title}
                                    disabled={isLoading}
                                    onChange={(e) => letterActions.setTitle(e.target.value)}
                                />
                            </Form.Group>




                            <Form.Group style={{marginTop: '10px'}} controlId="formBasicDescription">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    placeholder="Enter a message"
                                    required
                                    disabled={isLoading}
                                    value={letter.message}
                                    onChange={(e) => letterActions.setMessage(e.target.value)}
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

export default EditLetter;
