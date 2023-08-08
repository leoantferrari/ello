import {MakeApiRequest, REQUEST_METHOD} from "../ApiCaller";
import {User} from "../../model/User";
import {REST_URLS} from "../restUrls";
import {Letter} from "../../model/Letter";
import {Conversation} from "../../model/Conversation";
import {Message} from "../../model/Message";


function getAllConversationsForUser(accessToken: string) {
    return MakeApiRequest<Conversation[]>({url: REST_URLS.MESSAGE.conversation, userToken: accessToken, method: REQUEST_METHOD.GET})
}

function getConversationByUrl(url:string, accessToken:string) {
    return MakeApiRequest<Conversation>({url: REST_URLS.MESSAGE.conversationForUrl(url), userToken: accessToken, method: REQUEST_METHOD.GET})
}

function getMessagesForConversation(url:string, accessToken:string) {
    return MakeApiRequest<Message[]>({url: REST_URLS.MESSAGE.messagesForConversation(url), userToken: accessToken, method: REQUEST_METHOD.GET})
}

function saveConversation(conversationInfo: Conversation, userToken: string) {
    return MakeApiRequest<Conversation>({url: REST_URLS.MESSAGE.conversation, data: conversationInfo, method: REQUEST_METHOD.POST, userToken});
}

function sendMessage(messageInfo: Message, userToken: string) {
    return MakeApiRequest<Conversation>({url: REST_URLS.MESSAGE.sendMessage, data: messageInfo, method: REQUEST_METHOD.POST, userToken});
}

export const MessageService = {
    saveConversation,
    sendMessage,
    getMessagesForConversation,
    getConversationByUrl,
    getAllConversationsForUser
}