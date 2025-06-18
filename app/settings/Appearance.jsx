import React from 'react'

const Appearance = () => {
  return (
    <div className='flex flex-col gap-10'>
        <div>
            <p className='font-semibold text-lg'>Appearance</p>
            <p className='text-sm'>Change how your dashboard looks and feels.</p>
            <hr  className='border-[#ccc] mt-2'/>
        </div>
        <div className='flex items-center mt-4 gap-[4rem]'>
            <p>Theme:</p>
            <select name="" id="" className='shadow p-2'>
                <option value="">Light</option>
                <option value="">Dark</option>
            </select>
        </div>
        <div className='flex items-center gap-4'>
            <p>Language</p>
            <select name="" id="" className='shadow outline-none shadow p-2 w-[10vw] rounded'>
                <option value="">English</option>
                <option value="">Spanish</option>
                <option value="">French</option>
                <option value="">Swahili</option>
            </select>
        </div>
    </div>
  )
}

export default Appearance