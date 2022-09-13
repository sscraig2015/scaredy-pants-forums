import React from 'react'

const PostList = ({allPosts}) => {
  
  return allPosts.map((post) => {
    return (
        <div className='individualPost'>
            <div className='individualPostContent'>
                {post.title}
            </div>
        </div>
    )
  })
  
}

export default PostList