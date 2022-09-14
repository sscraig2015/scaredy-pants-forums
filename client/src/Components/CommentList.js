import React from 'react'

const CommentList = ({comments}) => {
  console.log(comments)
    return (
        comments.map((comment) => {
            return (
                <div className='individualPost'>
                    <div className='individualPostContent'>
                        <header>{comment.user.username}</header>
                        {comment.body}
                    </div>
                </div>
            )
    })
    )
}

export default CommentList