import React from 'react'
import LinkList from './LinkList'

const Navbar = ({user, updateName}) => {
  console.log('render navbar')
  return (
    <ul>
      <LinkList user={user} updateName={updateName} />
    </ul>
  )
}

export default Navbar