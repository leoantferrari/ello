import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ApplicationRouter} from './components/Routes'
import {store} from "./app/store";

import {BrowserRouter} from "react-router-dom";
import {Auth0ProviderWithNavigate} from "./components/account/authentication/Auth0Navigate";
import {Provider} from "react-redux";

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Auth0ProviderWithNavigate>
                <ApplicationRouter/>
            </Auth0ProviderWithNavigate>
        </BrowserRouter>
    </Provider>
);

