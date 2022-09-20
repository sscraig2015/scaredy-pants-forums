import React, {useState} from 'react'

const NewPost = ({setPosts, currentPosts, revealNewPost, topics}) => {
  
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [errors, setErrors] = useState()

    console.log(topics, 'topics')

    function newPost(e){
        e.preventDefault()

        fetch("/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: title,
                body: body,
            })  
        })
        .then((r) => {
          if(r.ok){
            r.json().then((post) => setPosts([post, ...currentPosts]))
            revealNewPost()
          } else {
            r.json().then((error) => setErrors(error))
          }
        })
    }

    return (
    <div>
      {errors ? <div>{errors.error}</div> : null}
        <form onSubmit={newPost}>
            <label>Title:</label>
            <input
              type="text"
              id="topicTitle"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label>Topic</label>
            <select name='topic' id='topic'>
              {topics.map((topic) => {
                return <option value={topic.id}>{topic.title}</option>
              })}
            </select>
            <label>Text:</label>
            <input
              type="textarea"
              id="topicText"
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

export default NewPost