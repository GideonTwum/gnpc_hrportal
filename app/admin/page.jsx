'use client'
import Image from 'next/image'
import React, { useState } from 'react'

//icon imports
import { MdOutlineDashboard } from "react-icons/md";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { LuMessageSquareMore } from "react-icons/lu";
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";

//imports components
import Dashboard from '../components/Dashboard';
import Applications from '../components/Applications';
import Intern from '../components/Intern';
import Messages from '../components/Messages';
import Settings from '../components/Settings';
import Navbar from '../components/Navbar';




const page = () => {
    const [activePage, setActivePage] = useState(false)
    const assignActivePage = (getValue) => {
        setActivePage(getValue)
    }

    const logout = () => {
        window.location.href = "/"
    }

    
    

    const renderPages = () => {
        switch(activePage){
            case 'dashboard':
                return <Dashboard />
            case 'applications':
                return <Applications />
            case 'messages':
                return <Messages />
            case 'intern':
                return <Intern />
            case 'settings':
                return <Settings />
            default:
                return <Dashboard />
        }
    }
  return (
    <div className='flex min-h-screen bg-[#F9FDFA] gap-4'>
        <div className='w-[20vw] flex bg-white flex-col items-center gap-4  fixed  h-full '>
            <div>
                <Image width={300} height={300} src='/images/gnpclogo.png' alt='GNPC LOGO'/>
            </div>
            <div className='flex flex-col gap-10'>
                <div onClick={() => assignActivePage('dashboard')} className='flex items-center gap-2 hover:bg-[#2D8FA5] text-[#818181] hover:text-white p-2 rounded cursor-pointer duration-2s '>
                    <MdOutlineDashboard/>
                    <p className='text-sm'> Dashboard</p>
                </div>
                <div onClick={() => assignActivePage('applications')} className='flex items-center gap-2 hover:bg-[#2D8FA5] text-[#818181] hover:text-white p-2 rounded cursor-pointer duration-2s '>
                    <HiOutlineAdjustmentsHorizontal />
                    <p className='text-sm'>Manage Applications</p>
                </div>
                <div onClick={() => assignActivePage('messages')} className='flex items-center gap-2 hover:bg-[#2D8FA5] text-[#818181] hover:text-white p-2 rounded cursor-pointer duration-2s '>
                    <LuMessageSquareMore/>
                    <p className='text-sm'>Messages</p>
                </div>
                <div onClick={() => assignActivePage('intern')} className='flex items-center gap-2 hover:bg-[#2D8FA5] text-[#818181] hover:text-white p-2 rounded cursor-pointer duration-2s '>
                    <HiOutlineAdjustmentsVertical/>
                    <p className='text-sm'>Manage Intern Platform</p>
                </div>
                <div onClick={() => assignActivePage('settings')} className='flex items-center gap-2 hover:bg-[#2D8FA5] text-[#818181] hover:text-white p-2 rounded cursor-pointer duration-2s '>
                    < IoSettingsOutline />
                    <p className='text-sm'>Settings</p>
                </div>

            </div>
            
            <div className='mt-10' onClick={()=>logout()}>
                <button className='bg-red-400 text-white flex items-center justify-center gap-4 w-40 p-2 cursor-pointer rounded'> < CiLogout/> Logout</button>
            </div>
        </div>


        <div className='bg-[#F9FDFA] ml-64 '>
            <Navbar />
            <div className='p-10'>
                {renderPages()}
            </div>
            
        </div>
    </div>
  )
}

export default page