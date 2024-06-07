import React from 'react'
import BlogCard from './BlogCard'
import Search from '../filtering/Search'

const BlogList = ({ blogs, setTerm, blogsLength, term, deleteBlog }) => {

  console.log('hi from BlogList!')

  const blogCards = blogs.map((blog) => <BlogCard key={ blog.id } blog={ blog }  deleteBlog={deleteBlog} />)



  return (
    <div>
      <h3>Blog List</h3>
      <Search setTerm={ setTerm } term={term} />
      <ul>
        { blogs.length > 0 ? blogCards : ( blogsLength > 0 ?<li>Nothing Matches Your Search</li> : <li>There is no spoon</li>) }
      </ul>
    </div>
  )
}

export default BlogList