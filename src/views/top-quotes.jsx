import { useQuery } from "@tanstack/react-query";
import { fetchQuote } from "../api/quote-api";

export const TopQuotes = () => {
    const { isError, isSuccess, isLoading, data } = useQuery( {
        queryKey: [ 'posts' ],
        queryFn: fetchQuote
    } );
  
    return (
        <>
            <div>
                { isError ? "There is an error in fetching posts" : null }
                { isLoading ? "Fetching records" : null }
                {
                    isSuccess ? (
                        <div>
                            { data.map( ( res, index ) => {
                                return <div key={ index }>{ res.body }</div>
                            } ) }
                        </div>
                    ) : null
                }
            </div>
        </>
    )
}
