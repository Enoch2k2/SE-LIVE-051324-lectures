import React from 'react'

const UserProfile = ({ user }) => {
  return (
    <h3>Hello {user.username}!</h3>
  )
}

export default UserProfile