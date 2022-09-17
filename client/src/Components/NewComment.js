import React, {useState} from 'react'
import { useParams } from 'react-router-dom'


const NewComment = ({ setComments, comments}) => {
    
    const [body, setBody] = useState("")
    let params = useParams()
    console.log(params)
    
    function newComment(e){
        e.preventDefault()

        fetch(`/posts/${params.id}/comments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                body: body,
            })  
        })
        .then((r) => r.json())
        .then((comment) => setComments([comment, ...comments]))
        
    }
    
    return (
    <div>
        <form  onSubmit={newComment}>
            <label>Comment:</label>
            <input
              type="text"
              id="commentText"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
            <input
              type="submit"
              id="topicSubmit"
            />
        </form>
    </div>
  )
}

export default NewComment