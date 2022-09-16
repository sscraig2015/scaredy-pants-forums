import React from 'react'


const CommentList = ({comments, userId}) => {
    
    return (
        comments.map((comment) => {
            return (
                <div className='individualPost'>
                    <div className='individualPostContent'>
                        <header>{comment.user.username}</header>
                        {comment.body}
                        {comment.user.id === userId ? <button >Delete</button> : null}
                    </div>
                </div>
            )
    })
    )
}

export default CommentList