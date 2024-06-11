import { useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import { baseurl } from '../../globals'

const BlogCard = ({ blog, deleteBlog }) => {

  async function handleDelete() {
    const options = { method: "DELETE" }
    await fetch(baseurl + '/blogs/' + blog.id, options)
    deleteBlog(blog.id)
  }

  return (
    <li>
      <h3>{blog.title}</h3>
      <p><NavLink to={`/blogs/edit/${blog.id}`}>Edit</NavLink></p>
      <p>by: {blog.author}</p>
      <p>{blog.content}</p>
      <button onClick={ handleDelete }>Delete Blog</button>
    </li>
  )
}

export default BlogCard