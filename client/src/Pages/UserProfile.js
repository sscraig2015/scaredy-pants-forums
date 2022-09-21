import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

import PostList from '../Components/PostList'
import UserCommentList from '../Components/UserCommentList'

const UserProfile = ({user}) => {

    let params = useParams()

    const [posts, revealPosts] = useState(false)
    const [comments, revealComments]= useState(false)

    console.log(user)
    const uniqueTopics = [...new Set(user.topics.map(item => item.title))];
    

    // useEffect(() => {
    //     fetch(`/users/${params.id}`)
    //     .then((r) => r.json())
    //     .then((data) => setUser(data))
        
    // },[])
    
    function handleClick(e){
        console.log(e.target.name)
        
        if (e.target.name === "comments"){
            revealComments(!comments)
        } else if(e.target.name ==="posts") {
            revealPosts(!posts)
        }

    }
if(user) {
    return (
    <div className='homePage'>
        <div className='newPostForm'>
            <div>Your favorite topics:</div>
            <ul>
                {uniqueTopics.map((topic) => {
                    return <li>{topic}</li>
                })}
            </ul>
        </div> 
        <div className='content'>
            <header>
                <div><button name='posts' onClick={handleClick}>Posts</button></div>
                <div><button name='comments' onClick={handleClick}>Comments</button></div>
            </header>
            { posts ?  <PostList allPosts={user.posts} forUser={true} user={user} topics={uniqueTopics}/> : null }
            { comments ?  <UserCommentList comments={user.comments} userId={user.id}/> : null }
        </div>

    </div> 
    
  )
            }
}

export default UserProfile
