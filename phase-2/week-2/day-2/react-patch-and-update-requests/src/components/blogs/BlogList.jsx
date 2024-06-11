import React from 'react'
import BlogCard from './BlogCard'
import Search from '../filtering/Search'
import { Outlet, useOutletContext } from 'react-router-dom'

const BlogList = () => {

  const { blogs, setTerm, blogsLength, term, deleteBlog } = useOutletContext()

  const blogCards = blogs.map((blog) => <BlogCard key={ blog.id } blog={ blog }  deleteBlog={deleteBlog} />)



  return (
    <div>
      <h3>Blog List</h3>
      <Search setTerm={ setTerm } term={term} />
      <Outlet context={{ blogs }} />
      <ul>
        { blogs.length > 0 ? blogCards : ( blogsLength > 0 ?<li>Nothing Matches Your Search</li> : <li>There is no spoon</li>) }
      </ul>
    </div>
  )
}

export default BlogList