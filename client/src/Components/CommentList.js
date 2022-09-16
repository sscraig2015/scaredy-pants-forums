import React, {useState} from 'react'


const CommentList = ({comments, userId, handleCommentDelete}) => {
    console.log(comments)

      return (
        comments.map((comment) => {
            return (
                <div className='individualPost'>
                    <div className='individualPostContent'>
                        <header>{comment.user.username}</header>
                        {comment.body}
                        {comment.user.id === userId ? <button value={comment.id} onClick={handleCommentDelete}>Delete</button> : null}
                    </div>
                </div>
            )
    })
    )  
    
    
}

export default CommentList