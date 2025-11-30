import React, { useState } from 'react'
import { useRef } from 'react'

const Profile = () => {

  const inputRef = useRef(null)
  const [image, setImage] = useState(null)
  const [changes, setChanges] = useState(false)
  const [name,setName] = useState("Anisha Malore")
  const [email,setEmail] = useState("anishamalore@gmail.com")


  const handleImage = (e)=>{
    const img = e.target.files[0]
    setImage(URL.createObjectURL(img))
  }

  return (
    <>  
    <input 
      type="file" 
      name="" 
      ref={inputRef} 
      className='hidden'
      onChange={handleImage}
      /> 
    
    <h1 className='text-center text-3xl font-bold my-4 sm:text-start sm:ml-10 sm:text-4xl'>Profile Settings</h1>
    <div className='bg-secondary px-10 py-6 rounded-xl mx-8'>

      <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center'>

        <div className='flex items-center justify-center gap-1.5 flex-wrap sm:flex-nowrap'>
          <img src={image || "https://ui-avatars.com/api/?name=Anisha Malore"} alt="" className='bg-tertiary h-24 w-24 rounded-full border-0'/>
          <div>
            <h2 className='text-2xl font-bold text-center my-0.5 sm:my-0 sm:text-start'> Anisha Malore</h2>
            <p className='text-secondary my-0.5 sm:my-0'>anishamalore@gmail.com</p>
          </div>
        </div>
        
        <button className='btn btn-secondary mt-1 sm:mt-0' onClick={()=>inputRef.current.click()}>Update New Picture</button>
      </div>

      <hr className='text-tertiary my-2'/>

      <div>
        <h3 className='text-lg font-semibold my-2 sm:text-xl'>
          Account Information
        </h3>
        <form action="" className='grid sm:grid-cols-2 sm:gap-8'>
          <div>
          <label htmlFor="name" className='label mb-1'>Full Name</label>
          <input 
          type="text" 
          name="" 
          id="name" 
          className='input text-secondary'
          value={name}
          onChange={(e)=>setName(e.target.value)}
          disabled = {changes ? false : true}
          />
          </div>

          <div>
          <label htmlFor="name" className='label mb-1'>Email Address</label>
          <input 
          type="text" 
          name="" 
          id="name" 
          className='input text-secondary'
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          disabled = {changes ? false : true}
          />
          </div>
        </form>
        <button className='a font-medium mt-4'>Change Password</button>
      </div>

      <hr className='text-tertiary my-2'/>

      <div className='flex justify-center sm:justify-end '>
        <button 
        className='btn btn-primary'
        onClick={()=>setChanges(!changes)}
        >
          {changes? "Save Changes" : "Edit Profile"}
        </button>
      </div>

    </div>
    </>
    
  )
}

export default Profile