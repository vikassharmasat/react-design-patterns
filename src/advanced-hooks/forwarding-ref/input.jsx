import {forwardRef} from "react";

const CustomInput = (props,ref) => {
    // throw new Error('error level')
    return (
        <>
            <input type="text" ref={ref} { ...props }/>
        </>
    )
}

export const Input  = forwardRef(CustomInput);
