import {Input} from "./input";
import { useRef } from "react";

export const PrintInput = () => {
    const inputRef  = useRef();
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inputRef.current?.value,'ref value')
    }
    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <Input ref={inputRef}/>
                <button >submit</button>
            </form>
        </>
    )
}
