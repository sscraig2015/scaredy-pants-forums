import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import CommentList from '../Components/CommentList'
import NewComment from '../Components/NewComment'



const PostPage = ({user}) => {
  
  let params = useParams()
  const [post, setPost] = useState()
 

  useEffect(() => {
    fetch(`/posts/${params.id}`)
    .then((r) => r.json())
    .then((post) => setPost(post))
    }, [])


function handleCommentDelete(e){

    let commentId = e.target.value
    fetch(`/comments/${commentId}`, {
        method: 'DELETE'
    })
    .then((r) => window.location.reload(true))
}
    

    if (post) {
        return (
            <div className='homePage'>
                <div className='content'>
                    <header><h4>{post.title}</h4></header>
                    <div className='postBody'>{post.body}</div>
                        <CommentList comments={post.comments} handleCommentDelete={handleCommentDelete} userId={user.id}/>
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