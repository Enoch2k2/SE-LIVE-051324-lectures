import React from 'react'

const Todos = ({ user }) => {
  return (
    <div>
      <h3>Hello {user.username}, your Todos Today!</h3>
    </div>
  )
}

export default Todos