
import Button from "../../components/Button"
import Input from "../../components/Input"

function Form() {
  return (
    <div className="bg-[#d382d9] w-[600px] h-[600px] shadow-lg rounded-lg flex flex-col justify-center items-center">
     <div className="text-4xl font-extrabold">WELCOME</div>
     <div className="text-xl font-light mb-14">Sign up now to get started</div>
     <Input label="Full Name" name="name" placeholder='Enter your name' className="mb-6"/>
     <Input label="Email address" name="email" placeholder='Enter your email' className="mb-6"/>
     <Input label="Password" type="password" name="password" placeholder='Enter your password' className="mb-6"/>
    <Button label="Sign up" className="w-1/2"/>

    </div>
  )
}

export default Form
