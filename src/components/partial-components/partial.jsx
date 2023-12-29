import React from 'react'

export default function Partial( Component, partialProps ) {
    return props => {
        return <Component {...partialProps} {...props} />
    }
}

export const Button = ( { size, color, text } ) => {
    return <button style={{
        fontSize: size === 'small' ? '8px' : '32px',
        backgroundColor: color,
        padding: '20px',
        borderRadius: '10px',
    }}>{text}</button>
}

export const RedButton = Partial( Button, { color: "crimson" } );
export const GreenButton = Partial( Button, { color: "green", size: "small" } );