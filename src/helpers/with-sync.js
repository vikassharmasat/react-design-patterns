const withSync = async ( fn ) => {
    if ( typeof fn !== 'function' ) {
        throw new Error( 'Invalid function type' );
    }
    try {
        let { data } = await fn();
        return {
            data,
            error: null
        }
    } catch ( err ) {
        return {
            err,
            data: null
        }
    }

}
export default withSync;
