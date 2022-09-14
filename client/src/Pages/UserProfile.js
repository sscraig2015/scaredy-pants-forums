import React, {useState} from 'react'
import PostList from '../Components/PostList'

const UserProfile = ({user, handleLogOut }) => {
 
    console.log(user)
    const [posts, revealPosts] = useState(false)
    const [comments, revealComments]= useState(false)
  
    function handleClick(){
        revealPosts(!posts)
    }
    
    return (
    <div className='homePage'>
        
        <div className='content'>
            <header>
                <div><button onClick={handleClick}>Posts</button></div>
                <div><button onClick={revealComments}>Comments</button></div>
            </header>
            { posts ?  <PostList allPosts={user.posts} /> : null }
        </div>
            
        </div> 
    
  )
}

export default UserProfile
