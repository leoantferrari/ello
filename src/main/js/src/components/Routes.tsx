import {Route, Routes} from "react-router-dom";

import React from "react";
import {ThemeProvider} from "react-bootstrap";

import {AuthenticationGuard} from "./account/authentication/AuthenticationGuard";
import {AppLayout} from "../AppLayout";
import {NotFoundPage} from "./NotFoundPage";
import {Introduction} from "./Introduction";
import {ForbiddenPage} from "./ForbiddenPage";

export function ApplicationRouter() {
    return (
        <ThemeProvider breakpoints={['xl', 'md', 'sm', 'xs']}
                       minBreakpoint={'sm'}>
            <>
                <Routes>
                    <Route path="/" element={<AppLayout/>}>
                        <Route index element={<Introduction/>}/>
                        <Route path="/hello" element={<AuthenticationGuard component={ForbiddenPage}/>}/>
                        <Route path="*" element={
                            <NotFoundPage/>
                        }/>
                    </Route>
                </Routes>
            </>
        </ThemeProvider>
    );
}