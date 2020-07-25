import React from "react";
import ReactDOM from "react-dom";
import ErrorBoundry from "./components/errorBoundry/ErrorBoundry";

import "./index.css";

import App from "./components/App";

ReactDOM.render(
    <ErrorBoundry>
        <App />
    </ErrorBoundry>,
    document.getElementById("root")
);
