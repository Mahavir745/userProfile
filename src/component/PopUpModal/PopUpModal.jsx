import React, { useRef } from 'react'
import {X} from 'lucide-react'

const PopUpModal = ({onClose,loginInfo}) => {

  return (
    <div className='w-[100%] h-[80vh] absolute flex items-center justify-center backdrop-blur-2xl' onClick={onClose}>
      <div className='w-[400px] h-[120px]  rounded-md bg-teal-100 flex flex-col pl-2'>
        <X className='ml-auto relative bottom-2 left-2 text-white rounded-full hover:scale-90 w-[30px] bg-red-500 cursor-pointer h-[30px]' onClick={onClose}/>
        <p className='text-sky-950 text-center text-[20px] mt-2'>{loginInfo}</p>
      </div>
    </div>
  )
}

export default PopUpModal