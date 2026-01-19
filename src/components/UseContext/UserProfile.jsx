import { useContext } from "react";
import { UserContext } from "./UserContext";

import React from 'react'

const UserProfile = () => {
    const {user} = useContext(UserContext);

  return (
    <div>
      <h1>User Profile</h1>
      <h1>Name: {user.name}</h1>
    </div>
  )
}

export default UserProfile
