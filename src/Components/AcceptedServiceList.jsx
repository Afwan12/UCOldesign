import React from 'react'
import AcceptedService from './AcceptedService'

export default function AcceptedServiceList(props) {
   const{services,del,select}=props
     if(services.length==0){
       return(
         <h4 className='text-h3 font-bold text-center'>
           No Services Available
         </h4>
       )
     }
     else{
   
     
     return (
       <div className='overflow-y-scroll  items-start p-[30px] pt-0 grid  gap-[20px]'>
           {services.map((service,serviceIndex)=>{
             return(
               <AcceptedService key={serviceIndex} del={del} serviceIndex={serviceIndex} select={select} service={service} />
             )
           })}
       </div>
     )
   }
}
