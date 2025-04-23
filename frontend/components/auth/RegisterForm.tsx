import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const RegisterForm = () => {
  return (
    <div className='flex'>
      <div className='flex-1'>
        <h1 className='text-white'>IMAGE</h1>
      </div>
      <div className='flex-1 flex-col text-white'>
        <div>
          <h1>Create an account</h1>
          <p>Let's get started. Fill in the details below to create your account</p>
        </div>
        <form action="">
          <div>
            <label htmlFor="name">Name</label>
            <input id="name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input id='email' />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input id='password' type='password' />
          </div>
          <button className='bg-white cursor-pointer text-black'><Link href={``} >Sign Up</Link></button>
        </form>
        <div>
          <img src={`${null}`} alt="" />
        </div>
      </div>
    </div>
  )
}

export default RegisterForm
