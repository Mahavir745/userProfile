
import { useContext, useState } from 'react';
import PopUpModal from '../PopUpModal/PopUpModal';
import Login from './Login';
import {useNavigate, useParams } from 'react-router-dom';
import { dataContextProvider } from '../Store/data-store';

const LoginPage = () => {
  const [popup,setPopup] = useState()
  let {userId} = useParams();
  const {loginList} = useContext(dataContextProvider)
  const navigate  = useNavigate()

  const email = loginList.email
  const password = loginList.password

  let loginInfo;

 if(email === ""){
    loginInfo = "Warning: Enter your email. Try Agian!"
  }
  else if(password === ""){
    loginInfo = "Warning: Enter your password"
  }
  else if(!(email.includes("@gmail.com"))){
    loginInfo = "Warning: Please use a valid email Address"
  }
  else{
    userId = email.split("@")[0]
    navigate(`/userprofile/${userId}`)
  }
  
  function handlePopup(){
    setPopup(false)
  }

  return (
    <>
    {popup && <PopUpModal onClose={handlePopup} loginInfo={loginInfo}/>}
    {<Login popup={popup} setPopup={setPopup}/>}
    </>
  )
}
export default LoginPage