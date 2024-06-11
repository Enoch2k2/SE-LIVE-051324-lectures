import React, { useEffect, useState } from 'react'
import { useOutletContext, useParams, useNavigate } from 'react-router-dom'
import { baseurl, headers } from '../../globals'

const EditBlogForm = () => {
  // how do we get the id? useParams
  const { id } = useParams()
  const [blog, setBlog] = useState({})
  const { updateBlog } = useOutletContext()
  const navigate = useNavigate()

  async function getBlog() {
    const resp = await fetch('http://localhost:3000/blogs/' + id)
    const data = await resp.json()
    setBlog(data)
  }

  function handleChange(e) {
    setBlog({
      ...blog,
      [e.target.name]: e.target.value
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const options = {
      method: "PATCH",
      headers,
      body: JSON.stringify(blog)
    }
    const resp = await fetch(baseurl + "/blogs/" + id, options) // updates database
    const data = await resp.json()
    updateBlog(data) // will update state
    navigate("/blogs")
  }

  useEffect(() => {
    getBlog()
  }, [])

  if(!blog.id) {
    return <h1>Loading</h1>
  }


  return (
    <div>
      <h2>Edit {blog.title}</h2>
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="title">Title: </label>
          <input type="text" name="title" id="title" value={blog.title} onChange={ handleChange }/>
        </div><br />
        <div>
          <label htmlFor="author">Author: </label>
          <input type="text" name="author" id="author" value={blog.author} onChange={ handleChange }/>
        </div><br />
        <div>
          <label htmlFor="content">Content: </label><br />
          <textarea name="content" id="content" rows={10} cols={50} value={blog.content} onChange={ handleChange }/>
        </div>

        <input type="submit" value="Update Blog" />
      </form>
    </div>
  )
}

export default EditBlogForm