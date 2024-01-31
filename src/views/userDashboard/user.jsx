import { fetchUsers } from "../../api/userApi";
import { UseApi } from "../../api/hooks/useApi";

export const LoadUserList = () => {
    const {
        data: user,
        status,
        exec: initFetchUsers,
        isIdle, isPending, isSuccess, isError
    } = UseApi( fetchUsers().then( res => res.data ) );
    return { user, isIdle, isPending, isSuccess, isError, initFetchUsers }
}
