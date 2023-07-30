import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Auth0ProviderWithNavigate} from "./components/account/Auth0Navigate.tsx";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter><Auth0ProviderWithNavigate><App/></Auth0ProviderWithNavigate>

        </BrowserRouter>
    </React.StrictMode>
);

