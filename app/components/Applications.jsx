import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import ViewApplicants from '../applications/ViewApplicants';
import Status from '../applications/Status';


const Applications = () => {
    const [activePage, setActivePage] = useState()
    const assignActivePage = (getValue) => {
        setActivePage(getValue)
    }

    const renderPages = () => {
        switch(activePage){
            case 'applications':
                return <ViewApplicants />
            case 'status':
                return <Status />
                default:
                    return <ViewApplicants />

        }
    }
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
        <div className='flex flex-col gap-4'>
            <div className='flex gap-4'>
                <div onClick={() => assignActivePage('applications')} className={`shadow w-[fit-content] ${activePage === 'application' ? 'bg-[#77C5D6]' : 'bg-white'} p-2 rounded cursor-pointer hover:bg-[#77C5D6] `}>
                    <p className='text-sm'>View All Applications</p>
                </div>
                <div onClick={() => assignActivePage('status')} className={`shadow w-[fit-content] ${activePage === 'status' ? 'bg-[#77C5D6]' : 'bg-white'} p-2 rounded cursor-pointer hover:bg-[#77C5D6]`}>
                    <p className='text-sm'>View Applicant Status</p>
                </div>
            </div>
            <div>
                {renderPages()}
            </div>
        </div>
       
    </div>
  )
}

export default Applications