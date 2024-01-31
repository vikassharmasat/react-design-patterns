import LazyLoader from "../../components/common/lazy-loader";
import { LoadUserList } from "./user";


export const ListUser = () => {
    const { user, isIdle, isPending, isSuccess, isError, initFetchUsers } = LoadUserList();

    return (
        <>
            <ul>

                <button
                    onClick={ initFetchUsers }>
                    <LazyLoader delay={ 500 }
                                show={ isPending }
                                default={ "Fetch Users" }/>
                </button>
                { isSuccess && user?.map( ( it, i ) => <li key={ i }>{ it.name }</li> ) }
            </ul>
        </>
    )
}
