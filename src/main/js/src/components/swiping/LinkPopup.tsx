import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import {Button} from "react-bootstrap";
import {Message} from "../../model/Message";
import {ExampleStack} from "./ExampleStack";


type LinkPopupProps = {
    messages: Message[],
    show: boolean,
    onHide: Function
}
export const LinkPopup: React.FC<LinkPopupProps> = (props: LinkPopupProps) => {
    const [show, setShow] = useState(false);

    return <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={props.show}
    >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Modal heading
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <ExampleStack messages={props.messages}/>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={()=>props.onHide()}>Close</Button>
        </Modal.Footer>
    </Modal>
}