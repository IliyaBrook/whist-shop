import React from 'react';
import store from './redux/store'
import AppRouter from './AppRouter';
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom';
import './index.css';


ReactDOM.render(
    <Provider store={store}>
        <AppRouter/>
    </Provider>,
    document.getElementById('root')
);
