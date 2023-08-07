import {useEffect, useState} from "react";
import {useAccount} from "../../account/Account.hooks";

import {LetterService} from "../../../api/letter/LetterService";
import {Letter} from "../../../model/Letter";

export const useLetterOverview = () => {
    // states
    const [myLetters, setMyLetters] = useState<Letter[]>([]);
    const [forceReload, setIsForceReload] = useState(false);

    // hooks
    const {getAccessTokenSilently} = useAccount();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getAccessTokenSilently().then((token: string) => {
            setIsLoading(true);
            LetterService.getAllLettersForUser(token).then((letters) => {
                // @ts-ignore
                setMyLetters(letters);
                setIsLoading(false);
            });
        }).catch((error: any) => {
            setIsLoading(false);
        });
    }, []);

    useEffect(() => {
        if (forceReload) {
            setIsLoading(true);
            getAccessTokenSilently().then((token: string) => {
                setIsLoading(true);
                LetterService.getAllLettersForUser(token).then((letters) => {
                    setMyLetters(letters);
                    setIsLoading(false);
                    setIsForceReload(false);
                });
            }).catch((error: any) => {
                setIsLoading(false);
            });
        }

    }, [forceReload])

    return {
        isLoading,
        myLetters: myLetters,
        setIsForceReload
    }
}