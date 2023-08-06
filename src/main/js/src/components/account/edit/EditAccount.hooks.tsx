import {useCallback, useEffect, useState} from "react";
import {useAccount} from "../Account.hooks";
import {UserService} from "../../../api/user/UserService";
import {useDispatch} from "react-redux";
import {setUser} from "../../../reducers/UserSlice";

export type UserActionsProps = {
    setFirstName: (accountType: string) => void,
    setLastName: (accountType: string) => void,
    setEmail: (accountType: string) => void,
}

export type UserProps = {
    firstName: string,
    lastName: string,
    email: string,
}
type EditAccountProps = {
    saveUser: () => void,
    userActions: UserActionsProps,
    user: UserProps,
    isRegistered: boolean,
    isLoading: boolean,
    setEditing: (editing: boolean) => void,
    editing: boolean,
}
export const useEditAccount = (hasEditButton: boolean): EditAccountProps => {
    const dispatch = useDispatch();

    // Account Info
    const {
        isFetching,
        auth0_user,
        currentUser,
        isRegistered,
        isAuthenticated,
        getAccessTokenSilently,
    } = useAccount();

    // fields to fill in
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    const [editing, setEditing] = useState(true);


    useEffect(() => {
        if (hasEditButton) {
            setEditing(false);
        }
        if (!isRegistered && isAuthenticated) {
            if (auth0_user?.email) {
                setEmail(auth0_user.email)
            }
            if (auth0_user?.given_name) {
                setFirstName(auth0_user.given_name)
            }
            if (auth0_user?.family_name) {
                setLastName(auth0_user?.family_name)
            }
        }
        if (isRegistered && isAuthenticated) {
            setEmail(currentUser.email);
            setFirstName(currentUser.firstName)
            setLastName(currentUser.lastName)
        }

    }, [auth0_user, currentUser, isRegistered, isAuthenticated, hasEditButton])

    const saveUser = useCallback(() => {
        if (firstName && lastName && email) {
            setIsLoading(true);
            getAccessTokenSilently().then((token: string) => {
                UserService.saveUser({
                    firstName: firstName.trim(),
                    lastName: lastName.trim(),
                    email: email.trim(),
                }, token).then((user) => {
                    setIsLoading(false);
                    dispatch(setUser(user));
                    if (!isRegistered) {
                        window.history.pushState(null, '', '/');
                        window.history.go();
                    }
                })
            });
        }
    }, [dispatch, firstName, lastName, email, getAccessTokenSilently])

    const userActions = {
        setFirstName,
        setLastName,
        setEmail,
    }

    const user = {
        firstName,
        lastName,
        email,
    }

    return {
        isLoading: isLoading || isFetching,
        saveUser,
        userActions,
        user,
        isRegistered: isRegistered || currentUser.id > 0,
        setEditing,
        editing
    }
}