import { useState } from 'react'
import { data } from './data/blogs'
import BlogForm from './components/blogs/BlogForm'
import BlogList from './components/blogs/BlogList'

function App() {
  const [blogs, setBlogs] = useState(data)
  const [searchTerm, setSearchTerm] = useState("")

  function addBlog(blog){
    setBlogs([...blogs, blog])
  }

  const viewedBlogs = blogs.filter(blog => blog.title.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div>
      <h1>React Forms</h1>
      <BlogForm addBlog={ addBlog } />
      <BlogList blogsLength={blogs.length} blogs={ viewedBlogs } setSearchTerm={setSearchTerm} />
    </div>
  )
}

export default App
