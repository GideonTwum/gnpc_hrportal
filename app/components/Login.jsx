'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const Login = () => {
    const [loading, setLoading] = useState(false)
    const toDashboard = () => {
        setLoading(true)
        setTimeout(()=>{
            toast.success('You have successfully logged in!')
            window.location.href = "/admin"
        }, 2000)

    }
  return (
    <div className='flex flex-col items-center p-4 min-h-screen gap-4'>
        <div>
            <Image
            width={300}
            height={300}
            src='/images/gnpclogo.png' 
            alt='GNPC lOGO'
            />
        </div>
        <div>
            <h1 className='font-bold text-[30px]'>HR LOGIN</h1>
        </div>
        <div className='flex flex-col gap-6'>
            <div className='flex flex-col'>
                <label htmlFor="">Email</label>
                <input type="email" placeholder='enter your email....' className='border-[1px] outline-none border-[#ccc] rounded p-3 w-[30vw]' />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="">Password</label>
                <input type="email" placeholder='enter your password....' className='border-[1px] outline-none border-[#ccc] rounded p-3 w-[30vw]' />
                <div className='ml-[19rem]'>
                    <p className='text-sm'>Forgot Password?</p>
                </div>
            </div>

            <div>
                    <button onClick={()=> toDashboard()} className='w-[30vw] bg-[#2D8FA5] cursor-pointer p-3 rounded text-white'>{loading ? 'loading...': 'Login'}</button>
            </div>
            <div className='flex flex-col items-center'>
                <p className='text-[#ccc]'>Powered by GNPC</p>
                <p className='text-[#ccc]'>version 1.0.1</p>
            </div>
        </div>

        <Toaster />
    </div>
  )
}

export default Login