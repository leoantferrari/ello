import {Route, Routes} from "react-router-dom";

import React from "react";
import {ThemeProvider} from "react-bootstrap";

import {AuthenticationGuard} from "./account/AuthenticationGuard.tsx";
import {AppLayout} from "../AppLayout.tsx";
import {NotFoundPage} from "./NotFoundPage.tsx";
import {Introduction} from "./Introduction.tsx";
import {ForbiddenPage} from "./ForbiddenPage.tsx";

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