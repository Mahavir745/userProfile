import React, { useContext, useState } from 'react'
import { dataContextProvider } from '../Store/data-store'
import Profile from './Profile'


const UserProfile = () => {
  const {loginList,userList} = useContext(dataContextProvider)
  
  function HandleUserProfile(){
    let newdata = userList.find((ele)=>{
      return (ele.email === loginList.email) && (ele.password === loginList.password)
    })

    return newdata
  }
  return (
    <div>
      <Profile HandleUserProfile={HandleUserProfile}/>
    </div>
  )
}

export default UserProfile