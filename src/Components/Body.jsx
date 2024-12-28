import React from 'react'

export default function Body(props) {
  const{setmodal}=props
  return (
      <div className='grid bg-white p-[30px] w-full  gap-[10px] justify-center items-center sm:grid md:grid lg:grid md:grid-cols-[1fr,300px] lg:grid-cols-[1fr,300px]'>
        <div >
          <h1 className='text-h3 font-bold'>All Services</h1>
          <h4>Find and connect with trusted service providers in your campus</h4>
        </div>
        <button className='bg-black text-white  border-black border-[1px]  hover:text-black transform-2s hover:bg-white h-[50px] rounded-md' onClick={()=>{setmodal(true)}}>List Service</button>
      </div>
    
  )
}