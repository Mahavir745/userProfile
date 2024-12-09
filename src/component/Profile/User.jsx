import React from 'react'

const User = ({data}) => {
  return (
    <div className='flex flex-col items-center gap-10 w-[300px] m-auto mt-4 mb-4 md:flex-row md:w-[800px] lg:w-[1000px]'>
      <img src="https://t4.ftcdn.net/jpg/04/83/90/95/360_F_483909569_OI4LKNeFgHwvvVju60fejLd9gj43dIcd.jpg" className='p-4 border' />
      <div className='w-[400px] h-[auto] md:w-[500px] lg:w-[700px] border'>
        <h1 className='text-3xl  bg-gray-600 text-white border p-2'>Name: <span className='text-2xl text-emerald-100 '>{data.username}</span></h1>
        <p className='text-3xl bg-gray-600 text-white border p-2'>Email: <span className='text-2xl text-emerald-100 '>{data.email}</span></p>
        <p className='text-3xl bg-gray-600 text-white border p-2'>Contact: <span className='text-2xl text-emerald-100 '>{data.contact}</span></p>
        <p className='p-4'>This project, built with React, focuses on understanding user profile management through a login and signup process on the frontend. It involves creating forms for user registration and login, validating user input, and simulating the process of storing and managing user data (without a backend). The goal is to learn how to handle the UI/UX of user authentication, including form validation, session management (e.g., using local storage or state), and displaying user profiles..</p>
      </div>
    </div>
  )
}

export default User