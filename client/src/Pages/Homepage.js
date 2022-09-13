import React, {useEffect, useState} from 'react'
import NewPost from '../Components/NewPost'
import PostList from '../Components/PostList'


const Homepage = ({user, handleLogOut}) => {
  
    const [revealPostForm, setPostForm] = useState(false)
    const [currentPosts, setPosts] = useState([])

    function revealNewPost(){
        setPostForm(!revealPostForm)
    }

    useEffect(() => {
        fetch("/posts")
        .then((r) => r.json())
        .then((posts) => setPosts(posts))
    }, [])
    

    if (user) {
    return (
     
            <div className='homePage'>
                <div className='content'>
                    <h1>Posts</h1>
                        <PostList allPosts={currentPosts}/>
                </div>
               
                <div className='newPostForm'>
                    <button  onClick={revealNewPost}>New Post</button>
                    {revealPostForm ? <NewPost currentPosts={currentPosts} setPosts={setPosts}/> : null}
                </div> 
            </div>
   
            )  
    } else {
        return (
            <div>
                Loading...
            </div>
        )
    }

}
export default Homepage