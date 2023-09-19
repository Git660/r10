import React from 'react'
import profile from './centralise'
import {user,user1}from './centralise'
const page = () => {
  console.log(profile)
  return (
    <div><h1>
      {profile.name}
      {profile.age}
      

    </h1>
    <p>{}curly braces is used for const import</p>
    <h2>{user.name}</h2>
    </div>
  )
}

export default page