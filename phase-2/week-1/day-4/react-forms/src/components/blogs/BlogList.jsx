import React from 'react'
import BlogCard from './BlogCard'
import Search from '../filtering/Search'

const BlogList = ({ blogs}) => {

  const blogCards = blogs.map((blog, idx) => <BlogCard key={ idx } blog={ blog } />)

  return (
    <div>
      <h3>Blog List</h3>
      <Search />
      <ul>
        { blogCards }
      </ul>
    </div>
  )
}

export default BlogList