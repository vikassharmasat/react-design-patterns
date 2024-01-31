import api from './api'

const URLS = {
    fetchUsersUrl: "posts"
}
export const fetchQuote = async () => {
    const { data } = await api.get( URLS.fetchUsersUrl, { baseURL: "https://jsonplaceholder.typicode.com/" } );
    return data;
};

