import { useState } from 'react'
import Navbar from './components/Navbar'
import UserProfile from './components/UserProfile'
import Todos from './components/Todos'
import Checkout from './components/Checkout'

function App() {


  
  return (
    <>
      <Navbar />
      <UserProfile  />
      <Checkout />
      <Todos />
    </>
  )
}

export default App
