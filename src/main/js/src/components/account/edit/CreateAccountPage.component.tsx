import React from 'react';
import EditAccount from "./EditAccount.component";
import {useAccount} from "../Account.hooks";
const CreateAccountPage: React.FC = (props) => {

    const {currentUser, isRegistered, isAuthenticated} = useAccount();

    return (
        <div className="my-5">
            {isRegistered ? (<h3> Hey!! You have registered already!</h3>) : isAuthenticated ? (<div>
                <h3>
                    Hi there{currentUser?.firstName ? " " + currentUser.firstName + " " + currentUser.lastName : ""},
                </h3>
                <p>It seems like you dont have an account with us just yet. Is this information correct?</p>
                <div/>
                <EditAccount buttonText={'SignUp'}/></div>) : (<h3>Please Sign in or Sign up!</h3>)}
        </div>
    );
}

export default CreateAccountPage;