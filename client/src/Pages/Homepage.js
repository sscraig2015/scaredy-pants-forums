import React, {useState} from 'react'
import NewPost from '../Components/NewPost'


const Homepage = ({user, handleLogOut}) => {
  
    const [newPost, setNewPost] = useState(false)
    const [posts, setPosts] = useState([])

    function revealNewPost(){
        setNewPost(!newPost)
    }

    

    if (user) {
    return (
                <div>

                    <button onClick={revealNewPost}>New Post</button>
                    {newPost ? <NewPost /> : null}
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