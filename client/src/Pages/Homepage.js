import React, {useEffect, useState} from 'react'
import NewPost from '../Components/NewPost'
import PostList from '../Components/PostList'


const Homepage = ({user, setUser}) => {
  
    const [revealPostForm, setPostForm] = useState(false)
    const [currentPosts, setPosts] = useState([])
    const [topics, setTopics] = useState([])


    function revealNewPost(){
        setPostForm(!revealPostForm)
    }


    useEffect(() => {
        fetch("/posts")
        .then((r) => r.json())
        .then((posts) => setPosts(posts))
    }, [])

    useEffect(() => {
        fetch("/topics")
        .then((r) => r.json())
        .then((data) => setTopics(data))
    }, [])

    useEffect(() => {
        fetch("/me").then((r) => {
        if (r.ok) {
          r.json().then((user) => setUser(user));
        }
      })
    },[])

    if (user) {
        console.log(user)
    return (
     
            <div className='homePage'>
                <div className='newPostForm'>
                    <button  onClick={revealNewPost}>Submit New Post</button>
                    {revealPostForm ? <NewPost currentPosts={currentPosts} setPosts={setPosts} revealNewPost={revealNewPost} topics={topics}/> : null}
                </div> 
                <div className='content'>
                        <PostList allPosts={currentPosts} forUser={false} user={user}/>
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