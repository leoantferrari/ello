import {Route, Routes} from "react-router-dom";

import React from "react";
import {ThemeProvider} from "react-bootstrap";

import {AuthenticationGuard} from "./account/authentication/AuthenticationGuard";
import {AppLayout} from "../AppLayout";
import {NotFoundPage} from "./NotFoundPage";
import {Introduction} from "./Introduction";
import {ForbiddenPage} from "./ForbiddenPage";
import {PageLoader} from "./account/PageLoader";
import EditAccount from "./account/edit/EditAccount.component";
import CreateAccountPage from "./account/edit/CreateAccountPage.component";

export function ApplicationRouter() {
    return (
        <ThemeProvider breakpoints={['xl', 'md', 'sm', 'xs']}
                       minBreakpoint={'sm'}>
            <>
                <Routes>
                    <Route path="/" element={<AppLayout/>}>
                        <Route index element={<Introduction/>}/>
                        <Route path="/unknown" element={<AuthenticationGuard component={ForbiddenPage}/>}/>
                        <Route path="/edit-profile" element={<AuthenticationGuard component={EditAccount}/>}/>
                        <Route path="/callback" element={<PageLoader/>}/>
                        <Route path="*" element={
                            <NotFoundPage/>
                        }/>
                    </Route>
                </Routes>
            </>
        </ThemeProvider>
    );
}