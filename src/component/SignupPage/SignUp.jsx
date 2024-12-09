import React from 'react'
import { useContext, useRef } from 'react'
import { dataContextProvider } from '../Store/data-store'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = ({popup,setPopup}) => {
  const {addUser} = useContext(dataContextProvider)
  const navigate = useNavigate()

  const emailElement = useRef()
  const contactElement = useRef()
  const passwordElement = useRef()
  const confirmElement = useRef()

  function HandleRegisterBtn(e){
    e.preventDefault();
    const email = emailElement.current.value;
    const contact = contactElement.current.value;
    const password = passwordElement.current.value;
    const confirmPass = confirmElement.current.value;
    const id = Date.now()

    const random = Math.floor(Math.random()*(99-10)+10)
    const indexEmail = email.indexOf("@")
    const username = email.split("").splice(0,indexEmail).join("") + random
    

    emailElement.current.value = ""
    contactElement.current.value = ""
    passwordElement.current.value = ""
    confirmElement.current.value = ""

    const user = {username,id,email,contact,password,confirmPass}

    if(email !== "" && contact !== "" && password !== "" && confirmPass !== ""){
      addUser(user)
      navigate("/")
    }
    else{
      popup = true
      setPopup(popup)
    }
  }


  return (
    <div className='h-[auto] mb-5' onSubmit={(e)=> HandleRegisterBtn(e)}>
    <form className='border mt-4 w-[360px] md:w-[580px]  h-[580px] m-auto'>
    <h2 className='bg-sky-700 text-white text-[32px] text-center'>Register</h2>
      <div className='w-[300px] md:w-[500px]  mt-3 rounded p-2 flex flex-col border m-auto'>
        <label htmlFor="emailId" className='block'>Email: <span className='text-red-800'>*</span> </label>
        <input type="email" id='emailId' className='peer border w-[100%] p-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 peer required' ref={emailElement}/>
        <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
            Please provide a valid email address.
          </p>
      </div>
      <div className='w-[300px] md:w-[500px] mt-3 rounded p-2 flex flex-col border m-auto'>
        <label htmlFor="Contact" className='block'>Contact: <span className='text-red-800'>*</span></label>
        <input type="number" id='Contact' className='border w-[100%] p-2 focus:outline-sky-600 required appearance-none' ref={contactElement}/>
      </div>
      <div className='w-[300px] md:w-[500px] mt-3 rounded p-2 flex flex-col border m-auto'>
        <label htmlFor="Create-Password" className='block'>Create Password: <span className='text-red-800'>*</span></label>
        <input type="password" id='Create-Password' className='border w-[100%] p-2 focus:outline-sky-600 required' ref={passwordElement}/>
      </div>
      <div className='w-[300px] md:w-[500px] mt-3 rounded p-2 flex flex-col border m-auto'>
        <label htmlFor="Confirm-Password" className='block'>Confirm Password: <span className='text-red-800'>*</span></label>
        <input type="password" id='Confirm-Password' className='border w-[100%] p-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 peer required' ref={confirmElement}/>
      </div>
      <div className='w-[300px] md:w-[500px] mt-3 rounded p-2 flex flex-col m-auto'>
        <button className='border p-2 w-[100%] bg-sky-700 text-white rounded-lg' type='submit'>Register</button>
        <p className=''> Already have an accout:  <Link className='text-green-600 hover:text-blue-500' to={"/"}>Login Here</Link></p>
      </div>
    </form>
  </div>
  )
}

export default SignUp