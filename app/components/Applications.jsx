import React from 'react'
import { CiSearch } from "react-icons/ci";
import Tables from '../utils/Tables';
import ApplicantStatus from '../utils/ApplicantStatus';

const Applications = () => {
  return (
    <div className='ml-15 flex flex-col gap-4'>
        <div>
            <p className='font-semibold text-lg'>Manage Applications</p>
        </div>
        <div className='flex items-center gap-2'>
            <div className='flex items-center border-[1px] border-[#ccc] rounded w-[fit-content] p-2'>
                <input type="text" placeholder='Search...' className='w-[40vw] outline-none rounded text-sm' />
                <CiSearch/>
            </div>
            <div>
                <select name="" id="" className='text-sm rounded shadow p-2'>
                    <option value="">Month</option>
                    <option value="">January</option>
                    <option value="">February</option>
                    <option value="">March</option>
                    <option value="">April</option>
                    <option value="">May</option>
                    <option value="">June</option>
                    <option value="">July</option>
                    <option value="">August</option>
                    <option value="">September</option>
                    <option value="">October</option>
                    <option value="">November</option>
                    <option value="">December</option>
                </select>
            </div>
        </div>
        <div>
            <Tables />
            <ApplicantStatus />
        </div>
       
    </div>
  )
}

export default Applications