import { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

function App() {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    async function getProfiles() {
      const resp = await fetch('http://localhost:3000/profiles')
      const data = await resp.json()
      setProfiles(data)
    }
    getProfiles()
  }, [])

  return (
    <div>
      <Navbar />
      <h1>Welcome React Routing!</h1>
      <Outlet context={{ profiles: profiles }}/>
    </div>
  )
}

export default App
