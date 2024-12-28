import React from 'react'

export default function AcceptedService(props) {
    const{service,del,serviceIndex,select}=props
    return(
        <div className='shadow-md h-auto bg-white border-[1.2px] p-[20px] rounded-md'>
    <div className='grid gap-[8px] grid-cols-[50px,1fr]'>
        <div className='top-[10px]'>
          <img  className='mt-[2px] rounded-full' src={service.userImg}/>   
        </div>
        <div className='text-left align-top'>
            <h4  className='font-semibold'>{service.title}</h4>
            <p  className=' text-sm font-semibold text-[#615567ac]'>Posted by {service.user}</p>
        </div> 
    </div>
        
    <p className='mt-[5px]'>{service.disp}</p>

    <div className='mt-[20px]  items-center grid grid-cols-[1fr,4fr] lg:grid-cols-[3fr,1fr] md:grid-cols-[3fr,1fr]'>
        <div>
            <p className='font-semibold'>₹{service.cost}</p>
        </div>
        <div className='grid grid-cols-2 gap-[7px]'>
            <button className='p-[10px] bg-black border-black border-[1px]  hover:text-black transform-2s hover:bg-white  text-white rounded-md'onClick={()=>{select("chat")}} >Chat</button>
            <button className='p-[10px]  bg-white border-red-600 border-[1px] text-red-600  hover:bg-red-600 hover:text-white rounded-md' onClick={()=>{del(serviceIndex,"accepted")}}>Decline</button>
        </div>
        
    </div>
</div>
    )
    
}
