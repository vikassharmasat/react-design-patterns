import React, { useCallback, useRef, useState } from 'react'

export default function UseCallBackAsRef() {

    const [show, setShow] = useState( false );
    const inputRef = useRef();

    const inputRefCallback = useCallback( ( input ) => {
        inputRef.current = input;
        if ( !input ) return;
        input.focus()
    }, [] );

    return (
        <>
            <button onClick={() => setShow( s => !s )}>{show ? 'hide' : 'show'}</button>
            {show ? <input type="text" ref={inputRefCallback} /> : <></>}
        </>
    )
}
