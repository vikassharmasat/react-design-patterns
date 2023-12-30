import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ErrorBoundary from "./util/error-boundary";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { mainRoute } from './components/async-router/components/main';
import { booksRoute } from './components/async-router/components/books';
// import Club from './components/async-router/components/club';
import Nav from './components/async-router/components/nav';
import delay from './components/async-router/util/delay';

const Club = lazy( () => delay( import( './components/async-router/components/club' ), 1000 ) );
const root = ReactDOM.createRoot( document.getElementById( 'root' ) );

const router = createBrowserRouter( [
    {
        element: <Nav />,
        children: [
            { index: true, ...mainRoute },
            { path: '/books', ...booksRoute },
            { path: '/club', element: <Club /> },
        ]
    }
] )
root.render(
    <React.StrictMode>
        <ErrorBoundary fallback={"Error at App Level"}>
            {/* <App /> */}
            <RouterProvider router={router}></RouterProvider>
        </ErrorBoundary>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
