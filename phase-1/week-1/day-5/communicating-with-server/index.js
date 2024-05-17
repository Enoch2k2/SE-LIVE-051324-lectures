const baseUrl = "http://localhost:3000"

document.addEventListener("DOMContentLoaded", function() {
  getBlogs()
})


function getBlogs() {

  fetch(`${baseUrl}/blogs`)
  .then(response => {
    console.log('b', "inside the response")
    return response.json()
  })
  .then(blogs => {
    renderBlogs(blogs)
  })
}

// async function getBlogs() {
//   const response = await fetch(`${baseUrl}/blogs`)
//   const data = await response.json()
//   renderBlogs(data)
// }

function renderBlogs(blogs) {
  blogs.forEach(blog => {
    renderBlog(blog)
  })
}

function renderBlog(blog) {
  list = document.getElementById("list")

  div = document.createElement('div')
  h3 = document.createElement('h3')
  pAuthor = document.createElement('p')
  pContent = document.createElement('p')

  h3.innerText = blog.title
  pAuthor.innerText = `By: ${blog.author}`
  pContent.innerText = blog.content

  div.appendChild(h3)
  div.appendChild(pAuthor)
  div.appendChild(pContent)

  list.appendChild(div)
}