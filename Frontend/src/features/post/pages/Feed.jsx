import { useEffect } from 'react'
import React from 'react'
import "../style/feed.scss"
import Post from "../components/Post"
import {usePost} from '../hook/usePost'

const Feed = () => {

  const {feed, loading, handleGetFeed} = usePost()

  useEffect(() => {
    handleGetFeed()
  }, [])

  if(loading || !feed){
    return (<main><h1>Feed is loading...</h1></main>)
  }

  console.log(feed)

  return (
    <main className='feed-page'>
      <div className="feed">
        <div className='posts'>
          {feed.map((post) => (
            <Post 
              key={post._id} 
              post={post} 
              user={post.user}  
            />
          ))}
        </div>
      </div>
    </main>
  )
}

export default Feed


