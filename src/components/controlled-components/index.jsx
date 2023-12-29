import { useRef, useState } from "react";

export const ControlledComponents = () => {

    const [ getName, setName ] = useState( '' );
    const [ getAge, setAge ] = useState( 0 );

    return (
        <>
            {getName}
            <input type="text" name="name" value={ getName } placeholder="Type your name"
                   onChange={ e => setName( e.target.value ) }/>
            {getAge}
            <input type="number" name="age" value={ getAge } placeholder="Enter you age"
                   onChange={ e => setAge( e.target.value ) }/>
        </>
    )
}
