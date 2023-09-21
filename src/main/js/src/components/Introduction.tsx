import React, {useEffect, useState} from "react";
import {LoginButton} from "./account/buttons/LoginButton";
import {LogoutButton} from "./account/buttons/LogoutButton";
import {useAuth0} from "@auth0/auth0-react";

import MessageSwipeCard from "./swiping/MessageSwipeCard.component";
import MessageStack from "./swiping/MessageStack";
import {ExampleStack} from "./swiping/ExampleStack";

export const Introduction = () => {
    const {user} = useAuth0();

    let text = <p>No User logged in</p>
    if (user?.email) {
        text = <p>Hi there {user.email}</p>
    }

    return (
        <div>
          <ExampleStack messages={[{message:'hello', author:{firstName:"leo", email:"dfa", lastName:"fas"},date:'23', liked:true, id:2, urlEnding:'adfasf'},{message:'hello', author:{firstName:"leo", email:"dfa", lastName:"fas"},date:'23', liked:true, id:2, urlEnding:'adfasf'},{message:'hello', author:{firstName:"leo", email:"dfa", lastName:"fas"},date:'23', liked:true, id:2, urlEnding:'adfasf'},{message:'hello', author:{firstName:"leo", email:"dfa", lastName:"fas"},date:'23', liked:true, id:2, urlEnding:'adfasf'}]}/>
            <MessageStack messages={[{message:'hello', author:{firstName:"leo", email:"dfa", lastName:"fas"},date:'23', liked:true, id:2, urlEnding:'adfasf'}, {message:'hello', author:{firstName:"leo", email:"dfa", lastName:"fas"},date:'23', liked:true, id:2, urlEnding:'adfasf'}]} />
            <div className="my-5">
                <h3>Hey there, something <b>new</b> is being created here! So stay tuned!</h3>
                {text}
                <br/>
                <p> {user?.email ? <LogoutButton/> : <LoginButton/>}</p>
            </div>
            <br/>
        </div>
    );
};