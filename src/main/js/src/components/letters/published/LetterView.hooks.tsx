import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useAccount} from "../../account/Account.hooks";
import {LetterService} from "../../../api/letter/LetterService";
import {Letter} from "../../../model/Letter";

export const useLetterView = () => {
    const {id} = useParams();
    const {getAccessTokenSilently} = useAccount();
    const [letter, setLetter] = useState<Letter>({id:0,title:'',message:'',owner:{lastName:'',email:'', firstName:''},urlEnding:''})
    useEffect(() => {
        getAccessTokenSilently().then((token: string) => {
            LetterService.getLetterUrl(id ? id : "", token).then((letter) => {
                setLetter(letter);
            })
        })
    }
    ,[getAccessTokenSilently,id]);

    return {letter}
}
