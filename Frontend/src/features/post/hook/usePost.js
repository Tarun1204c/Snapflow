import { getFeed } from "../services/post.api"
import { useContext } from "react"
import {PostContext} from "../post.context"


export const usePost = () => {

    const context = useContext(PostContext)

    const {loading, setLoading, post, setPost, feed, setFeed }


}