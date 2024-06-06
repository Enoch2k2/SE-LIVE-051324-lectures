import { useState } from 'react'
import { data } from './data/blogs'
import BlogForm from './components/blogs/BlogForm'
import BlogList from './components/blogs/BlogList'

function App() {
  const [blogs, setBlogs] = useState(data)
  const [viewedBlogs, setViewedBlogs] = useState(data)

  function addBlog(blog){
    setBlogs([...blogs, blog])
  }

  function searchTerm(term) {
    const filteredBlogs = blogs.filter(blog => blog.title.toLowerCase().includes(term.toLowerCase()))
    setViewedBlogs(filteredBlogs)
  }

  return (
    <div>
      <h1>React Forms</h1>
      <BlogForm addBlog={ addBlog } />
      <BlogList blogsLength={blogs.length} blogs={ viewedBlogs } searchTerm={searchTerm} />
    </div>
  )
}

export default App
