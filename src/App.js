import './App.css';
import React from "react";
import {Provider} from "react-redux";
import Navigation from "./layout/Navigation";
import {BrowserRouter} from "react-router-dom";

const App = ({store, basename}) => {

    return (
        <Provider store={store}>
            <BrowserRouter basename={basename}>
                <Navigation/>
            </BrowserRouter>
        </Provider>
    );
}
export default App;
