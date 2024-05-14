const list = document.getElementById("list")


// for(let i = 0; i  < newColors.length; i++) {
//   const color = newColors[i]
//   const li = document.createElement('li')
//   li.innerText = color
//   li.className = 'item'
//   list.appendChild(li)
// }

function createColor() {
  const input = document.getElementById("text-input").value
  const li = document.createElement('li')
  li.innerText = input
  li.className = 'item'
  list.appendChild(li)
}

setInterval(function(){
  const h1 = document.querySelector('h1')
  if(h1.style.marginLeft === '') {
    h1.style.marginLeft = '10px';
  } else {
    const num = parseInt(h1.style.marginLeft.split("px")[0])
    h1.style.marginLeft = `${num + 10}px`
  }
}, 1000)