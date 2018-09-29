import * as React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
const jsx = (
    <Router>
        <App />
    </Router>
);
const app = document.getElementById( "app" );
hydrate( jsx, app );
