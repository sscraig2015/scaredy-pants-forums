import React from 'react'
import { Link } from 'react-router-dom'

const PostList = ({allPosts}) => {
  

  return allPosts.map((post) => {
    return (
        <div className='individualPost'>
            <div className='individualPostContent'>
                <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </div>
        </div>
    )
  })
  
}

export default PostList