import { ForumContext } from "../Context/ForumContext";
import { useContext } from "react";

export const useForumHooks = () =>{
    const context = useContext(ForumContext)

    if(!context){
        throw Error("useForumHooks must be used inside an forumContextProvider")
    }
    return context
}