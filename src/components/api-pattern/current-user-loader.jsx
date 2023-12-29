import React, { useEffect, useState } from "react";
import { axiosConn } from "../../util/util";

export const CurrentUserLoader = ( { renderItem ,url} ) => {

    const [ resource, setResource ] = useState( null);
    // const [ resource, setResource ] = useState( [] );

    useEffect( () => {
        axiosConn( url, 'get' ).then( res => setResource( [res] ) );
    }, [] );

    return renderItem(resource)
 /*   return (
        <>
            {
             /!*   React.Children.map( children, ( child ) => {
                    if ( React.isValidElement( child ) && resource.length>0 ) {
                        React.cloneElement( child, { resource } )
                    }
                    return child;
                } )*!/
                 renderItem( resource )
                // resource.length > 0 && resource.map((res,i) => <React.Fragment key={i}>{ renderItem( { ...{ [sourceName]: res } } ) }</React.Fragment>)
            }
        </>
    )*/
}
