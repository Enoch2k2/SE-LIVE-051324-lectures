import React from 'react'

const UserLink = ({user, updateName}) => {
  console.log('render userlink')
  return (
    <a href="#" onClick={updateName}>{user.username}</a>
  )
}

export default UserLink