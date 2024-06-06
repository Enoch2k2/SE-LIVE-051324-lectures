import React from 'react'
import BlogCard from './BlogCard'
import Search from '../filtering/Search'

const BlogList = ({ blogs, searchTerm, blogsLength }) => {



  const blogCards = blogs.map((blog, idx) => <BlogCard key={ idx } blog={ blog } />)



  return (
    <div>
      <h3>Blog List</h3>
      <Search searchTerm={ searchTerm } />
      <ul>
        { blogs.length > 0 ? blogCards : ( blogsLength > 0 ?<li>Nothing Matches Your Search</li> : <li>There is no spoon</li>) }
      </ul>
    </div>
  )
}

export default BlogList