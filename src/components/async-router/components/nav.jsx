import React, { Suspense } from 'react'
import { Outlet, useNavigation } from 'react-router-dom';
import { NavContainer, NavLink, LoadingMessage } from './styled-element';
export default function Nav() {
    const { state } = useNavigation();
    return (
        <>
            <NavContainer>
                <NavLink to={"/"}>Main</NavLink>
                <NavLink to={"/books"}>Books</NavLink>
                <NavLink to={"/club"}>Club</NavLink>
                {state === 'loading' && <LoadingMessage>Loading...</LoadingMessage>}
            </NavContainer >
            <Suspense fallback={<LoadingMessage>Loading...</LoadingMessage>}>
                <NavContainer>
                    <Outlet />
                </NavContainer>
            </Suspense>
        </>
    )
}
