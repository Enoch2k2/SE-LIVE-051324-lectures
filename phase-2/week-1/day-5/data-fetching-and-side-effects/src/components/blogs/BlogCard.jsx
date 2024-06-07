import { useEffect} from 'react'

const BlogCard = ({ blog, deleteBlog }) => {
  useEffect(() => {

    return async function() {
      // what gets called when component leaves the page, or is removed aka unmounted
      console.log('hi')
    }
  }, [])
  return (
    <li>
      <h3>{blog.title}</h3>
      <p>by: {blog.author}</p>
      <p>{blog.content}</p>
      <button onClick={ () => deleteBlog(blog.id) }>Delete Blog</button>
    </li>
  )
}

export default BlogCard