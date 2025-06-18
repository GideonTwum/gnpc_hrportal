import React from 'react'

const Account = () => {
  return (
    <div>
        <div className='bg-white h-[60vh] shadow p-4 flex flex-col gap-4 w-[60vw]'>
            <div>
                <p className='font-bold text-lg'>Password</p>
                <p className='text-sm'>Secure your account by updating your password regularly. Choose a strong password that you haven't used before.</p>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col'>
                    <p className='text-sm'>Current Password</p>
                    <input type="text" placeholder='type in your current password...' className='w-[30vw] p-2 outline-none border-1 border-[#ccc] text-sm shadow rounded' />
                </div>
                 <div className='flex flex-col'>
                    <p className='text-sm'>New Password</p>
                    <input type="text" placeholder='type in your new password...' className='w-[30vw] p-2 outline-none border-1 border-[#ccc] text-sm shadow rounded' />
                </div>
                 <div className='flex flex-col'>
                    <p className='text-sm'>Confirm Password</p>
                    <input type="text" placeholder='type in your confirm password...' className='w-[30vw] p-2 outline-none border-1 border-[#ccc] text-sm shadow rounded' />
                </div>
                <div>
                    <button className='text-white p-2 rounded bg-[#2D8FA5] text-sm cursor-pointer'>Change Password</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Account