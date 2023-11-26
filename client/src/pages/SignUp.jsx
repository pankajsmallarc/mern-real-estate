import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center my-7 font-semibold'>Sign Up</h1>
      <form className='flex flex-col text-center gap-4'>
        <input type='text' placeholder='Username' className='border p-3 rounded-xl' id='username'/>
        <input type='email' placeholder='email' className='border p-3 rounded-xl' id='email'/>
        <input type='password' placeholder='password' className='border p-3 rounded-xl' id='password'/>
     ,<button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-80'>Sign up</button>
      </form>
      <div className='flex gap-4 font-semibold py-4'>
        <p>Have an account?</p>
        <Link to ={"/sign-in"}>
          <span className='text-blue-700'>Sign in</span>
        </Link>
      </div>
    </div>
  )
}

export default SignUp