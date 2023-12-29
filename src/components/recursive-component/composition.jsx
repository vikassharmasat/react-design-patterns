import React from 'react'
export const Button = ( { size, color, text } ) => {
    return <button style={{
        fontSize: size === 'small' ? '8px' : '32px',
        backgroundColor: color,
        padding: '20px',
        borderRadius: '10px',
    }}>{text}</button>
}

export const RedButton = props => <Button {...props} color="crimson" size="small" ></Button>
export const GreenButton = props => <Button {...props} color="green" ></Button>
