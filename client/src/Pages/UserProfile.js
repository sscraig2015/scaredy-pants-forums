import React, {useState} from 'react'

import PostList from '../Components/PostList'
import UserCommentList from '../Components/UserCommentList'

const UserProfile = ({user}) => {
 
    console.log(user)
    const [posts, revealPosts] = useState(false)
    const [comments, revealComments]= useState(false)
  
    function handleClick(e){
        console.log(e.target.name)
        
        if (e.target.name === "comments"){
            revealComments(!comments)
        } else if(e.target.name ==="posts") {
            revealPosts(!posts)
        }

    }

    return (
    <div className='homePage'>
        
        <div className='content'>
            <header>
                <div><button name='posts' onClick={handleClick}>Posts</button></div>
                <div><button name='comments' onClick={handleClick}>Comments</button></div>
            </header>
            { posts ?  <PostList allPosts={user.posts} forUser={true}/> : null }
            { comments ?  <UserCommentList comments={user.comments} userId={user.id}/> : null }
        </div>
            
        </div> 
    
  )
}

export default UserProfile
