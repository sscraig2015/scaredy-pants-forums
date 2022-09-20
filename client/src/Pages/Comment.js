import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Comment = () => {

  let params = useParams()
  const [comment, setComment] = useState()
console.log(comment)
  
  useEffect(() => {
    fetch(`/comments/${params.id}`)
    .then((r) => r.json())
    .then((data) => setComment(data))
  }, [])
  return (
    <div className='userInputForm'>
        <div className='formContainer'>
          <form>
            <label>Edit comment:</label>
            {comment? <div>{comment.body}</div> : null }
            <input></input>
            <input type='submit'></input>
          </form>
        </div>
    </div>
  )
}

export default Comment