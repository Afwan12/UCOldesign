import React from 'react'
import TopBar from './TopBar'
import Body from './Body'
import AcceptedServiceList from './AcceptedServiceList'
import ServiceList from './ServiceList'
import ChatScreen from './ChatScreen'
import UserDashboard from './UserDashboard'
import Dashboard from './Dashboard'

export default function DBody(props) {
    const{setmodal,finialServiceList,del,accept,selected,select,acceptedServices}=props

    if(selected=="dashboard"){
      return(
        <div className="grid grid-rows-[1fr,9fr]  self-center  md:grid-rows-[1fr,2fr,8fr] lg:grid-rows-[1fr,2fr,8fr] h-screen">
              <TopBar select={select}/>

            <Dashboard/>
              
      </div>
      )
      
      
    }

    else if(selected=="chat"){
      return(
        <div className='h-screen'>
          <ChatScreen select={select}/>   
        </div>
      )
    }


    else if(selected=="userboard"){
      return(
        <div className='h-screen p-[10px]'>
          <UserDashboard select={select}/>  
        </div>
      )
    }
    else if(selected=="AllServices"){
        return (
            <div className="flex flex-col  self-center   h-screen">
              <TopBar select={select}/>
              <Body setmodal={setmodal}/>
              <ServiceList services={finialServiceList}  accept={accept} del={del}/>
            </div>
    )
    }

  

    else if(selected=="AcceptedService"){
        return (
            <div className="flex flex-col   self-center  h-screen">
              <TopBar select={select}/>
              <Body setmodal={setmodal}/>
              <AcceptedServiceList services={acceptedServices} select={select} del={del}/>
            </div>
    )
    }
  
}
