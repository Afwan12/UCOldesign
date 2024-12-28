import React from 'react'
import Services from './Services'

export default function ServiceList(props) {
  const{services,del,accept}=props
  if(services.length==0){
    return(
      <h4 className='text-h3 font-bold text-center'>
        No Services Available
      </h4>
    )
  }
  else{

  
  return (
    <div className=' overflow-y-scroll  items-start p-[30px] pt-0 grid  gap-[20px]'>
        {services.map((service,serviceIndex)=>{
          return(
            <Services key={serviceIndex} serviceIndex={serviceIndex} del={del} service={service} accept={accept}/>
          )
        })}
    </div>
  )
}
}