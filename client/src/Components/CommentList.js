import React, {useState} from 'react'


const CommentList = ({comments, userId, handleCommentDelete}) => {
    console.log(comments)

      return (
        comments.map((comment, key) => {
            return (
                <div className='commentBase'>
                    <div className='postId'>{key + 1}</div>
                    <div className='comment'>
                        <div className='commentContent'>
                            <header>{comment.user.username}</header>
                            {comment.body}
                            {comment.user.id === userId ? <button value={comment.id} onClick={handleCommentDelete}>X</button> : null}
                        </div>
                    </div>
                </div>
            )
    })
    )  
    
    
}

export default CommentList