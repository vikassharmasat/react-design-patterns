import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ErrorBoundary from "./util/error-boundary";
import { createBrowserRouter } from 'react-router-dom';
import { mainRoute } from './components/async-router/components/main';
import { booksRoute } from './components/async-router/components/books';
// import Club from './components/async-router/components/club';
import Nav from './components/async-router/components/nav';
import delay from './components/async-router/util/delay';
import { ListUser } from "./views/userDashboard/listUser";
import { TopQuotes } from "./views/top-quotes";
import { QueryClient } from "@tanstack/react-query";
import App from "./App";

const Club = lazy( () => delay( import( './components/async-router/components/club' ), 1000 ) );
const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
const queryClient = new QueryClient( {
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false, // default: true
        },
    },
} );
const router = createBrowserRouter( [
    {
        element: <Nav/>,
        children: [
            { index: true, ...mainRoute },
            { path: '/books', ...booksRoute },
            { path: '/user-list', element: <ListUser/> },
            { path: '/club', element: <Club/> },
            { path: '/posts', element: <TopQuotes/> },
        ]
    }
] )
root.render(
    <React.StrictMode>
        <ErrorBoundary fallback={ "Error at App Level" }>
            <App/>
            {/*<QueryClientProvider client={ queryClient }>
                <RouterProvider router={ router }></RouterProvider>
            </QueryClientProvider>*/ }
        </ErrorBoundary>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
