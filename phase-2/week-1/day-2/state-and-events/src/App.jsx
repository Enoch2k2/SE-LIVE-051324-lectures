import Header from './components/Header'
import DynamicColorParagraph from './StyledComponents/BlueParagraph'
import { useState, useRef } from 'react'

function App() {
  const [age, setAge] = useState(32)
  const [color, setColor] = useState("blue")
  const [name, setName] = useState("Bob")
  const counter = useRef(0)

  function handleClick() {
    setAge(age + 1)
    console.log('in the handleClick aka the trigger', age)
  }

  function handleColorClick() {
    color == "blue" ? setColor("green") : setColor("blue")
  }

  function handleCounter() {
    counter.current = counter.current + 1
  }

  function handleNameChange() {
    name == "Bob" ? setName("Sam") : setName("Bob")
  }
  
  console.log('outside of the handle click',age)

  return (
    <div>
      <Header name={name} age={age} handleNameChange={handleNameChange} color={color} />
      <DynamicColorParagraph color={color}>
        This is fine!
      </DynamicColorParagraph>
      <DynamicColorParagraph color={color}>
        This is fine!
      </DynamicColorParagraph>
      <DynamicColorParagraph color={color}>
        This is fine!
      </DynamicColorParagraph>
      <DynamicColorParagraph color={color}>
        { counter.current }
      </DynamicColorParagraph>
      <button onMouseEnter={ handleClick }>Click Me!</button>
      <button onMouseLeave={ handleColorClick }>Change Color!</button>
      <button onClick={ handleCounter }>Update Counter</button>
    </div>
  )
}

export default App