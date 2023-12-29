import React, { useState } from "react";

export const UnControlledFlow = ( { children, onDone } ) => {

    const [ currentIndex, setCurrentIndex ] = useState( 0 );
    const [ data, setData ] = useState( null );
    const goNext = () => {
        setCurrentIndex( currentIndex+1 );
    }
    const CurrentChild = React.Children.toArray( children )[currentIndex];
    if ( React.isValidElement( CurrentChild ) ) {
        return React.cloneElement( CurrentChild, { goNext } )
    }
    return "No Component Exist";
}
