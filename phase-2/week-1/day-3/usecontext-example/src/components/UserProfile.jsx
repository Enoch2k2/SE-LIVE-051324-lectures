import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'


const UserProfile = () => {
  const { user } = useContext(UserContext)
  return (
    <h3>Hello {user.username}!</h3>
  )
}

export default UserProfile