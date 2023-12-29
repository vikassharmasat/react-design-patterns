import { useRef } from "react";

export const UnControlledComponents = () => {
    const nameRef = useRef();
    const numberRef = useRef();
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(nameRef.current?.value,'name ref')
        console.log(numberRef.current?.value,'number ref')
    }
    return (
        <>
            <form onSubmit={submitHandler} >
                <input type="text" name="name" ref={nameRef} placeholder="Type your name"/>
                <input type="number" name="age" ref={numberRef} placeholder="Enter you age"/>
                <input type="submit" value="submit"/>
            </form>
        </>
    )
}
