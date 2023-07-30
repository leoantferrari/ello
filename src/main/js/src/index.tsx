import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import {Auth0ProviderWithNavigate} from "./authentication/Auth0Navigate.tsx";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter><Auth0ProviderWithNavigate>
            <App/>
        </Auth0ProviderWithNavigate></BrowserRouter>
    </React.StrictMode>
);

