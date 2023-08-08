export const REST_URLS = {
    USER: {
        user: 'user',
    },
    PUBLIC:
        {
            letterByUrl: (url:string) => 'public/letter/'+url,
        },
    MESSAGE:
        {
            sendMessage: 'message',
            conversation: 'message/conversation',
            conversationForUrl: (urlEnding:string) =>  'message/conversation/'+urlEnding,
            messagesForConversation:(urlEnding:string) => 'message/conversation/'+urlEnding+'/messages'
        },
    LETTER: {
        letter: 'letter',
        letterById: (letterId:number) => 'letter/id/'+letterId,
        letterByUrl: (url:string) => 'letter/url/'+url,
    },
    EXAMPLE: {
        time: 'example',
    },
};