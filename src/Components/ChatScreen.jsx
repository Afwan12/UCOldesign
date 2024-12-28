import React from 'react'

export default function ChatScreen(props) {
  const{select}=props
  return (
    <div className=' justify-center items-center h-screen '>
      
        {/* <div className="z-20 bg-white flex justify-end gap-[50px] w-full  md:w-full lg:w-full p-[10px]   md:h-[80px] lg:h-[80px] shadow-lg items-center">
            <img className='w-[30px] cursor-pointer' src="https://img.icons8.com/fluency-systems-regular/50/appointment-reminders--v1.png"/>
      <img  className='hidden md:block lg:block  cursor-pointer w-10 self-center rounded-full' src="https://img.icons8.com/windows/32/gender-neutral-user.png" onClick={()=>{select("userboard")}}/>
        </div> */}

        
        <body className=' grid grid-rows-[1fr,9fr,1fr]  h-screen'>
        
          <div className='border-b-[1px] border-black  gap-[20px] p-[10px] flex justify-between'>
            <img   className="cursor-pointer" src="https://img.icons8.com/fluency-systems-regular/50/circled-left-2.png" alt="circled-left-2" onClick={()=>{select("AcceptedService")}}/> 
            
            <div className='flex gap-[20px]'>
              <img  className='hidden md:block lg:block  w-10 self-center rounded-full' src="https://img.icons8.com/windows/32/gender-neutral-user.png"/>
              <h1 className='text-h4 self-center font-semibold'>Name</h1>
            </div>
           
            <img width="50" height="50" src="https://img.icons8.com/ios/50/info--v1.png" alt="info--v1"/>
          </div>

          
          <div>

          </div>

          <div className='flex border-[2px] border-black just-space-between p-[10px] mr-[10px] ml-[10px] rounded-full self-baseline'> 
            <input type="text" placeholder="Type a message" className='w-full outline-none bg-inherit' />
            <img  src="https://img.icons8.com/ios-glyphs/30/filled-sent.png" alt="filled-sent"/>
          </div>

        </body>
    </div>
  )
}
