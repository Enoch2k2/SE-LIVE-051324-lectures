import { useState } from 'react'
import { data } from './data/blogs'
import BlogForm from './components/blogs/BlogForm'
import BlogList from './components/blogs/BlogList'

function App() {
  const [blogs, setBlogs] = useState(data)



  return (
    <div>
      <h1>React Forms</h1>
      <BlogForm />
      <BlogList blogs={ blogs } />
    </div>
  )
}

export default App
