import axios from "axios";

export const axiosConn = async ( url, method, post = {} ) => {
    try {
        const { data }  = await axios[method]( url, post );
        return data;
    } catch ( err ) {
        console.log( err.message );
    }

}
