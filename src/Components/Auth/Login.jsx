import React, { useState } from 'react'

export default function Login({loginHandler}) {
    
    
    
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    let submitHandler=(e)=>
    {
        e.preventDefault()
        loginHandler(email,password)
        // console.log("email:",email);
        // console.log("password:",password);
        setEmail("")
        setPassword("")
        
    }
    
  return (
    <div className='flex h-screen  items-center justify-center bg-[#1c1c1c] text-white placeholder:text-white'>
        <div className='border-4 rounded-2xl border-red-600'>
            <form  onSubmit={(e)=>
                {
                    submitHandler(e)
                }
            } className='flex flex-col items-center m-4' >
                <input value={email} onChange={(e)=>
                    {
                        setEmail(e.target.value)
                    }
                } required className='border-2 border-emerald-500 rounded-xl outline-none p-3' type="email" placeholder='Enter your email' />
                <input  value={password} onChange={(e)=>
                    {
                        setPassword(e.target.value)
                    }} required className='border-2  m-4 border-emerald-500 rounded-xl outline-none p-3' type="password" placeholder='Enter your password' />
                <button className='bg-emerald-500 rounded-full p-2 pl-5 pr-5 active:scale-95 cursor-pointer'>Login</button>
            </form>

        </div>
      
    </div>
  )
}
