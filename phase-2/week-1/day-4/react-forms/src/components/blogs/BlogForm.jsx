import React from 'react'

const BlogForm = () => {
  return (
    <div>
      <h3>Create Blog</h3>
      <form>
        <div>
          <label htmlFor="title">Title: </label>
          <input type="text" name="title" id="title" />
        </div><br />
        <div>
          <label htmlFor="author">Author: </label>
          <input type="text" name="author" id="author" />
        </div><br />
        <div>
          <label htmlFor="content">Content: </label><br />
          <textarea name="content" id="content" rows={10} cols={50} />
        </div>
        <input type="submit" value="Create Blog" />
      </form>
    </div>
  )
}

export default BlogForm