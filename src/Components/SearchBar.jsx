import React from 'react'

export default function SearchBar() {
  return (
    <div className='flex justify-between shadow-sm border-2 w-[100%]  p-[10px] pl-[15px] rounded-full'>
     <input className='w-full outline-none border-none' placeholder='Search'/>
     <img  className='w-[25px]' src="https://img.icons8.com/ios/50/search--v1.png"/>
    </div>
  )
}