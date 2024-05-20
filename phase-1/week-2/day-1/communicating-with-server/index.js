// Globals
const baseUrl = "http://localhost:3000"
const form = document.getElementById("form")
const title = document.getElementById("title")
const content = document.getElementById("content")
const author = document.getElementById("author")
const list = document.getElementById("list")
const formHeader = document.getElementById("form-header")
const formBtn = document.getElementById("form-btn")

let errors = []
let blogs = []
let editMode = false
let id = null;


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
    if(editMode) {
      editBlog(blog)
    } else {
      postBlog(blog)
    }
    } else {
      const errorMessages = errors.join(", ")
      alert(errorMessages)
      errors = []
    }

}

function postBlog(blog) {
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
}

function editBlog(blog) {
  // POST localhost:3000/blogs
  // PATCH localhost:3000/blogs/id
  fetch(baseUrl + '/blogs/' + id, {
    method: "PATCH",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(blog)
  })
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      // update our blogs array, to remove the old blog with the new data
      blogs = blogs.map(blog => {
        if(blog.id === data.id) {
          return data
        } else {
          return blog
        }
      })
      // blogs = blogs.map(blog => blog.id === data.id ? data : blog)
      // re-render all blogs whenever old blog is updated to new blog
      renderBlogs()
      toggleEditMode()
    })
}

function getBlogs() {

  fetch(`${baseUrl}/blogs`)
  .then(response => response.json())
  .then(data => {
    blogs = data;
    renderBlogs()
  })
}

// async function getBlogs() {
//   const response = await fetch(`${baseUrl}/blogs`)
//   const data = await response.json()
//   renderBlogs(data)
// }

// Helper Functions

function renderBlogs() {
  resetList()
  blogs.forEach(blog => {
    renderBlog(blog)
  })
}

function renderBlog(blog) {

  div = document.createElement('div')
  h3 = document.createElement('h3')
  pAuthor = document.createElement('p')
  pContent = document.createElement('p')
  editBtn = document.createElement('button')
  deleteBtn = document.createElement('button')
  
  h3.innerText = blog.title
  pAuthor.innerText = `By: ${blog.author}`
  pContent.innerText = blog.content
  editBtn.innerText = 'edit'
  deleteBtn.innerText = 'delete'
  editBtn.dataset.id = blog.id
  deleteBtn.dataset.id = blog.id
  
  editBtn.addEventListener('click', toggleEditMode)
  deleteBtn.addEventListener('click', deleteBlog)

  div.appendChild(h3)
  div.appendChild(pAuthor)
  div.appendChild(pContent)
  div.appendChild(editBtn)
  div.appendChild(deleteBtn)

  list.appendChild(div)
}

function resetList() {
  list.innerHTML = ''
}

function deleteBlog(e) {
  const confirmed = window.confirm("Are you sure you want to delete this?")
  if(confirmed) {
    let id = parseInt(e.target.dataset.id)
    fetch(baseUrl + '/blogs/' + id, {
      method: "DELETE"
    })
    blogs = blogs.filter(blog => blog.id !== id)
    // renderBlogs()
    e.target.parentNode.remove()
  }
}

// function resetForm() {
//   title.value = "add title here"
//   author.value = ""
//   content.value = ""
// }

function toggleEditMode(e) {
  // if(editMode) {
  //   // turn editMode off
  //   editMode = false
  // } else {
  //   // turn editMode on
  //   editMode = true
  // }
  // editMode = editMode ? false : true
  editMode = !editMode
  if(editMode) {
    id = parseInt(e.target.dataset.id)
  }
  toggleForm()
}

function toggleForm() {
  if(editMode) {
    formHeader.innerText = "Edit Blog"
    formBtn.value = "Update Blog"
    populateEditForm()
  } else {
    formHeader.innerText = "Create Blog"
    formBtn.value = "Create Blog"
    id = null
    clearForm()
  }
}

function clearForm() {
  title.value = ""
  author.value = ""
  content.value = ""
}

function populateEditForm() {
  const blog = blogs.find(blog => blog.id === id)
  // const titleInput = form[0]
  // const authorInput = form[1]
  // const contentInput = form[2]
  title.value = blog.title
  author.value = blog.author
  content.value = blog.content
}


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