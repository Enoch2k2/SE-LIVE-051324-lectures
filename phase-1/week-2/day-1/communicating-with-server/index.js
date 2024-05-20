// Globals
const baseUrl = "http://localhost:3000"
const form = document.getElementById("form")
const title = document.getElementById("title")
const content = document.getElementById("content")
const author = document.getElementById("author")

let errors = []


// Event Listeners
document.addEventListener("DOMContentLoaded", function() {
  getBlogs()
})

form.addEventListener('submit', handleSubmit)
// EventHandlers
function handleSubmit(event) {
  event.preventDefault()

  const blog = {
    title: title.value,
    content: content.value,
    author: author.value
  }

  // const blog = { title, content, author }
  const validatedTitle = validTitle(title.value)
  const validatedAuthor = validAuthor(author.value)
  const validatedContent = validContent(content.value)

  if(validatedTitle && validatedAuthor && validatedContent) {
    fetch(baseUrl + '/blogs', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(blog)
    })
      .then(resp => resp.json())
      .then(data => {
        renderBlog(data)
        form.reset()
        errors = []
      })
    } else {
      const errorMessages = errors.join(", ")
      alert(errorMessages)
      errors = []
  }

}

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

// Helper Functions

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

// function resetForm() {
//   title.value = "add title here"
//   author.value = ""
//   content.value = ""
// }


// Validators

function validTitle(title) {
  if(title.length >= 3 && title.length <= 20) {
    return true
  } else {
    errors.push("Title must be between 3 and 20 characters long")
    return false
  }
}

function validAuthor(author) {
  if(author.length > 0) {
    return true
  } else {
    errors.push("Author Must Exist")
    return false
  }
}

function validContent(content) {
  if(content.length >= 20 && content.length <= 1024) {
    return true
  } else {
    errors.push("Content must be between 20 and 1024 characters long")
    return false
  }
}