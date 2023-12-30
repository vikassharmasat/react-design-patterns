import React, { Suspense } from 'react'
import { Await, useLoaderData, defer } from 'react-router-dom'
import { MainContainer, MainHeading } from './styled-element';
import delay from '../util/delay';

const Main = () => {

    const { promise } = useLoaderData();

    return (
        <MainContainer>
            <MainHeading>Main -{" "}
                <Suspense fallback="fetching...">
                    <Await resolve={promise}>
                        {( data ) => data}
                    </Await>
                </Suspense>
            </MainHeading>
        </MainContainer >
    )
}

function loader() {
    return defer( { promise: delay( "Fetched Data", 1000 ) } );
}

export const mainRoute = { element: <Main />, loader };
