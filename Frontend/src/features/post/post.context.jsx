import { createContext, useState } from "react";


const PostContext = createContext()



export const PostContextProvider = ({children})=>{


    const [loading, setLoading] = useState(false)
    const [Post, setPost] = useState(null)
    const [feed, setFeed] = useState(null)



    return (
        <PostContext.Provider value={{loading, setLoading, post, setPost, feed, setFeed}}>
            {children}
        </PostContext.Provider>
    )


}