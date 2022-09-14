import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'


const PostPage = () => {
  
  let params = useParams()
  const [post, setPost] = useState()

  useEffect(() => {
    fetch(`/posts/${params.id}`)
    .then((r) => r.json())
    .then((post) => setPost(post))
}, [])
    

    if (post) {
        return (
            <div>
                {post.title}
                {post.body}
            </div>
    )
    } else {
        return <div>Loading...</div>
    }
  
}

export default PostPage