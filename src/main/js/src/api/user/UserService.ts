import {MakeApiRequest, REQUEST_METHOD} from "../ApiCaller";
import {User} from "../../model/User";
import {REST_URLS} from "../restUrls";

export type IUser = {
    email: string
    firstName: string,
    lastName: string,
};

function getCurrentUser(accessToken: string) {
    return MakeApiRequest<User>({url: REST_URLS.USER.user, userToken: accessToken, method: REQUEST_METHOD.GET})
}

function saveUser(userDetails: IUser, userToken: string) {
    return MakeApiRequest<User>({url: REST_URLS.USER.user, data: userDetails, method: REQUEST_METHOD.POST, userToken});
}

export const UserService = {
    saveUser,
    getCurrentUser,
}