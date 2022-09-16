import React from 'react'
import { NavLink } from 'react-router-dom'

const UserCommentList = ({comments}) => {

    console.log(comments)
    
    return (
        comments.map((comment) => {
            return (
                <div className='individualPost'>
                    <div className='individualPostContent'>
                        <header><NavLink to={`/posts/${comment.post.id}`}>{comment.post.title}</NavLink></header>
                        {comment.body}
                        
                    </div>
                </div>
            )
    })
    )
}

export default UserCommentList