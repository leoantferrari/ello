import {useDispatch, useSelector} from "react-redux";
import {User} from "../../model/User";
import {useCallback, useEffect, useState} from "react";
import {resetUser, setUser} from "../../reducers/UserSlice";
import {useAuth0} from "@auth0/auth0-react";
import {UserService} from "../../api/user/UserService";
import {RootState} from "../../app/store";

export const useAccount = (): any => {
    const dispatch = useDispatch();
    const [isFetching, setIsFetching] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);
    const {user: auth0_user, isAuthenticated, getAccessTokenSilently} = useAuth0();

    const currentUser = useSelector((rootState: RootState) => rootState.user);
    const setCurrentUser = useCallback((user: User) => {
        dispatch(setUser(user))
    }, [dispatch, setUser]);

    const resetCurrentUser = useCallback(() => {
        dispatch(resetUser());
    }, [dispatch, resetUser]);

    useEffect(() => {
        if (isAuthenticated) {
            setIsFetching(true)
            getAccessTokenSilently().then((token) =>
                UserService.getCurrentUser(token).then((user) => {
                    if (user) {
                        setCurrentUser(user);
                        setIsRegistered(true);
                    } else {
                        resetCurrentUser();
                        setIsRegistered(false);
                    }
                    setIsFetching(false);
                }))
        } else {
            setIsRegistered(false);
        }
    }, [auth0_user, isAuthenticated, getAccessTokenSilently,setCurrentUser,resetCurrentUser])

    return {
        isFetching,
        auth0_user,
        currentUser,
        isRegistered,
        isAuthenticated,
        getAccessTokenSilently
    }

}