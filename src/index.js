import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ErrorBoundary from "./util/error-boundary";
import { RouterProvider, createBrowseRouter } from 'react-router-dom';
const root = ReactDOM.createRoot( document.getElementById( 'root' ) );

// const router = createBrowseRouter( [
//     {
//         element: <Nav />
//     }
// ] )
root.render(
    <React.StrictMode>
        <ErrorBoundary fallback={"Error at App Level"}>
            <App />
        </ErrorBoundary>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
