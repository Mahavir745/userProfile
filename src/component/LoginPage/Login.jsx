import React, { useContext, useRef } from 'react'
import { dataContextProvider } from '../Store/data-store'
import { Link} from 'react-router-dom'
import { LogIn } from 'lucide-react';

const Login = ({popup,setPopup}) => {
  const userElement = useRef()
  const userPassword = useRef()
  const {loginData} = useContext(dataContextProvider)

  const HandleLogin = (e) => {
    e.preventDefault();

    const email = userElement.current.value;
    const password = userPassword.current.value;
    userElement.current.value = ""
    userPassword.current.value = ""

    const userInfo = { email, password }
    loginData(userInfo)
    popup = true
    setPopup(popup)
  }

  return (
    <div className='h-[auto] mb-5'>
    <form className='border mt-4 w-[360px] md:w-[580px] h-[400px] m-auto' onSubmit={(e) => HandleLogin(e)}>
      <h2 className='bg-green-700 text-white text-[32px] text-center'>Login</h2>
      <div className='w-[300px] md:w-[500px] mt-3 rounded p-2 flex flex-col border m-auto'>
        <label htmlFor="userId" className='block'>Enter Your Email Id: </label>
        <input type="email" id='userId' className='border w-[100%] p-2 rounded focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 peer required' ref={userElement} />
        <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
          Please provide a valid email address.
        </p>
      </div>
      <div className='w-[300px] md:w-[500px] mt-3 rounded p-2 flex flex-col border m-auto'>
        <label htmlFor="userId" className='block'>Password:</label>
        <input type="password" id='userId' className='border w-[100%] p-2 focus:outline-sky-500' ref={userPassword} />
      </div>
      <div className='w-[300px] md:w-[500px] mt-3 rounded p-2 flex flex-col m-auto'>
        <button type='submit' className='border p-2 w-[100%] bg-green-700 flex  justify-center text-white rounded-lg'>Login <LogIn/></button>
        <p className=''> If you don't have accout:  <Link className='text-red-600 hover:text-blue-500' to={"/sign-up"}>Register Here</Link></p>
      </div>

    </form>
  </div>
  )
}

export default Login