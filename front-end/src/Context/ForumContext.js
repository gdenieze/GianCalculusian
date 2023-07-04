import { createContext, useReducer } from "react";

export const ForumContext = createContext()

export const forumReducer = (state,action) =>{
    switch(action.type) {
        case 'SET_FORUM':
            return{
                forum:action.payload
            }
        case 'CREATE_FORUM':
            return{
                forum:[action.payload, ...state.forum]
            }
        case 'DELETE_FORUM':
            return{
                forum: state.forum.filter((w) => w._id !== action.payload._id)
            }
        default:
            return state
    }
}
export const ForumContextProvider = ({ children })=>{
    const [state,dispatch] = useReducer(forumReducer,{
     forum: null
    })
    return (
        <ForumContext.Provider value={{...state,dispatch}}>
            { children }
        </ForumContext.Provider>
    )
}