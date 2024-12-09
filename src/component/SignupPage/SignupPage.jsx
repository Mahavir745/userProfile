import { useState } from 'react';
import PopUpModal from '../PopUpModal/PopUpModal';
import SignUp from './SignUp';


const SignupPage = () => {

  const [popup,setPopup] = useState()

  function handlePopup(){
    setPopup(false)
  }

  let signUpInfo = "Warning: Input should be a value. Please check it once. Try Agian!"


  return (
    <>
    {popup && <PopUpModal onClose={handlePopup} loginInfo={signUpInfo}/>}
    {<SignUp popup={popup} setPopup={setPopup}/>}
    </>
  )
  
}

export default SignupPage