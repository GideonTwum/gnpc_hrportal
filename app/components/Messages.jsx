import React from 'react'

const Messages = () => {
  return (
    <div className='ml-15 flex flex-col gap-4'>
        <div>
            <h1 className='font-semibold text-lg'>Messages</h1>
            <p className='text-sm'>Send messages to all or filtered applicants</p>
        </div>
        <div className='flex items-center gap-4'>
            <div className='flex items-center gap-2'>
                <p className='text-sm'>Filter:</p>
                <select name="" id="" className='text-sm p-2 shadow w-30 border-[1px] border-[#ccc] rounded'>
                    <option value="">Applicant</option>
                </select>
            </div>
                        <div className='flex items-center gap-2'>
                <p className='text-sm'>Status:</p>
                <select name="" id="" className='text-sm p-2 shadow w-30 border-[1px] border-[#ccc] rounded'>
                    <option value="">Approved</option>
                    <option value="">Pending</option>
                    <option value="">Rejected</option>
                </select>
            </div>
                        <div className='flex items-center gap-2'>
                <p className='text-sm'>Department:</p>
                <select name="" id="" className='text-sm p-2 shadow w-30 border-[1px] border-[#ccc] rounded'>
                    <option value="">IT</option>
                    <option value="">HR</option>
                    <option value="">Admin</option>
                    <option value="">Geoscience</option>
                    <option value="">Engineering</option>
                </select>
            </div>
            <div>
                <button className='text-sm bg-[#ccc] p-2 rounded'>Reset</button>
            </div>
        </div>
        <div className='flex flex-col gap-4 mt-8'> 
            <div className='flex items-center gap-2  '>
                <p className='text-sm'>Subject:</p>
                <input type="text" placeholder='type in the subject...' className='text-sm shadow bg-white p-4 rounded w-[40vw] outline-none '  />
            </div>
            <div className='flex flex-col gap-2'>
                <p className='text-sm'>Message:</p>
                <textarea name="" id="" placeholder='type in your message....' className='shadow text-sm bg-white outline-none w-[40vw] p-4 h-[30vh]'></textarea>
            </div>
        </div>
        <div>
            <button className='text-sm bg-[dodgerblue] p-2 rounded w-30 cursor-pointer text-white'>Send Message</button>
        </div>
        
    </div>
  )
}

export default Messages