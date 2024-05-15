document.addEventListener("DOMContentLoaded", function(event) {
})
const list = document.getElementById("list")
const h1 = document.querySelector("h1")
const usernameInput = document.getElementById("username")
const passwordInput = document.getElementById("password")
const form = document.querySelector('form');

const users = []

h1.addEventListener("click", changeHeaderToBlue)
form.addEventListener("submit", handleSubmit)
// input.addEventListener("change", logInputValue)
// inputTwo.addEventListener("change", logInputValue)

function changeHeaderToBlue(event) {
  h1.style.color = "blue"
  alert('hi')
  h1.removeEventListener("click", changeHeaderToBlue)
}

function handleSubmit(event){
  event.preventDefault()
  
  const username = usernameInput.value
  if(validUsername(username)) {
    const li = document.createElement("li")
    li.innerText = username
    li.className = 'list-item'
    list.appendChild(li)
    users.push(username)
  } else {
    alert('That user already exist!')
  }
}

// function logInputValue(event) {
//   console.log(event.target.value)
// }

function validUsername(username) {
  for(let i = 0; i < users.length; i++) {
    if(username.toLowerCase() === users[i].toLowerCase()) {
      return false // stops the execution of code
    }
  }
  return true
}

function createColor() {
  const input = document.getElementById("text-input").value
  const li = document.createElement('li')
  li.innerText = input
  li.className = 'item'
  list.appendChild(li)
}

// setInterval(function(){
//   const h1 = document.querySelector('h1')
//   if(h1.style.marginLeft === '') {
//     h1.style.marginLeft = '10px';
//   } else {
//     const num = parseInt(h1.style.marginLeft.split("px")[0])
//     h1.style.marginLeft = `${num + 10}px`
//   }
// }, 1000)
