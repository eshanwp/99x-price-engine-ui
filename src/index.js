import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "../src/redux/store";
import {setupAxios} from "./redux/_axios/Interceptor";
import axios from "axios";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBarTop from "./layout/AppBarTop";
import PageFooter from "./layout/PageFooter";

setupAxios(axios);
const {PUBLIC_URL} = process.env;

ReactDOM.render(
    <React.StrictMode>
        <CssBaseline/>
        <AppBarTop/>
        <main>
            <App store={store} basename={PUBLIC_URL}/>
        </main>
        <PageFooter/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
