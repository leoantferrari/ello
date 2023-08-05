import axios, {AxiosResponse} from "axios";

export enum REQUEST_METHOD {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
}

const SERVER_URL = process.env.REACT_APP_API_SERVER_URL;

export interface IApiCallerParams {
    url: string;
    method: REQUEST_METHOD;
    data?: any;
    body?: any
    userToken?: string;
    params?: Record<string, any>;
    onFail?: (error: { id: string; message: string }) => void;
}

export async function MakeApiRequest<DATA>({
                                               url,
                                               method,
                                               data,
                                               userToken,
                                               params,
                                               onFail,
                                               body,
                                           }: IApiCallerParams): Promise<DATA> {

    const fullUrl = `${SERVER_URL}/${url}${params ? "?" + new URLSearchParams(params) : ""
    }`;

    const headers = {
        "Content-Type": body ? "multipart/form-data" : "application/json",
        Authorization: "",
    };

    if (userToken) {
        headers.Authorization = `Bearer ${userToken}`;
    }

    let config = {
        url: fullUrl,
        method: method,
        headers: headers,
        data: data ? data : null,
    }

    if (body) {
        // @ts-ignore
        config = {
            url: fullUrl,
            method: method,
            headers: headers,
            data: body
        };
    }


    try {
        const response: AxiosResponse = await axios(config);
        return response.data;


    } catch (error: any) {
        console.error('An error occurred:', error);
        onFail?.({id: `${error.request.status}`, message: error.message});
        throw error;
    }

}
