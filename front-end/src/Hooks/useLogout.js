import { useUserHooks } from "./useUserHook"

export const useLogout = () =>{

    const {dispatch} =useUserHooks()
    const logout   = ()=>{
        // remove user form storage
        localStorage.removeItem('user')
        dispatch ({type: 'LOGOUT'})
    }
    return {logout}
} 