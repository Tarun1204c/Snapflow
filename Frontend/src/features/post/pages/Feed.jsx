import React from 'react'

const Feed = () => {
  return (
    <main className='feed-page'>
         <div className="feed">
          <div className='posts'>
            <div className="user">
              <img src='https://images.unsplash.com/photo-1780789594812-7828eae1ea07?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D' alt='' />
              <p>Username</p>
            </div>
            <img src='https://images.unsplash.com/photo-1773332598451-8a0a59941912?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNTZ8fHxlbnwwfHx8fHw%3D' alt=''/>
            <div className='bottom'>
              <p className='caption'>caption caption</p>
            </div>
          </div>
        </div>
    </main>
  ) 
}

export default Feed

