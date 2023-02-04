import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import DefaultLayout from './components/DefaultLayout';

const App = () => (
    <DefaultLayout>
        <h1>Home page future content</h1>
    </DefaultLayout>
);

ReactDOM.render(<App />, document.getElementById("app"));
