import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Authbar from '../../components/Authbar'
import { validateEmail, validatePassword } from '../../utils/Validate'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const SignUp = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpass, setCpass] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false)
  const [showCPassword, setShowCPassword] = useState(false)

  const handleForm = (e) =>{
    e.preventDefault()

    if(!name || !email || !password || !cpass){
      setError("All fields are required.")
      return;
    }
    if(!validateEmail(email)){
      setError("Invalid email address.")
      return;
    }
    if(!validatePassword(password)){
      setError("Password must consist of 8 characters.")
      return;
    }
    if(password !== cpass){
      setError("Passwords dont match.")
      return;
    }

    setError("")
  }

  return (
    <div className='grid m-2 md:grid-cols-1 lg:grid-cols-2 sm:m-6 md:m-10 gap-4'>
      <div className="hidden sm:block">
        <Authbar/>
      </div>

      <div className='bg-secondary h-full w-90 sm:w-full rounded-xl flex flex-col justify-center relative mx-auto pt-4 sm:pt-0'>
        <div className='h-1.5 bg-gradient absolute left-0 right-0 top-0.5 rounded-t-2xl'></div>
        <h1 className='text-4xl font-bold text-center'>Sign Up</h1>
        <form className='p-2 sm:px-6'>
          <label htmlFor="name" className='label'>Name</label>
          <input 
            type="text" 
            name="" 
            id="name"
            placeholder='Your name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='input'
            />
          
          <label htmlFor="email" className='label'>Email Address</label>
          <input 
            type="text" 
            name="" 
            id="email"
            placeholder='you@example.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='input'
            />
          
          <label htmlFor="pass" className='label'>Password</label>
          <div className='relative'>
            <input 
            type= {showPassword? "text": "password"}
            name="" 
            id="pass"
            placeholder='Create a password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='input' 
            />
            <button
              type='button'
              onClick={()=>setShowPassword(!showPassword)}
              className='absolute right-4 top-4 text-lg'
              >
              {showPassword? <FaEye />: <FaEyeSlash />}
            </button>
          </div>

          <label htmlFor="cpass" className='label'>Confirm Password</label>
          <div className='relative'>
          <input 
            type= {showPassword? "text": "password"}
            name="" 
            id="cpass"
            placeholder='Re-enter password'
            value={cpass}
            onChange={(e) => setCpass(e.target.value)}
            className='input'
            />
            <button
              type='button'
              onClick={()=>setShowCPassword(!showCPassword)}
              className='absolute right-4 top-4 text-lg'
              >
              {showCPassword? <FaEye />: <FaEyeSlash />}
            </button>
          </div>

          <p className='text-(--error)'>{error} </p>

          <button 
          className='btn btn-gradient mt-2 w-80 sm:w-100 mx-auto block'
          onClick = {handleForm}
          >Sign Up</button>
        </form>
        <p className='text-primary text-center font-medium mb-4 sm:mb-0'>Already have an Account ? <Link to="/signIn" className='a'>Sign In</Link></p>
        
      </div>
    </div>
  )
}

export default SignUp