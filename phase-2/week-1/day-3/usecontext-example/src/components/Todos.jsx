import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'


const Todos = () => {
  const { user } = useContext(UserContext)

  return (
    <div>
      <h3>Hello {user.username}, your Todos Today!</h3>
    </div>
  )
}

export default Todos