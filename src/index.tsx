import * as React from "react";
import ReactDOM from 'react-dom';
import './index.css';
import './styles/antd/card.css';
import './styles/antd/select.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";
import {Toaster}from "react-hot-toast";


ReactDOM.render(
    <BrowserRouter>
        <App/>

        <Toaster position='top-right' />
    </BrowserRouter>,
    document.getElementById('root')
);

