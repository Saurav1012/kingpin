import Button from "../../components/Button"
import Input from "../../components/Input"
import { useState } from "react"


const Form=({
  isSignInPage=false,
})=> {
  const [data,setData] =useState({
    ...(!isSignInPage && {
      fullName:'',
    }),
    email:'',
    password:'',
  }) 
  console.log('data >>',data)
  return (
    <div className="bg-[#fffdd0] w-[600px] h-[600px] shadow-lg rounded-lg flex flex-col justify-center items-center">
     <div className="text-4xl font-extrabold">Welcome {isSignInPage && 'Back'}</div>
     <div className="text-xl font-light mb-14">{isSignInPage ? 'Sign in to get explored':'Sign up now to get started'}</div>
     <form className="flex flex-col items-center w-full" onSubmit={()=> console.log('submitted')}>
  {!isSignInPage && <Input label="Full Name" name="name" placeholder='Enter your name' className="mb-6" value={data.fullName} onChange={(e)=> setData({ ...data,fullName:e.target.value})}/> }   
     <Input label ="Email address" type="email" name="email" placeholder='Enter your email' className="mb-6" value={data.email} onChange={(e)=> setData({ ...data,email:e.target.value})} />
     <Input label="Password" type="password" name="password" placeholder='Enter your password' className="mb-6" value={data.password} onChange={(e)=> setData({ ...data,password:e.target.value})}/>
    <Button label={isSignInPage ? "Sign in":"Sign up"} type='submit' className="w-1/2 mb-6" />
    </form>
    <div>{isSignInPage ? "Didn't have an account?":"Already have an account?"} <span className="text-blue-700 cursor-pointer underline">{isSignInPage ? "Sign up":"sign in"}</span></div>

    </div>
  )
}

export default Form
