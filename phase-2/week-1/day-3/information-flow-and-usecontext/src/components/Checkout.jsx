import React from 'react'

const Checkout = ({ user }) => {
  return (
    <div>
      <h3>Hello {user.username}, your cart is here!</h3>
    </div>
  )
}

export default Checkout