import {Button, Form, InputGroup} from "react-bootstrap";
import React, {useCallback, useState} from "react";
import {LetterService} from "../../../../api/letter/LetterService";
import {AxiosError} from "axios";
import {MessageService} from "../../../../api/message/MessageService";
import {useAccount} from "../../../account/Account.hooks";
import {BiSend} from "react-icons/bi";

// @ts-ignore
export const MessageInput = ({urlEnding, onClose}) => {
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const {getAccessTokenSilently,currentUser} = useAccount();

    const handleKeyPress = (event: { key: string; }) => {
        if (event.key === 'Enter' && message.trim() !== '') {
            saveLetter();
        }
    }

    const saveLetter = useCallback(() => {
        if (message) {
            setIsLoading(true);
            getAccessTokenSilently().then((token: string) => {
                MessageService.sendMessage({
                    id: 0,
                    message,
                    urlEnding,
                    liked:false,
                    date:'',
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
        <InputGroup className="text-muted d-flex justify-content-start align-items-center p-12">
            <Form.Control
                placeholder="Message"
                required
                disabled={isLoading}
                onKeyDown={handleKeyPress}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <Button onClick={saveLetter} variant="primary"><BiSend/></Button>
        </InputGroup>
    </div>
}