import React from 'react'
import { NavLink } from 'react-router-dom'

const UserCommentList = ({comments, userId}) => {

    if (comments.length === 0){
        return(

            <div className='commentBase'>
                <div className='postId'></div>
                <div className='postInfo'>no comments</div>
            </div>
        )
    } else {

        return (
            comments.map((comment, key) => {
                return (
                    <div className='commentBase'>
                        <div className='postId'>{key + 1}</div>
                        <div className='comment'>
                        <div className='commentContent'>
                            <header><NavLink to={`/posts/${comment.post.id}`}>{comment.post.title}</NavLink></header>
                            <NavLink to={`/comments/${comment.id}`}>Edit Comment?</NavLink>
                            {comment.body}
                            
                        </div>
                    </div></div>
                )
        })
        )
    
}}

export default UserCommentList