import React from 'react'
import Authbar from '../../components/Authbar'

const SignUp = () => {
  return (
    <div className='grid md:grid-cols-1 lg:grid-cols-2 m-10'>
      <div className="hidden sm:block">
        <Authbar/>
      </div>
      <div className='bg-secondary h-full w-full'>
        signup
      </div>
    </div>
  )
}

export default SignUp