import {useCallback, useEffect, useState} from "react";

import {useDispatch} from "react-redux";
import {useAccount} from "../../account/Account.hooks";
import {AxiosError} from "axios";
import {Conversation} from "../../../model/Conversation";
import {MessageService} from "../../../api/message/MessageService";

export type ConversationActionProps = {
    setTitle: (title: string) => void

}

export type  ConversationProps = {
    title: string
}

type EditConversationProps = {
    saveConversation: (handleClose: () => void) => void,
    conversationActions: ConversationActionProps,
    conversation: ConversationProps,
    isLoading: boolean,
    setValidated: (valid: boolean) => void,
    validated: boolean,
}
export const useEditConversation = (show: boolean, conversationUrl?: string): EditConversationProps => {
    const dispatch = useDispatch();

    // Account Info
    const {getAccessTokenSilently, currentUser} = useAccount();

    const [existingConversation, setExistingConversation] = useState({
        title: '',
        urlEnding: ''
    })

    // fields to fill in
    const [title, setTitle] = useState('');

    const [validated, setValidated] = useState(false);

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (show) {
            setValidated(false);
            if (conversationUrl) {
                setIsLoading(true);
                getAccessTokenSilently().then((token: string) => {
                    // @ts-ignore
                    MessageService.getConversationByUrl(conversationURL,token).then((conversation) => {
                        setExistingConversation(conversation);
                        setTitle(conversation.title);
                        setIsLoading(false)
                    })
                })
            } else {
                setTitle('');
            }
        }
    }, [conversationUrl, show])

    const saveConversation = useCallback((handleClose: () => void) => {
        if (title) {
            setIsLoading(true);
            getAccessTokenSilently().then((token: string) => {
                MessageService.saveConversation({
                    title,
                    urlEnding: existingConversation.urlEnding&&existingConversation.urlEnding!=''?existingConversation.urlEnding:'',
                    owner: currentUser,
                }, token).then((conversation:Conversation) => {
                    setExistingConversation(conversation);
                    setIsLoading(false);
                    handleClose();
                }).catch((reason: AxiosError) => {
                    // @ts-ignore
                    setIsLoading(false)
                })
            });
        }
    }, [title])

    const conversationActions = {
        setTitle
    }

    const conversation = {
        title
    }

    return {
        isLoading: isLoading,
        saveConversation,
        conversationActions,
        conversation,
        setValidated,
        validated
    }
}