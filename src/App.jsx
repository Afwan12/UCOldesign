import { useEffect, useState } from "react"
import Aside from "./Components/Aside"
import DBody from "./Components/DBody"
import ListService from "./Components/ListService"

function App() {
  const [services,setServices]=useState([{
    id:0,
    title:"Tech Support",
    cat:"ts",
    user:"Jone Doe",
    userImg:"https://img.icons8.com/small/64/user-male-circle.png",
    disp:"N/A",
    cost:0,
  },
  {
    id:0,
    title:"Accedemic Help",
    cat:"ah",
    user:"Jone Doe",
    userImg:"https://img.icons8.com/small/64/user-male-circle.png",
    disp:"N/A",
    cost:0,
  },{
    id:0,
    title:"Food Delevery",
    cat:"fd",
    user:"Jone Doe",
    userImg:"https://img.icons8.com/small/64/user-male-circle.png",
    disp:"N/A",
    cost:0,
  },{
    id:0,
    title:"Ride Sharing",
    cat:"rs",
    user:"Jone Doe",
    userImg:"https://img.icons8.com/small/64/user-male-circle.png",
    disp:"N/A",
    cost:0,
  }])



  const[varservices,setVarServices]=useState([])
  const[filteredlist,setFilteredList]=useState([])
  const[acceptedServices,setAcceptedServices]=useState([])
  const[finialServiceList,setFinialServiceList]=useState([])


  
  useEffect(()=>{
    setVarServices(services)
    setFinialServiceList(services)
  },[])
  

  
  function accept(index){
    let newlist
    if(acceptedServices.length!=0){newlist=[...acceptedServices,varservices[index]]}
    else{newlist=[varservices[index]]}
    setAcceptedServices(newlist)
    let filter=varservices.filter((service,serviceIndex)=>{return serviceIndex!=index})
  
      setFinialServiceList(filter)
      setVarServices(filter)
  }

  const[selected,setSelected]=useState()

  useEffect(()=>{
    setSelected("AllServices")
  },[])
  
  function selectedCat(select){
    setSelected(select)
  }
 

  function del(index,ca){
    let filter
    if(ca=="normal"){
    filter=varservices.filter((service,serviceIndex)=>{return serviceIndex!=index})
    
    setFinialServiceList(filter)
    setVarServices(filter)
    }
    else if(ca=="accepted"){
      filter=acceptedServices.filter((service,serviceIndex)=>{return serviceIndex!=index})
      setAcceptedServices(filter)
    }
  }
  

  const[modal,setmodal]=useState(false) 


  return (
    <main className="grid  md:grid-cols-[250px,1fr] lg:grid-cols-[250px,1fr]">
      <Aside selected={selectedCat}   />
      <DBody  setmodal={setmodal} finialServiceList={finialServiceList}  acceptedServices={acceptedServices}  selected={selected} select={selectedCat} del={del} accept={accept} />
      {modal && <ListService setmodal={setmodal}/> } 
    </main>
  )
}

export default App
