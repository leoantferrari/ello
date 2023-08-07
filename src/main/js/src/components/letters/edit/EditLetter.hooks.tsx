import {useCallback, useEffect, useState} from "react";

import {LetterService} from "../../../api/letter/LetterService"
import {useDispatch} from "react-redux";
import {useAccount} from "../../account/Account.hooks";
import {AxiosError} from "axios";

export type LetterActionProps = {
    setTitle: (title: string) => void,
    setMessage: (message: string) => void,

}

export type  LetterProps = {
    title: string,
    message: string,
}

type EditLetterProps = {
    saveLetter: (handleClose: () => void) => void,
    letterActions: LetterActionProps,
    letter: LetterProps,
    isLoading: boolean,
    setValidated: (valid: boolean) => void,
    validated: boolean,
}
export const useEditLetter = (show: boolean, letterId?: number): EditLetterProps => {
    const dispatch = useDispatch();

    // Account Info
    const {getAccessTokenSilently, currentUser} = useAccount();

    const [existingLetter, setExistingLetter] = useState({
        id: 0,
        title: '',
        message: '',
        urlEnding: ''
    })

    // fields to fill in
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');

    const [validated, setValidated] = useState(false);

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (show) {
            setValidated(false);
            if (letterId) {
                setIsLoading(true);
                getAccessTokenSilently().then((token: string) => {
                    // @ts-ignore
                    LetterService.getLetterId(letterId,token).then((letter) => {
                        setExistingLetter(letter);
                        setTitle(letter.title);
                        setMessage(letter.message);
                        setIsLoading(false)
                    })
                })
            } else {
                setTitle('');
                setMessage('');
            }
        }
    }, [letterId, show])

    const saveLetter = useCallback((handleClose: () => void) => {
        if (title && message) {
            setIsLoading(true);
            getAccessTokenSilently().then((token: string) => {
                LetterService.saveLetter({
                    id: letterId ? letterId : 0,
                    title,
                    message,
                    urlEnding: existingLetter.urlEnding&&existingLetter.urlEnding!=''?existingLetter.urlEnding:'',
                    owner: currentUser,
                }, token).then((letter) => {
                    setExistingLetter(letter);
                    setIsLoading(false);
                    handleClose();
                }).catch((reason: AxiosError) => {
                    // @ts-ignore
                    setIsLoading(false)
                })
            });
        }
    }, [title, message])

    const letterActions = {
        setTitle,
        setMessage
    }

    const letter = {
        title,
        message
    }

    return {
        isLoading: isLoading,
        saveLetter,
        letterActions,
        letter,
        setValidated,
        validated
    }
}