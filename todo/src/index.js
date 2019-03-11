import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './reducers/index.js'
import './index.css';
import App from './App';


const store = createStore(todoApp);


ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>, document.getElementById('root'));

