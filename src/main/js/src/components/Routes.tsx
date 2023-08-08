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
import {Landing} from "../Landing";
import {ConversationOverview} from "./message/ConversationOverview.component";
import {ConversationOverviewPage} from "./message/ConversationOverviewPage";
import {ConversationView} from "./message/message/ConversationView";

export function ApplicationRouter() {
    return (
        <ThemeProvider breakpoints={['xl', 'md', 'sm', 'xs']}
                       minBreakpoint={'sm'}>
            <>
                <Routes>
                    <Route path="/" element={<Landing/>}>
                        <Route path="/view" element={<Landing/>}>
                            <Route path="/view/:id" element={<LetterView/>}/>
                        </Route>
                        <Route path="/" element={<AppLayout/>}>
                            <Route index element={<Introduction/>}/>
                            <Route path="/unknown" element={<AuthenticationGuard component={ForbiddenPage}/>}/>
                            <Route path="/edit-profile" element={<AuthenticationGuard component={EditAccountWrapper}/>}/>
                            <Route path="/callback" element={<PageLoader/>}/>
                            <Route path="/letters" element={<AuthenticationGuard component={LetterOverviewPage}/>}/>
                            <Route path="/letters" element={<AuthenticationGuard component={LetterOverviewPage}/>}/>
                            <Route path="/letter/:id" element={<LetterView/>}/>
                            <Route path="/conversations" element={<AuthenticationGuard component={ConversationOverviewPage}/>}/>
                            <Route path="/conversation/:id" element={<AuthenticationGuard component={ConversationView}/>}/>
                            <Route path="/*" element={
                                <NotFoundPage/>
                            }/>
                        </Route>

                    </Route>

                </Routes>
            </>
        </ThemeProvider>
    );
}