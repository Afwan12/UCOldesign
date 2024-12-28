import React, { useState } from 'react'

export default function ListService(props) {
    const{setmodal}=props
    

    const[finallist,setFinialServiceList]=useState([])
    const[cat,setcat]=useState()
    const[title,settitle]=useState()
    const[disp,setdisp]=useState()
    const[cost,setcost]=useState()

    function changehandle(e,type){
      let val=e.target.value
      switch(type){
        case "Cat":setcat(val);break;
        case "Title":settitle(val);break;
        case "disp":setdisp(val);break;
        case "cost":setcost(val);break;
      }
    }

    function confirmlist(){
       let list={
        id:0,
        title:title,
        cat:cat,
        user:"Jone Doe",
        userImg:"https://img.icons8.com/small/64/user-male-circle.png",
        disp:disp,
        cost:cost,
      }

      console.log(list)
      if(finallist.length==0)
        setFinialServiceList(list)
      else{
        let l=[...finallist,list]
        setFinialServiceList(l)
      }
      console.log(finallist)

    }
  return (
    <div className='fixed  self-center flex flex-col justify-self-center justify-center p-[30px] pr-[80px] pl-[80px] rounded-md  bg-white shadow-sh  z-30'>   
      <h1 className='text-h2 font-bold mb-[30px] '>List New Service</h1>
      <p className='font-semibold text-h5'>Catagory</p>
      <select className=" border-[1.5px] p-[5px] border-black rounded-lg" onChange={(e)=>{changehandle(e,"Cat")}}>
        <option>Academic help</option>
        <option>Academic help</option>
        <option>Academic help</option>
        <option>Academic help</option>
      </select>

      <p className='font-semibold text-h5 p-[5px] '>Title</p>
      <input className=" border-[1.5px] p-[5px] border-black rounded-lg" placeholder='Enter title' onChange={(e)=>{changehandle(e,"Title")}} />

      <p className='font-semibold text-h5 p-[5px] '>Description</p>
      <textarea className=" border-[1.5px] p-[5px] border-black rounded-lg" onChange={(e)=>{changehandle(e,"disp")}}/>

      <p className='font-semibold text-h5 p-[5px] '>Price</p>
      <input type='number' min={0} className=" border-[1.5px]  p-[5px] border-black rounded-lg"  onChange={(e)=>{changehandle(e,"price")}}/>


      <div className='flex flex-row justify-end gap-[10px] mt-[30px]'>
        <button className='  bg-white border-red-600 border-[1px] text-red-600  hover:bg-red-600 hover:text-white h-[50px] pr-[20px] pl-[20px] rounded-md' onClick={()=>{setmodal(false)}}>Cancel</button>
        <button className='bg-black border-black border-[1px]  hover:text-black transform-2s hover:bg-white  text-white h-[50px] pr-[20px] pl-[20px] rounded-md' onClick={()=>{confirmlist();setmodal(false)}}>List Service</button>
      </div>
    </div>
  )
}
