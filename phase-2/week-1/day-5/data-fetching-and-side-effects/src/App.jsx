import { useState, useEffect } from 'react'
import BlogForm from './components/blogs/BlogForm'
import BlogList from './components/blogs/BlogList'

import { baseurl } from './globals'

function App() {
  const [blogs, setBlogs] = useState([])
  const [term, setTerm] = useState("")
  const [loading, setLoading] = useState(true)
  let viewedBlogs;

  function addBlog(blog){
    setBlogs([...blogs, blog])
  }

  function deleteBlog(id) {
    const filteredBlogs = blogs.filter(blog => blog.id !== id)
    setBlogs(filteredBlogs)
  }

  async function getBlogs() {
    const response = await fetch(baseurl + "/blogs")
    const data = await response.json()
    setBlogs(data)
    setLoading(false)
  }
  
  useEffect(() => {
    // fetch(baseurl + "/blogs")
    //   .then(resp => resp.json())
    //   .then(data => {
    //     setBlogs(data)
    //     setLoading(false)
    //   })
    getBlogs()
  }, [])

  useEffect(() => {
    console.log('hi from the term useEffect', term)
  }, [term])

  if(term === "All") {
    viewedBlogs = blogs;
  } else {
    viewedBlogs = blogs.filter(blog => blog.title.toLowerCase().includes(term.toLowerCase()))
  }

  if(loading) {
    return <h1>Loading...</h1>
  } else {
    return (
      <div>
        <h1>Data Fetching & Side Effects</h1>
        <BlogForm addBlog={ addBlog } />
        <BlogList blogsLength={blogs.length} blogs={ viewedBlogs } setTerm={setTerm} term={term} deleteBlog={deleteBlog} />
      </div>
    )
  }

}

export default App
