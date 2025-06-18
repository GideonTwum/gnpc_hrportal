'use client'
import React from 'react'
import { CiUser } from "react-icons/ci";
import Bcharts from '../utils/Bcharts';

const Dashboard = () => {
  return (
    <div className='w-full flex flex-col gap-6'>
        <div className='flex items-center gap-6 w-full '>
            <div className='bg-white flex flex-col items-center justify-center h-[15vh] w-[10vw] p-4 rounded shadow '>
                <p className='text-sm'>Total Applicants</p>
                <p className='font-bold text-2xl'>100</p>
            </div>
             <div className='bg-white flex flex-col items-center justify-center h-[15vh] w-[10vw] p-4 rounded shadow '>
                <p className='text-sm'>Approved</p>
                <p className='font-bold text-2xl text-blue-500'>30</p>
            </div>
             <div className='bg-white flex flex-col items-center justify-center h-[15vh] w-[10vw] p-4 rounded shadow '>
                <p className='text-sm'>Rejected</p>
                <p className='font-bold text-2xl text-red-500'>30</p>
            </div>
             <div className='bg-white flex flex-col items-center justify-center h-[15vh] w-[10vw] p-4 rounded shadow '>
                <p className='text-sm'>Pending</p>
                <p className='font-bold text-2xl text-yellow-500'>40</p>
            </div>
        </div>
        <div>
            <p> Recent Applications Preview</p>
            <div className='flex gap-2'>
                <div className='bg-white shadow h-[10vh] flex items-center gap-4 p-2 w-[25vw]'>
                    <div className='bg-gray-300 rounded-full flex w-[fit-content] p-2 items-center justify-center'>
                        <CiUser className='text-2xl'/>  
                    </div>
                    <div>
                        <p className='font-bold text-sm'>Gideon Asare Twum</p>
                        <p className='text-sm'>Valley View University</p>
                    </div>
                    <div>
                        <button className='text-sm bg-[#2D8FA5] text-white p-2 cursor-pointer rounded'>View Details</button>
                    </div>

                </div>
                <div className='bg-white shadow h-[10vh] flex items-center gap-4 p-2 w-[25vw]'>
                    <div className='bg-gray-300 rounded-full flex w-[fit-content] p-2 items-center justify-center'>
                        <CiUser className='text-2xl'/>  
                    </div>
                    <div className='flex flex-col '>
                        <p className='font-bold text-sm'>Hallel Priska</p>
                        <p className='text-sm'>Takoradi Technical University</p>
                    </div>
                    <div>
                        <button className='text-sm bg-[#2D8FA5] text-white p-2 cursor-pointer rounded'>View Details</button>
                    </div>

                </div>
                <div className='bg-white shadow h-[10vh] flex items-center gap-4 p-2 w-[25vw]'>
                    <div className='bg-gray-300 rounded-full flex w-[fit-content] p-2 items-center justify-center'>
                        <CiUser className='text-2xl'/>  
                    </div>
                    <div>
                        <p className='font-bold text-sm'>Kwabena Ahinkorah</p>
                        <p className='text-sm'>Ashesi University</p>
                    </div>
                    <div>
                        <button className='text-sm bg-[#2D8FA5] text-white cursor-pointer p-2 rounded'>View Details</button>
                    </div>

                </div>
            </div>
        </div>

        <div className='bg-white flex items-center  shadow h-[40vh] w-full p-4'>
            <Bcharts />
        </div>
    </div>
  )
}

export default Dashboard