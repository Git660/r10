import React from 'react'
import profile from './mport'
const page = () => {
  console.log(profile)
  return (
    <div><h1>
      {profile.name}
      {profile.age}
      

    </h1>
    </div>
  )
}

export default page