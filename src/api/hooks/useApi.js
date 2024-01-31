import { useState } from "react";
import { useApiStatus } from "../useApiStatus";
import { ERROR, PENDING, SUCCESS } from "../../constants/api-status";

export const UseApi = ( fn, config = {} ) => {

    const { initialData } = config;
    const [ data, setData ] = useState( null );
    const [ error, setError ] = useState( null );
    const { status, setStatus, ...normalizedStatuses } = useApiStatus();

    const exec = async ( ...args ) => {
        try {
            setStatus( PENDING );
            const data = fn( ...args );
            setData( data );
            setStatus( SUCCESS );

            return {
                data,
                error: null
            }
        } catch ( err ) {
            setStatus( ERROR );
            setError( err )
            return {
                error: err,
                data: null
            }
        }

    }

    return {
        data,
        status,
        exec,
        ...normalizedStatuses

    }
}
