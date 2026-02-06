// import React from 'react'
import  {RxAvatar} from "react-icons/rx";
const Dashboard = () => {
    const contacts=[
        {
            name:'Ashutosh',
            status:'Available',
        },
         {
            name:'Sandip',
            status:'Available',
        },
        {
            name:'Saurav',
            status:'Available',
        },
        {
            name:'Aachal',
            status:'Available',
        },
        {
            name:'Riya',
            status:'Available',
        },
       
    ]
  return (
    <div className='w-screen flex'>
      
      <div className='w-[25%]   h-screen bg-white'>
        <div className="flex items-center my-8 mx-10" >
            <div className=" border-blue p-[2px] ">
         <RxAvatar className="w-25 h-25" /></div>
          <div className="ml-8">
            <h3 className="text-2xl">Tutorials Dev</h3>
            <p className="text-lg font-light">My Account</p>
          </div>
        </div>
        <hr/>
        <div className="mx-14 mt-10">

     <div className="text-blue-500 text-xl">Messages</div>
            <div>
                {
                    contacts.map(({name,status})=>{
                        return(
                            <div>
                            <div className="flex items-center py-8 border-b border-b-gray-300 cursor-pointer " >

            <div className=" border-blue p-[2px] ">
         <RxAvatar className="w-10 h-10" /></div>
          <div className="ml-6">
            <h3 className="text-xlg font-semibold">{name}</h3>
            <p className="text-sm font-light text-gray-600">{status}</p>
          </div>
        </div>
      </div>
                        )
                    })
                }
            </div>
        </div>
      </div>

      <div className='w-[50%]  h-screen'></div>

      <div className='w-[25%]  h-screen'></div>

    </div>
  )
}

export default Dashboard