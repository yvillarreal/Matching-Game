import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.css';
import 'hover.css/css/hover.css';
import App from './App';
import * as serviceWorkerRegistration from './pwa/serviceWorkerRegistration';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
serviceWorkerRegistration.register();