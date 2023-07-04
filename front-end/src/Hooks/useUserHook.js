import { AuthContext } from "../Context/UserContext";
import { useContext } from "react";

export const useUserHooks = () =>{
    const context = useContext(AuthContext)

    if(!context){
        throw Error("useUserHooks must be used inside an AuthContextProvider")
    }
    return context
}