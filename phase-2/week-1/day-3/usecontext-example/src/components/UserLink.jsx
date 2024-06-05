import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const UserLink = () => {
  const { user, updateName } = useContext(UserContext)
  return (
    <a href="#" onClick={updateName}>{user.username}</a>
  )
}

export default UserLink