import {MakeApiRequest, REQUEST_METHOD} from "../ApiCaller";
import {User} from "../../model/User";
import {REST_URLS} from "../restUrls";
import {Letter} from "../../model/Letter";


function getAllLettersForUser(accessToken: string) {
    return MakeApiRequest<Letter[]>({url: REST_URLS.LETTER.letter, userToken: accessToken, method: REQUEST_METHOD.GET})
}

function getLetterId(id:number, accessToken:string) {
    return MakeApiRequest<Letter>({url: REST_URLS.LETTER.letterById(id), userToken: accessToken, method: REQUEST_METHOD.GET})
}

function getLetterUrl(url:string, accessToken:string) {
    return MakeApiRequest<Letter>({url: REST_URLS.LETTER.letterByUrl(url), userToken: accessToken, method: REQUEST_METHOD.GET})
}

function getLetterUrlPublic(url:string) {
    return MakeApiRequest<Letter>({url: REST_URLS.PUBLIC.letterByUrl(url), method: REQUEST_METHOD.GET})
}

function saveLetter(letterDetails: Letter, userToken: string) {
    return MakeApiRequest<Letter>({url: REST_URLS.LETTER.letter, data: letterDetails, method: REQUEST_METHOD.POST, userToken});
}

export const LetterService = {
    saveLetter,
    getAllLettersForUser,
    getLetterId: getLetterId,
    getLetterUrl:getLetterUrl,
    getLetterUrlPublic
}