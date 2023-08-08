import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useAccount} from "../../account/Account.hooks";
import {LetterService} from "../../../api/letter/LetterService";
import {Letter} from "../../../model/Letter";

export const useLetterView = () => {
    const {id} = useParams();
    const [letter, setLetter] = useState<Letter>({id:0,title:'',message:'',owner:{lastName:'',email:'', firstName:''},urlEnding:''})
    useEffect(() => {
        LetterService.getLetterUrlPublic(id ? id : "").then((letter) => {
            setLetter(letter);
        })
    }
    ,[id]);

    return {letter}
}
