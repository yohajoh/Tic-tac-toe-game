
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StrictMode } from "react";
import "./main.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <App />
    </StrictMode>
)