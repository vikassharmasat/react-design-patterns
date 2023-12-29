import React, { useId } from 'react'

export default function UseId() {
    const id = useId();
    return (
        <>
            <label htmlFor={`${id}-email`}>Email</label>
            <input type="text" name='email' id={`${id}-email`} placeholder='type your email' />
            <label htmlFor={`${id}-name`}>Name</label>
            <input type="text" name='name' id={`${id}-name`} placeholder='type your name' />
        </>
    )
}
