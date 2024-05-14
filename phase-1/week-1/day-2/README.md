# Phase 1 Week 1 Day 2

### Lecture: DOM Manipulation

#### Agenda

* Creating a new JS project
* Linking HTML to Javascript
* .querySelector
* .querySelectorAll
* .getElementById
* .getElementsByClassName
* .style
* .innerHTML vs innerTEXT / textContent vs Value
* .createElement
* .appendChild

#### What is the DOM?

DOM is a representation of the html in the browser. The DOM is also a tree!

                    html
                  /     \
                Head    Body
                      /     \
                    div      div

### What is a node?

Nodes are an element in HTML given to us as a Javascript object!

### Setting up a project (Minimum Filestructure)

Project Folder
 - index.html
 - index.js
 - index.css (optional)

### How do we select Nodes in javascript

```
document - gives us the entire html document

.querySelector("css selector") - Selects one node that matches css the selector
.querySelectorAll("css selector") - Selects all nodes that matches the css seletor
.getElementById("id") - Selects one node by the id attribute
.getElementsByClassName - Selects all nodes by the class names
.style - access the css styling of the node
.innerHTML - stringifies all the html inside the node, can be used to set / reset the html in the node using .innerHTML = "some other HTML".
.innerText - gives back the text of a node, will not convert to html
.textContent - another way to get text of a node, will not convert to html
.value - how you can retrieve values / user inputs from form elements
.createElement - How to create a DOM node
.appendChild - How you can add a DOM node as a child to a node
```

Helpful tips

Mac
`cmd + option + up/down arrow` - makes a verticle line of inputs so you can write multiples at one time.
Windows
`ctrl + alt + up/down arrow` - makes a verticle line of inputs so you can write multiples at one time.

Mac
`cmd + d` after highlighting a word or phrase, will highlight any reocurring instances of that word or phrase allowing you to edit all at once.
Windows
`ctrl + d` after highlighting a word or phrase, will highlight any reocurring instances of that word or phrase allowing you to edit all at once.