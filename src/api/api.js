import axios from "axios";

const axiosParams = {
    baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : '/',
}

const axiosInstance = axios.create( axiosParams );

const api = ( axios ) => {
    return {
        get: ( url, config = {} ) => axios.get( url, config ),
        delete: ( url, config = {} ) => axios.get( url, config ),
        post: ( url, body, config = {} ) => axios.get( url, body, config ),
        put: ( url, body, config = {} ) => axios.get( url, body, config ),
        patch: ( url, body, config = {} ) => axios.get( url, body, config ),
    }
}

export default api( axiosInstance );
