import React, { useState } from 'react'
import User from './User'
import PopUpModal from '../PopUpModal/PopUpModal'
import { useNavigate } from 'react-router-dom'

const Profile = ({HandleUserProfile}) => {
  const data= HandleUserProfile()
  const navigate = useNavigate()
  console.log(data)

  let loginInfo = "User Data is not found! Register first";
   function handlePopup(){
    navigate("/sign-up")
  }

  return (
    <>
    {!data && <PopUpModal onClose={handlePopup} loginInfo={loginInfo}/>}
    {data && <User data={data}/>}
    </>
  )
}

export default Profile