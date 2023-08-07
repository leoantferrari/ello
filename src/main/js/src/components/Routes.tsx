import {Route, Routes} from "react-router-dom";

import React from "react";
import {ThemeProvider} from "react-bootstrap";

import {AuthenticationGuard} from "./account/authentication/AuthenticationGuard";
import {AppLayout} from "../AppLayout";
import {NotFoundPage} from "./NotFoundPage";
import {Introduction} from "./Introduction";
import {ForbiddenPage} from "./ForbiddenPage";
import {PageLoader} from "./account/PageLoader";
import EditAccountWrapper from "./account/edit/EditAccountWrapper.component";
import {LetterOverviewPage} from "./letters/LetterOverviewPage";
import LetterView from "./letters/published/LetterView.component";

export function ApplicationRouter() {
    return (
        <ThemeProvider breakpoints={['xl', 'md', 'sm', 'xs']}
                       minBreakpoint={'sm'}>
            <>
                <Routes>
                    <Route path="/" element={<AppLayout/>}>
                        <Route index element={<Introduction/>}/>
                        <Route path="/unknown" element={<AuthenticationGuard component={ForbiddenPage}/>}/>
                        <Route path="/edit-profile" element={<AuthenticationGuard component={EditAccountWrapper}/>}/>
                        <Route path="/callback" element={<PageLoader/>}/>
                        <Route path="/letters" element={<AuthenticationGuard component={LetterOverviewPage}/>}/>
                        <Route path="/letters" element={<AuthenticationGuard component={LetterOverviewPage}/>}/>
                        <Route path="/letter/:id" element={<LetterView/>}/>
                        <Route path="*" element={
                            <NotFoundPage/>
                        }/>
                    </Route>
                </Routes>
            </>
        </ThemeProvider>
    );
}