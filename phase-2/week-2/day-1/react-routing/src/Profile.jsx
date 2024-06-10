import React from 'react'
import Navbar from './Navbar'
import { Link, Outlet, useOutletContext } from 'react-router-dom'

const Profile = () => {

  const { profiles } = useOutletContext()

  const profileLinks = profiles.map(profile => <h4 key={profile.id}><Link to={`/profiles/${profile.id}`}>{ profile.username }</Link></h4>)

  return (
    <div>
      <h3>Profile Component</h3>
      { profileLinks}
      <Outlet context={{ profiles }}/>
    </div>
  )
}

export default Profile