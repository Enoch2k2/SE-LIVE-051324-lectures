import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const Checkout = () => {
  const { user } = useContext(UserContext)
  return (
    <div>
      <h3>Hello {user.username}, your cart is here!</h3>
    </div>
  )
}

export default Checkout