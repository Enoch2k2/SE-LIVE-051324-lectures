import React from 'react'

const BlogCard = ({ blog }) => {
  return (
    <li>
      <h3>{blog.title}</h3>
      <p>by: {blog.author}</p>
      <p>{blog.content}</p>
    </li>
  )
}

export default BlogCard