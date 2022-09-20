import React from 'react'
import { Link } from 'react-router-dom'

const PostList = ({allPosts, forUser}) => {
  console.log(allPosts)
    
if (allPosts.length === 0){
    return(

        <div className='commentBase'>
            <div className='postId'></div>
            <div className='postInfo'>no posts</div>
        </div>
    )
} else if(forUser) {
    return allPosts.map((post, key) => {
      return (
      <div className='commentBase'>
        <div className='postId'>{key + 1}</div>
          <div className='comment'>
              <div className='commentContent'>
                <Link to={`/posts/${post.id}`}>{post.title}</Link>
              </div>
          </div>
        </div>
      )
    })
} else {
    return allPosts.map((post, key) => {
      return (
      <div className='postHomePage'>
        <div className='postId'>{key + 1}</div>
          <div className='individualPost'>
              <div className='individualPostContent'>
                <div><Link to={`/posts/${post.id}`}>{post.title}</Link></div>
                <div style={{fontSize:'15px'}} >Topic: {post.topic.title}</div>
                <div className='postInfo'>Submitted at: {post.created_at} by {post.user.username}. {post.comments.length} comments</div>
              </div>
          </div>
        </div>
      )
    })
}
  
}


export default PostList