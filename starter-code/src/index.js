import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import { BrowserRouter as Router } from 'react-router-dom'

import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';


ReactDOM.render(
    <Router>
        <App />
    </Router>, document.getElementById('root'));


// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
