import React from 'react'

export default function UserDashboard(props) {
    const{select}=props
  return (

            <body className=' relative  overflow-y-scroll no-scrollbar shadow-lg border-[1px] gap-[20px] flex flex-col items-center h-[100%] p-[30px]  border-black rounded-md justify-start'>
                
                <img  className=" absolute left-[20px] cursor-pointer" src="https://img.icons8.com/fluency-systems-regular/50/circled-left-2.png" alt="circled-left-2" onClick={()=>{select("dashboard")}}/> 
            
                <h1 className='text-h2 font-bold  '> Your Details</h1>



                
                <div className='   grid grid-cols-[100px,1fr,1fr]  w-[80%] gap-[20px] self-start'>
                    {/*name*/} 
                    <p className='self-end text-h5'>Name</p>

                    <fieldset className='border-[1px] border-black just-space-between p-[2px]  pl-[10px] rounded-md'>
                        <legend className='text-sm text-gray-500'>First Name</legend>
                        <input type="text" className='w-full border-none outline-none' placeholder='First Name'  />
                    </fieldset>


                    <fieldset className='border-[1px] border-black just-space-between p-[2px]  pl-[10px] rounded-md'>
                        <legend className='text-sm text-gray-500'>Last Name</legend>
                        <input type="text" placeholder='Last Name' />
                    </fieldset>

                    {/*email*/} 
                    <p className='self-end text-h5'>Email</p>
                    <fieldset className='border-[1px] border-black just-space-between p-[2px]  pl-[10px] rounded-md'>
                        <legend className='text-sm text-gray-500'>Email</legend>
                        <input type="email" placeholder='Email'  className='w-full border-none outline-none '/>
                    </fieldset>
                    <p></p>

                    {/*number*/} 
                    <p className='self-end text-h5'>Number</p>
                    <fieldset className='border-[1px] border-black just-space-between p-[2px]  pl-[10px] rounded-md'>
                        <legend className='text-sm text-gray-500'>Number</legend>
                        <input type="number"  length={10} placeholder=' Number'  className='w-full border-none outline-none'/>
                    </fieldset>

                    <fieldset className='border-[1px] border-black just-space-between p-[2px]  pl-[10px] rounded-md'>
                        <legend className='text-sm text-gray-500'>Alternative Number</legend>
                        <input type="number"  length={10} placeholder='Alternative number'  className='w-full border-none outline-none'/>
                    </fieldset>
                    <p></p>

                    <fieldset className='border-[1px] border-black just-space-between p-[2px]  pl-[10px] rounded-md'>
                        <legend></legend>
                        <input type="number"  length={10} placeholder=' Landline'  className='w-full border-none outline-none'/>
                    </fieldset>
                    <p></p>

                    {/*dob*/} 
                    <p className='self-end text-h5'>Dob</p>

                    <fieldset className='border-[1px] border-black just-space-between p-[2px]  pl-[10px] rounded-md'>
                        <legend className='text-sm text-gray-500'>Dob</legend>
                        <input type="date" placeholder='Dob'  className='border-none outline-none w-full'/>
                    </fieldset>

                    {/*age*/}       
                    <fieldset className='border-[1px] border-black just-space-between p-[2px]  pl-[10px] rounded-md'>
                        <legend className='text-sm text-gray-500'>Age</legend>
                        <input type="number" placeholder='Age'  className='w-full no-scroll border-none outline-none'/>
                    </fieldset>

                    {/*Address*/}       
                    <p className='self-end text-h5'>Address</p>

                    <fieldset className='border-[1px] border-black just-space-between p-[2px] col-span-2 pl-[10px] rounded-md'>
                        <legend className='text-sm text-gray-500'>Address Line 1</legend>
                        <input type="number" placeholder='Age' className='w-full no-marker border-none outline-none'/>
                    </fieldset>
                    <p></p>

                    <fieldset className='border-[1px] border-black just-space-between p-[2px] col-span-2 pl-[10px] rounded-md'>
                        <legend></legend>
                        <input type="text" placeholder='Address Line 2' className='w-full border-none outline-none'/>
                    </fieldset>

                    <p></p>

                    <fieldset className='border-[1px] border-black just-space-between p-[2px]  pl-[10px] rounded-md'>
                        <legend className='text-sm text-gray-500'>State</legend>
                        <input type="text" placeholder='City' className='w-full border-none outline-none'/>
                    </fieldset>


                    <fieldset className='border-[1px] border-black just-space-between p-[2px]  pl-[10px] rounded-md'>
                        <legend className='text-sm text-gray-500'>District</legend>
                        <input type="text" placeholder='District' className='w-full border-none outline-none'/>
                    </fieldset>

                    {/* Gender*/}
                    <p className='self-end text-h5'>Gender</p>
                    <div  className='flex gap-[10px]'>
                        <input name='gender' type="radio" value="male"/><p>Male</p>
                        <input name='gender' type="radio" value="male"/><p>Female</p>
                    </div>
                    <p></p>





{/*About*/}  
                    <p className='self-center text-h5'>About</p>
                    <fieldset className='border-[1px] col-span-2 border-black just-space-between p-[2px]  pl-[10px] rounded-md'>
                        <legend className='text-sm text-gray-500'>About</legend>
                        <textarea type="text" placeholder='About'  className='w-full border-none outline-none'/>
                    </fieldset>


                </div>
                <button className='  bottom-[10px] self-end p-[15px] pr-[40px] pl-[40px] text-center bg-black border-black border-[1px]  hover:text-black hover:bg-white  text-white rounded-full' onClick={()=>select("dashboard")}>Save </button>

            </body>
  )
}
