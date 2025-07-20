import React from 'react'
import UserDetails from './UserDetails'

function UserInfo(userData) {
  return (
    <div>
        <UserDetails userData={userData} />;
    </div>
  )
}

export default UserInfo