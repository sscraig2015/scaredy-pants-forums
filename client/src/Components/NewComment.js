import React, {useState} from 'react'

const NewComment = ({postId}) => {
    
    const [body, setBody] = useState("")
    
    
    function newComment(e){
        e.preventDefault()

        fetch(`/posts/${postId}/comments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                body: body,
            })  
        })
        .then((r) => window.location.reload(false))
        
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