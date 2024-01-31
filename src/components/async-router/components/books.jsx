import React, { Suspense } from 'react'
import { Await, defer, useAsyncValue, useLoaderData } from 'react-router-dom';
import { MainHeading } from './styled-element';
import delay from '../util/delay';

const Books = () => {
    const { bookCount, authors } = useLoaderData();
    return (
        <div>
            <MainHeading>Books</MainHeading>
            <p><strong>Available Books :</strong>
                <Suspense fallback='Fetch...'>
                    <Await resolve={ authors }>
                        <BooksCount/>
                    </Await>
                </Suspense>
            </p>
            <p><strong>Authors :</strong>
                <Suspense fallback='Fetch...'>
                    <Await resolve={ bookCount }>{ data => data }</Await>
                </Suspense>
            </p>
        </div>
    )
}

const BooksCount = () => {
    return useAsyncValue();
}

function loader() {
    const bookCount = delay( 10, 1000 );
    const authors = delay( "CodeLicks", 2000 );
    return defer( { authors, bookCount } );
}

export const booksRoute = { element: <Books/>, loader }

