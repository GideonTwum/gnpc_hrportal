import React from 'react'
import { IoIosAdd } from "react-icons/io";

const Site = () => {
  return (
    <div>
        <div className='flex gap-10'>
            <div className='flex flex-col gap-2'>
                <p className='text-sm'>Internship Description</p>
                <textarea name="" id="" className='outline-none bg-white rounded w-[30vw] p-2 text-sm shadow h-[20vh]' placeholder='type message here...'></textarea>
                <button className='text-sm bg-[#77C5D6] p-2 cursor-pointer rounded w-30 text-white'>save</button>
            </div>
            <div>
                <p className='text-sm'>Specializations/Departments</p>
                <div className='flex items-center gap-2'>
                    <select name="" id="" className='text-sm p-2 shadow outline-none'>
                        <option value="">IT Department</option>
                        <option value="">HR Department</option>
                        <option value="">Admin Department</option>
                        <option value="">Engineering Department</option>
                    </select>
                    <button className='text-sm bg-[#77C5D6] p-2 text-white rounded w-20 flex items-center gap-2 cursor-pointer'> <IoIosAdd/> Add</button>
                </div>
                
            </div>
        </div>
        <div>
            
        </div>
        
    </div>
  )
}

export default Site