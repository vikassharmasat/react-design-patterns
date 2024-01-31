import { defaultApiStatus, IDLE } from "../constants/api-status";
import { useMemo, useState } from "react";

const capitalize = s => s.charAt( 0 ).toUpperCase() + s.slice( 1 )
const prepareStatus = ( currentStatus ) => {
    const statuses = {};
    for ( const status of defaultApiStatus ) {
        const normalizeStatus = capitalize( status.toLowerCase() );
        const normalizeStatusKey = `is${ normalizeStatus }`;
        statuses[normalizeStatusKey] = status === currentStatus;
    }
    return statuses;
}


export const useApiStatus = ( currentStatus = IDLE ) => {
    const [ status, setStatus ] = useState( currentStatus );
    const statuses = useMemo( () => prepareStatus( status ), [ status ] );
    return {
        status,
        ...statuses,
        setStatus
    }
}
