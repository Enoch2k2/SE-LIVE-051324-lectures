import { useState } from 'react'
import Navbar from './components/Navbar'
import UserProfile from './components/UserProfile'
import Todos from './components/Todos'
import Checkout from './components/Checkout'

function App() {

  const [user, setUser] = useState({ username: "Bob" })

  function updateName() {
    setUser({username: user.username === "Bob" ? "Sam" : "Bob"})
  }
  
  return (
    <>
      <Navbar user={user} updateName={updateName} />
      <UserProfile user={user} />
      <Checkout user={user}/>
      <Todos user={user}/>
    </>
  )
}

export default App
