import React, {useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'


const NewComment = ({ setComments, comments}) => {
    
    const [body, setBody] = useState("")
    const [errors, setErrors] = useState()
    
    let params = useParams()
    let navigate = useNavigate()
    
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
        .then((r) => {
            if(r.ok) {
                navigate('/home')
            } else {
                r.json().then((errors) => setErrors(errors))
            }
        })
    }

    
    return (
    <div>
        <form  onSubmit={newComment}>
        
            <label>Comment:</label>
            {errors ? <div>{errors.error}</div> : null}
            <input
              type="text"
              id="commentText"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
            <input
              type="submit"
            />
        </form>
    </div>
  )
}

export default NewComment