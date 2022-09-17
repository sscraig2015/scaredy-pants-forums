import React, {useEffect, useState} from 'react'
import {useParams, NavLink, useNavigate} from 'react-router-dom'
import CommentList from '../Components/CommentList'
import NewComment from '../Components/NewComment'




const PostPage = ({user}) => {
  
  let params = useParams()
  const [post, setPost] = useState()
  let navigate = useNavigate()
  
 

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
    navigate('/home')
}

function setComments(){
    
}
    

    if (post) {
        return (
            <div className='homePage'>
                <div className='newPostForm'>
                        <NewComment comments={post.comments} setComments={setComments}/>
                </div>
                
                <div className='content'>
                    <div className='postSubmitData' id='postSubmitData'>
                        <div className='individualPost'>
                            <p>{post.title}</p>
                            <div className='postInfo'>by: {post.user.username}</div>
                        </div>
                        
                        <div className='postBody'>{post.body}</div>
                    </div>    
                        <CommentList comments={post.comments}  handleCommentDelete={handleCommentDelete} userId={user.id}/>
                </div>
                    
            </div>
    )
    } else {
        return <div>Loading...</div>
    }
  
}

export default PostPage