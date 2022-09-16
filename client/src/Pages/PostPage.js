import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import CommentList from '../Components/CommentList'
import NewComment from '../Components/NewComment'



const PostPage = ({user}) => {
  
  let params = useParams()
  const [post, setPost] = useState()
  console.log(post)
 

  useEffect(() => {
    fetch(`/posts/${params.id}`)
    .then((r) => r.json())
    .then((post) => setPost(post))
}, [])
    

    if (post) {
        return (
            <div className='homePage'>
                <div className='content'>
                    <header><h4>{post.title}</h4></header>
                    <div className='postBody'>{post.body}</div>
                        <CommentList comments={post.comments} userId={user.id}/>
                    <div className='newPostForm'>
                        <NewComment postId={post.id}/>
                    </div>
                </div>
            </div>
    )
    } else {
        return <div>Loading...</div>
    }
  
}

export default PostPage