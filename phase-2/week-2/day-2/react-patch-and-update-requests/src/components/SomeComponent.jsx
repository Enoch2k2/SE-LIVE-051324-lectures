import React from 'react'
import { useOutletContext } from 'react-router-dom'

const SomeComponent = () => {
  const { blogs } = useOutletContext()
  console.log(blogs)
  return (
    <div>
      <h4>Some component!</h4>
    </div>
  )
}

export default SomeComponent