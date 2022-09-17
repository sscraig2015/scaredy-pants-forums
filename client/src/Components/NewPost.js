import React, {useState} from 'react'

const NewPost = ({setPosts, currentPosts, revealNewPost}) => {
  
    const [topic, setTopic] = useState("")
    const [topicText, setTopicText] = useState("")
    const [errors, setErrors] = useState()

    function newPost(e){
        e.preventDefault()

        fetch("/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: topic,
                body: topicText,
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
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
            <label>Text:</label>
            <input
              type="textarea"
              id="topicText"
              value={topicText}
              onChange={(e) => setTopicText(e.target.value)}
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