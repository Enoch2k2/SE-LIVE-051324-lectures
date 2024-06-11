import {useState} from 'react'
import { baseurl, headers } from '../../globals'
import { useNavigate, useOutletContext } from 'react-router-dom'

const initialFormData = {
  title: "",
  author: "",
  content: ""
}

const BlogForm = () => {
  const [formData, setFormData] = useState(initialFormData)
  const { addBlog } = useOutletContext()
  const navigate = useNavigate()

  function handleChange(event) {
    // determine which part of the state's object to update
    // something in the input will give us this information

    const newFormData = {
      ...formData,
      [event.target.name]: event.target.value
    }

    setFormData(newFormData)
  }

  async function handleSubmit(e) {
    e.preventDefault()

    const resp = await fetch(baseurl + "/blogs", {
      method: "POST",
      headers,
      body: JSON.stringify(formData)
    })
    const data = await resp.json()
    addBlog(data)
    setFormData(initialFormData)
    navigate("/blogs")
    
    // fetch(baseurl + "/blogs", {
    //   method: "POST",
    //   headers,
    //   body: JSON.stringify(formData)
    // })
    //   .then(resp => resp.json())
    //   .then(data => {
    //     addBlog(data)
    //     setFormData(initialFormData)
    //   })
  }

  return (
    <div>
      <h3>Create Blog</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title: </label>
          <input type="text" name="title" id="title" value={ formData.title } onChange={ handleChange } />
        </div><br />
        <div>
          <label htmlFor="author">Author: </label>
          <input type="text" name="author" id="author" value={ formData.author } onChange={ handleChange } />
        </div><br />
        <div>
          <label htmlFor="content">Content: </label><br />
          <textarea name="content" id="content" rows={10} cols={50} value={ formData.content } onChange={ handleChange } />
        </div>
        <input type="submit" value="Create Blog" />
      </form>
    </div>
  )
}

export default BlogForm