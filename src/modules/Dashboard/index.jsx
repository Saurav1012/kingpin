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
    <div className='w-screen flex '>
      
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

      <div className='w-[50%] h-screen bg-green-200  flex flex-col items-center '>
        <div className="w-[75%] bg-yellow-400 h-[80px]  my-5 rounded-full flex items-center px-14 shadow-lg">
           <RxAvatar className="w-12 h-15 cursor-pointer" />
           <div className="ml-6 mr-auto ">
            <h3 className="text-lg">Saurav</h3>
            <p className=" text-sm font-light text-gray-600">online</p>
           </div>
           <div className="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-phone-outgoing"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2c-8.072 -.49 -14.51 -6.928 -15 -15a2 2 0 0 1 2 -2" /><path d="M15 5h6" /><path d="M18.5 7.5l2.5 -2.5l-2.5 -2.5" /></svg>
           </div>
        </div>
        <div className="border-t  w-full overflow-scroll  shadow-sm">
          <div className='h-[1000px] px-10 py-14'>

  <div className='max-w-[40%] bg-white rounded-b-xl rounded-tr-xl p-4 mb-6'>
    Lorem Ipsum is simply dummy text 
  </div>

  <div className='max-w-[40%] bg-blue-400 rounded-b-xl rounded-tl-xl ml-auto p-4 text-white mb-6'>
    Lorem Ipsum is simply dummy text 
  </div>

  <div className='max-w-[40%] bg-white rounded-b-xl rounded-tr-xl p-4 mb-6'>
    Lorem Ipsum is simply dummy text 
  </div>

  <div className='max-w-[40%] bg-blue-400 rounded-b-xl rounded-tl-xl ml-auto p-4 text-white mb-6'>
    Lorem Ipsum is simply dummy text 
  </div>
  <div className='max-w-[40%] bg-white rounded-b-xl rounded-tr-xl p-4 mb-6'>
    Lorem Ipsum is simply dummy text 
  </div>

  <div className='max-w-[40%] bg-blue-400 rounded-b-xl rounded-tl-xl ml-auto p-4 text-white mb-6'>
    Lorem Ipsum is simply dummy text
  </div>
  <div className='max-w-[40%] bg-white rounded-b-xl rounded-tr-xl p-4 mb-6'>
    Lorem Ipsum is simply dummy text 
  </div>

  <div className='max-w-[40%] bg-blue-400 rounded-b-xl rounded-tl-xl ml-auto p-4 text-white mb-6'>
    Lorem Ipsum is simply dummy text 
  </div>

</div>
        </div>
        <div className="p-5 w-full flex items-center">
           <input type="text" placeholder="Type something here" className="w-[85%] p-4 border-2 border-brown-400 shadow-md rounded-full bg-light focus:ring-0 focus:border-0 outline-none"  />
        <div className="ml-4 p-4 cursor-pointer bg-blue-200 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-send"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 14l11 -11" /><path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" /></svg></div>
        </div>
      </div>
      <div className='w-[25%]  h-screen bg-light'></div>

    </div>
  )
}

export default Dashboard