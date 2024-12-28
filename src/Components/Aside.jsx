import React from 'react'

export default function Aside(props) {
    const {sort,selected}=props
  return (
    <aside className="   z-20 relative p-[20px] pt-[30px] hidden md:block lg:block justify-center h-full  shadow-sh  ">
        <h1 className=" text-left text-h4 block font-bold mb-[60px]  text-[#295f2d]">UniClap</h1>

        <div className='flex  items-center flex-col  justify-center  gap-[10px]'>

                <div className="flex gap-[5px]">
                    <img   className='w-[20px] h-[20px] self-center' src="https://img.icons8.com/forma-light/24/home.png"/>
                    <p className=' cursor-pointer font-[500]' onClick={()=>{selected("dashboard")}}>Dashboard</p>
                </div>

                <div className="flex gap-[5px]">
                    <img className='w-[20px] h-[20px] self-center' src="https://img.icons8.com/ios-filled/25/services--v1.png"/>
                    <p className=' cursor-pointer font-[500]' onClick={()=>{selected("AllServices")}}>All Services</p>
                 </div>
        </div>
        
        <h4 className='font-bold mt-[20px] text-[#615567ac]'>Regular Services</h4>

        
        <div className='flex  flex-col items-center gap-[10px] justify-center mt-[5px]'>
       
        
                 <div className="flex gap-[5px]">
                    <img className='w-[20px] h-[20px] self-center' src="https://img.icons8.com/windows/32/book--v1.png" />
                    <p className=' cursor-pointer font-[500]' onClick={()=>{}}> Academic Help</p>
                </div>

                <div className="flex gap-[5px]">
                    <img className='w-[20px] h-[20px] self-center'  src="https://img.icons8.com/windows/32/source-code.png"/>
                    <p className=' cursor-pointer font-[500]' onClick={()=>{}}> Tech Support</p>
                </div>    

                <div className="flex gap-[5px]">
                    <img className='w-[20px] h-[20px] self-center'  src="https://img.icons8.com/material-outlined/24/cup--v1.png" />
                    <p className=' cursor-pointer font-[500]' onClick={()=>{}}> Food Delivery</p>
                </div>

                <div className="flex gap-[5px]">
                    <img className='w-[20px] h-[20px] self-center'  src="https://img.icons8.com/ios-glyphs/30/cycling-road.png" />
                    <p className=' cursor-pointer font-[500]' onClick={()=>{}}> Ride Sharing</p>
                </div>   
        </div>


        <h4 className='font-bold  mt-[20px] text-[#615567ac]'>Personal</h4>


        <div className='flex flex-col items-center justify-center gap-[10px] mt-[5px]'>
           
                <div className="flex gap-[5px]">
                    <img className='w-[20px] h-[20px] self-center' src="https://img.icons8.com/material-rounded/50/service.png" />
                    <p className=' cursor-pointer font-[500]' onClick={()=>{}}> My Services</p>
                </div>
                
                <div className="flex gap-[5px]">
                    <img className='w-[20px] h-[20px] self-center'  src="https://img.icons8.com/external-smashingstocks-glyph-smashing-stocks/66/external-accepted-finance-smashingstocks-glyph-smashing-stocks.png"/>
                    <p className=' cursor-pointer font-[500]' onClick={()=>{selected("AcceptedService")}}>Accepted Services</p>
                </div>
                
                <div className="flex gap-[5px]">
                    <img className='w-[20px] h-[20px] self-center'  src="https://img.icons8.com/ios-filled/150/settings.png" />
                    <p className=' cursor-pointer font-[500]'>Settings</p>
                </div>
                
                <div className="flex gap-[5px]">
                    <img className='w-[20px] h-[20px] self-center'  src="https://img.icons8.com/material-sharp/24/headset.png" />
                    <p className=' cursor-pointer font-[500]'>Support</p>
                </div>
                    
            </div>
        
    </aside>
  )
}