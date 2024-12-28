import React from 'react'
import SearchBar from './SearchBar'

export default function TopBar(props) {
  const{select}=props
  return (
   <div className="z-10 bg-white h-[70px]  flex  w-full   p-[10px]  gap-[10px]  shadow-sh items- justify-evenly">

      <SearchBar/> 

      <div className='flex lg:justify-between md:justify-between w-[20%] items-center justify-center '>
          <img className='w-[30px]  self-center h-[30px]' src="https://img.icons8.com/fluency-systems-regular/50/appointment-reminders--v1.png"/>
        

        
          <img  className=' w-[30px] h-[30px] hidden md:block lg:block  cursor-pointer  self-center rounded-full' src="https://img.icons8.com/windows/32/gender-neutral-user.png" onClick={()=>{select("userboard")}}/>
        
        
        
          <img  className='hidden md:block lg:block  cursor-pointer w-[30px] h-[30px] self-center rounded-full' src="https://img.icons8.com/windows/32/exit.png" />
        
      </div>
     
   </div>
  )
}