import React from 'react'
import UserLink from './UserLink'
import Link from './Link'

const LinkList = () => {
  const links = [
    <li key={1}><Link /></li>,
    <li key={2}><Link /></li>,
    <li key={3}><Link /></li>,
    <li key={4}><UserLink /></li>
  ]

  console.log('render linklist')

  return (
    <>
    {links}
    </>
  )
}

export default LinkList