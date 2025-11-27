import React from 'react'
import Authbar from '../../components/Authbar'

const SignIn = () => {
  return (
    <div className='grid md:grid-cols-1 lg:grid-cols-2 m-10'>
      <div className='bg-secondary h-full w-full '>
        signin
      </div>
      <div className="hidden sm:block ml-4 ">
        <Authbar/>
      </div>
    </div>
  )
}

export default SignIn