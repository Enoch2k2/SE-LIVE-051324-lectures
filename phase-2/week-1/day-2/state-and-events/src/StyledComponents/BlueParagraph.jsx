import { useRef } from 'react';

function DynamicColorParagraph({ children, color }) {


  let name = useRef("Bob")

  function changeName() {
    name.current = "Sam"
    console.log(name)
  }

  console.log('re-rendering!', name.current)
  return (
    <p style={{ color: color }} onClick={changeName}>{ children }</p>
  )
}

export default DynamicColorParagraph