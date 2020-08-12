import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Admin from './admin'
// import Home from './pages/route_demo/Home'
import Home1 from './pages/route_demo/router2/Home1'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
        <Home1/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
