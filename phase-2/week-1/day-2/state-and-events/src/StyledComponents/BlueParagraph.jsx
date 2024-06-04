import { useEffect } from "react"

function BlueParagraph({ children }) {
  useEffect(() => {
    console.log('c', children)
  }, [])
  return (
    <p style={{ color: "blue" }}>{ children }</p>
  )
}

export default BlueParagraph