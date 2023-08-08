import {useAccount} from "../account/Account.hooks";
import {useEffect, useState} from "react";
import {MessageService} from "../../api/message/MessageService";
import {Conversation} from "../../model/Conversation";
import {useParams} from "react-router-dom";
import {LetterService} from "../../api/letter/LetterService";

export const useConversationOverview = () => {
    const {getAccessTokenSilently} = useAccount();
    const [forceReload, setIsForceReload] = useState(false);

    const [userConversations, setUserConversations] = useState<Conversation[]>([]);

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getAccessTokenSilently().then((token: string) => {
            setIsLoading(true);
            MessageService.getAllConversationsForUser(token).then((conversations:Conversation[])=> {
                setUserConversations(conversations);
                setIsLoading(false);
                setIsForceReload(false)
            })
        }).catch((error: any) => {
            setIsLoading(false);
        });
    }, []);

    useEffect(() => {
        if (forceReload) {
            setIsLoading(true);
            getAccessTokenSilently().then((token: string) => {
                setIsLoading(true);
                MessageService.getAllConversationsForUser(token).then((conversations:Conversation[])=> {
                    setUserConversations(conversations);
                    setIsLoading(false);
                    setIsForceReload(false);
                })
            }).catch((error: any) => {
                setIsLoading(false);
            });
        }

    }, [forceReload])

    return {
        userConversations,
        isLoading,
        setIsForceReload
    }
}