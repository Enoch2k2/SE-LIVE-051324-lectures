### The POST Request

Agenda:
* Learning how to structure POST
  * method
  * headers
  * body
* more debugging with results
* manipulating the DOM after the POST
* (Bonus) Validating data


### Structuring a POST Request


Post requests are when we want to create a new resource and store it on our server. We learned about the GET request being super basic in calling `fetch(someurl)` and that's it. However fetch can also be given options as a second argument to the `fetch` request. The options will be an object of key value pairs. The keys of the options we will talk about today is the `method`, `headers`, and the `body`.

```
const blog = {
  title: "Some title",
  content: "Some content",
  author: "Some Author"
}

fetch('http://localhost3000/blogs', {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(blog)
})
```

The `method` explains the verb of the HTTP request. In this case we want to create a new blog object and store it on our server. So we will be making a `POST` request.

The `headers` are meta data that allows us to add additional options to our fetch. In this case the `Accept` is saying, we are `requesting` from the server json. `Content-Type` is saying, we are `sending` json to the server.

The `body` is the serialized data we are sending to the server. Where we use our JSON.stringify to stringify the data into `serialized data` (data converted into a format for transfer).


### Debugging tips for after you send your request

When sending a fetch request to the server, it's not enough to be able to have it show on the page. We will have to do that manually with the data that it sends back. Knowing the data is a must as a programmer. So we should use our problem solving skills as well as problem solving tools to accomplish this.

```
fetch(url, {
  method: "POST",
  headers: {...},
  body: JSON.stringify(someObj)
})
  .then(resp => resp.json())
  .then(data => {
    console.log('returned data from fetch', data)
    debugger
  })
```

Console.log is good for when you just want to know the data and have a quest and easy look at the data. However, using console.log, it will not give you the ability to play around with the data to see how you could use it.

Debugger will freeze the code being processed and let you take over in the console of the browser. Debugger will only activate if the developer tools are open. Once debugger activates, the entire screen will freeze and you will be given control of that point of time.

At this point you want to open console and be able to type in variables / arguments / etc. Anything you want to see if it has value at this point of time. In our example here, we could type in `someObj` as well as `data`. Data would be what's given back from the server, while `someObj` is what we sent to it. Most likely they'd be similiar, however `data` would include an `id` which might be super import for later when we do `PATCH` / `DELETE` request. We can also try manually try adding this item to the page in the console, to see how it could work and do all of the code first in the console of the browser before we even get to coding in our editor.

### Manipulating the DOM After the POST

Whenever you send data to be created with POST and that data comes back, it's waiting for further instructions for what to do with this data. Since just making a POST request isn't enough for it to be shown in the page. We will need to do it ourselves by creating DOM nodes, filling in the DOM nodes with the data's information, and then placing it somewhere on the page with `.appendChild` or some other method that adds it to the page.

### Validating data (BONUS)

Validating data means making sure data is exactly what you expect it to be before sending it off to be saved. Example:

```

const blog = {
  title: "",
  content: "Some content",
  author: "Some Author"
}

let errors = []

function validTitle(title) {
  if(title.length >= 3 && title.length <= 64) {
    return true
  } else {
    errors.push("title must be between 3 and 64 characters long")
    return false
  }
}

function validAuthor(author) {
  if(author.length > 0) {
    return true
  } else {
    errors.push("author must exist")
    return false
  }
}

function validContent(content) {
  if(content.length >= 64 && content.length <= 1024) {
    return true
  } else {
    errors.push("content must be between 64 and 1024 characters long")
    return false
  }
}

if(validTitle(blog.title) && validAuthor(blog.author) && validContent(blog.content)) {
  fetch('http://localhost3000/blogs', {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(blog)
  })
    .then(resp => resp.json())
    .then(data => {
      // clear out errors here
      errors = []
      // render our data with HTML
    })
} else {
  let errorMessages = errors.join(", ")
  alert(errorMassages)
}

```