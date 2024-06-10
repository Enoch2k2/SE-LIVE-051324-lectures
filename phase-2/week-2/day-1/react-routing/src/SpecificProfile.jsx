import React from 'react'
import { useParams, useOutletContext } from 'react-router-dom'

const SpecificProfile = () => {
  const { id } = useParams()

  const {profiles} = useOutletContext()

  const profile = profiles.find(profile => profile.id == id)

  if(!profile) { return <h1>Loading page...</h1> }

  return (
    <div>
      <h3>SpecificProfile {profile.username}</h3>
    </div>
  )
}

export default SpecificProfile