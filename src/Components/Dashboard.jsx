import React from 'react'

export default function Dashboard() {
  return (
    <div className="p-[50px]">
                <h1 className='text-h3 font-extrabold mb-[50px]'>Dashboard</h1>

                <div className='flex  flex-col md:flex-row lg:flex-row  justify-between gap-[50px]'>
                  <div className='shadow-sh p-[20px] rounded-md w-[100%] md:w-[50%] lg:w-[50%]'> 
                      <h4 className='text-h5 font-bold mb-[20px]'>My Listed Service</h4>


                      <div className='flex  justify-between border-b-[2px] border-gray-300 pt-[1] pb-[10px]'>

                        <div>
                          <h6 className='font-semibold mb-0'>Math Assignment</h6>
                          <p className='mt-0'>Help with math</p>
                        </div>
                        
                        <p className='font-semibold'>$500</p>
                      </div>

                      <div className='flex  justify-between border-b-[2px] border-gray-300 pt-[10px] pb-[10px]'>
                        <div>
                          <h6 className='font-semibold mb-0'>Math Assignment</h6>
                          <p className='mt-0'>Help with math</p>
                        </div>
                        
                        <p className='font-semibold'>$500</p>
                      </div>
                  </div>

                  <div className='shadow-sh p-[20px] rounded-md w-[100%] md:w-[50%] lg:[50%]'>
                      <h4 className='text-h5 font-bold mb-[20px]'>Services I am Providing</h4> 

                      <div className='flex  justify-between border-b-[2px] border-gray-300 pt-[10px] pb-[10px]'>
                        <div>
                          <h6 className='font-semibold mb-0'>Math Assignment</h6>
                          <p className='mt-0'>Help with math</p>
                        </div>
                        
                        <p className='font-semibold text-green-800'>Accepted</p>
                      </div>
                  </div>


                </div>
            </div>
  )
}
