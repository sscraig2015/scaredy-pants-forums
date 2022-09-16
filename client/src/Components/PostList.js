import React from 'react'
import { Link } from 'react-router-dom'

const PostList = ({allPosts}) => {
  
console.log(allPosts)
  return allPosts.map((post, key) => {
    return (
    <div className='postHomePage'>
      <div className='postId'>{key + 1}</div>
        <div className='individualPost'>
            <div className='individualPostContent'>
              <div><Link to={`/posts/${post.id}`}>{post.title}</Link></div>
              <div className='postInfo'>Submitted at: {post.created_at} by USER. Amount of comments</div>
            </div>
        </div>
      </div>
    )
  })
  
}

export default PostList