import React, { useContext } from 'react'
import Profile from './Profile'
import { UserContext } from './User'

export default function UserProfile() {
  const { handleIncreaseAge } = useContext(UserContext)
  console.log(useContext(UserContext))
  return (
    <div>
      <Profile />
      <button onClick={handleIncreaseAge}>Increase Age</button>
    </div>
  )
}
