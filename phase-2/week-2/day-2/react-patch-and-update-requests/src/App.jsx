import { useState, useEffect } from 'react'
import { baseurl } from './globals'
import { Outlet } from 'react-router-dom'
import Navbar from './components/navigation/Navbar'

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

  function updateBlog(updatedBlog) {
    const updatedBlogs = blogs.map(blog => {
      if(blog.id === updatedBlog.id) {
        return updatedBlog
      } else {
        return blog
      }
    })

    setBlogs(updatedBlogs)
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
        <Navbar />
        <h1>Data Fetching & Side Effects</h1>
        <Outlet context={{ addBlog, blogsLength: blogs.length, blogs: viewedBlogs, setTerm, term, deleteBlog, updateBlog }} />
      </div>
    )
  }

}

export default App
