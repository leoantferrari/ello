export const REST_URLS = {
    USER: {
        user: 'user',
    },
    PUBLIC:
        {
            letterByUrl: (url:string) => 'public/letter/'+url,
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