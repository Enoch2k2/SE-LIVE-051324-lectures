# Phase 1 Week 1 Day 3

### Lecture: DOM Events

#### Agenda

* creating events
* MDN Events
* DOMContentLoaded
* Click
* Hover
* DblClick
* Submit

### Javascript Events

Javascript adds interaction with websites through events. You syntax:

```
targetNode.addEventListener("eventType", callback)
```

So example

```
document.addEventListener("DOMContentLoaded", function(){
  // code here for when the document fully loads
})
```

### MDN Events

MDN is a website that used for javascript documentation. It is our official source of information regarding Javascript. Direct link [here](https://developer.mozilla.org/en-US/docs/Web/Events)

### Event types
Here are a few common event types
```
DOMContentLoaded - will trigger when page loads
click - will trigger when element is clicked
dblclick - will trigger when element is double clicked
change - will trigger when value changes
submit - will trigger when form is submitted
keydown - will trigger when key is press
keyup - will trigger when key is released
mouseclick - will trigger when mouse is clicked
```