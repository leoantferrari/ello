import {Button, Form} from "react-bootstrap";
import React, {useCallback, useState} from "react";
import {LetterService} from "../../../../api/letter/LetterService";
import {AxiosError} from "axios";
import {MessageService} from "../../../../api/message/MessageService";
import {useAccount} from "../../../account/Account.hooks";

// @ts-ignore
export const MessageInput = ({urlEnding, onClose}) => {
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const {getAccessTokenSilently,currentUser} = useAccount();

    const saveLetter = useCallback(() => {
        if (message) {
            setIsLoading(true);
            getAccessTokenSilently().then((token: string) => {
                MessageService.sendMessage({
                    id: 0,
                    message,
                    urlEnding,
                    liked:false,
                    author: currentUser,
                }, token).then((letter) => {
                    setIsLoading(false);
                    setMessage("");
                    onClose();
                }).catch((reason: AxiosError) => {
                    // @ts-ignore
                    setIsLoading(false)
                })
            });
        }
    }, [message])

    return <div>
        <Form >
            <Form.Group controlId="formMessageInput">
                <Form.Label>Your Message</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Message"
                    required
                    disabled={isLoading}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </Form.Group>
            <Button onClick={saveLetter}>Send</Button>
        </Form>

    </div>
}