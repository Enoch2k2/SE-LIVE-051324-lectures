import {useState} from 'react'

const initialFormData = {
  title: "",
  author: "",
  content: ""
}

const BlogForm = ({ addBlog }) => {
  const [formData, setFormData] = useState(initialFormData)

  function handleChange(event) {
    // determine which part of the state's object to update
    // something in the input will give us this information

    const newFormData = {
      ...formData,
      [event.target.name]: event.target.value
    }

    setFormData(newFormData)
  }

  function handleSubmit(e) {
    e.preventDefault()
    // add the object to our list of objects
    // we don't have to get the inputs
    // we don't have to create an object with the inputs
    // BAM it's already there!

    addBlog(formData)
    
    setFormData(initialFormData)
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