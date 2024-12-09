import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-gray-900 flex justify-evenly p-4 items-center'>
      <h1 className='text-4xl text-red-600 text-center font-medium'>Mveer745</h1>
      <ul className='flex justify-evenly w-[200px] font-medium gap-6'>
        <li>
          <NavLink to={"/"} className={({isActive})=> `${isActive ? "text-white" : "text-red-600"}`}>
            Home
          </NavLink>
        </li>
        <li>
        <NavLink to={"/sign-up"} className={({isActive})=> `${isActive ? "text-white" : "text-red-600"}`}>
            Register
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Header