import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import authReducer from "./store/reducers/authReducer";
import {createStore} from "redux";

const store = createStore(authReducer)

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>

    </React.StrictMode>,
    document.getElementById('root')
);

