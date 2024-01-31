import { useEffect, useState } from "react";

const LazyLoader = ( props ) => {
    const { show = false, delay = 0 } = props;
    const [ showLoader, setShowLoader ] = useState( false )

    useEffect( () => {
        let timeout;
        if ( !show ) return setShowLoader( false );
        if ( delay === 0 ) {
            setShowLoader( true );
        } else {
            timeout = setTimeout( () => setShowLoader( true ), delay );
        }

        return () => {
            clearTimeout( timeout );
        }
    }, [ show, delay ] );

    return showLoader ? 'Loading User...' : props.default;
}

export default LazyLoader;
