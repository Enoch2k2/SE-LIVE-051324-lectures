# Communicating With The Server

### Agenda

* How the internet works
* HTTP methods
* JSON & Serialization
* How to setup a mock json server
* POSTMAN
* Sending request (fetch)
* asynchronous vs synchronous and callstacks

### How the internet works

The internet consists of clients and servers. Servers are where data is kept and where clients can connect to in order to retrieve data or documents.


```
        Server
      /    |    \
  client client client
```

### HTTP Methods

HTTP Methods are the way we tell our request to servers what we would like to do.

Requests:
* GET - requesting a document or data
* POST - we are creating new data
* PATCH/PUT - we are updating data
* DELETE - we are deleting data

```
Example

// this would give us a list of puppies data
GET /puppies 
```

### JSON & Serialization

The process of taking data and converting it to a format for transfer is what we call serializing. So when we want to send things through the internet to another application that might be using some other language such as python, or ruby, we need a format that it will recognize and understand. There are many different formats such as text and xml, but the most commonly used format is JSON (Javascript Object Notation).

To send data, we stringify either a javascript array or object.
To retrieve data, we parse the stringified JSON (which would be an array or object)

### How to setup a mock json server

Instructions
* Install json-server with `npm i -g json-server`
* create a `db.json` file in your project
* add some data, example:
```
// inside of db.json

{
  "pets": [
    {
      "id": 1,
      "name": "Fido",
      "species": "Dog",
      "breed": "Golden Retriever"
    },
    {
      "id": 2,
      "name": "Milo",
      "species": "Cat",
      "breed": "Tabby"
    }
  ]
}
```
* afterwards start your json server with `json-server --watch db.json`.
* make your requests to the urls provided by your server, example:

```
 // based on the example in the above snippet

 GET 'http://localhost:3000/pets' - to get all of the pets
 POST 'http://localhost:3000/pets' - to create a pet
 
 GET 'http://localhost:3000/pets/1' - to get the pet with the id of 1
 PATCH 'http://localhost:3000/pets/1' - to update the pet with the id of 1
 DELETE 'http://localhost:3000/pets/1' - to delete the pet with the id of 1
```

### POSTMAN

Postman is a tool that let's you make requests to a server to retrieve data. You can get postman from [here](https://www.postman.com/downloads/).

### Sending Request

In order for our html / js project (which is our client side project) to communicate with our json server (backend data side), we will need to send a request to it in javascript using a function called `fetch`.

```
fetch('http://localhost:3000/pets')
  .then(resp => resp.json())
  .then(data => {
    // do something with data
  })
```

### Asynchronous vs synchronous

Looking at the example above in the sending request section. You can see we a function call, it gives back something, then we call .then on that something that it gives back. This something is what we call a promise object.

Promise objects have 3 statuses:
* pending
* fulfilled
* rejected

This promise object is given to us as a promise to return something for our request. Requests take time, so instead of doing things in our usual synchronous order (from top to bottom, left to right), our fetch will get moved into an asychronous callstack. It will be moved to the side by itself to wait for that data to come in. While that data is being fetched, our code will continue. It will not wait for the fetch request to resolve to run more code.

Once the fetch has been resolved and it moves from pending state to fulfilled or rejected, then it gets moved to the bottom of our callstack (our queued up code that is being processed at the time). This is when our `.then` functions will start calling, starting with the first `.then`:

```
.then(resp => resp.json())
```

So what we can see here is that the `.then` takes in a `callback` function. So here we define a function and we call the argument `resp` as it represents the server's `response` to us from our `request`. We then take that request and parse the stringified `json` from it.

After the first `.then` finishes, it will return another `promise` that will resolve itself to the next `.then`

```
.then(data => {
    // do something with data
  })
```

This is when we access our `json` data that we parsed from the previous `resp.json()`. It gets passed in as an argument that we called `data` that in the callbac function we can do things with it. Such as create `li` tags and add it to our HTML.

[HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)