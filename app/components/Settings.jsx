'use client'
import React, { useState } from 'react'
import Account from '../settings/Account'
import Appearance from '../settings/Appearance'
import Preferences from '../settings/Preferences'
import Security from '../settings/Security'
import Profile from '../settings/Profile'

const Settings = () => {
    const [activePage, setActivePage] =useState(false)

    const assignActivePage = (getValue)=>{
        setActivePage(getValue)
    }

    const renderPages = () =>{
        switch(activePage){
            case 'account':
                return <Account />
            case 'appearance':
                return <Appearance />
            case 'preferences':
                return <Preferences />
            case 'security':
                return <Security />
            case 'profile':
                return <Profile />
                default: 
                    return <Account />
            
        }
    }
  return (
    <div className='flex flex-col '>
        <h1 className='ml-10 font-semibold text-xl mb-10'>Settings</h1>
        <div className='flex items-center ml-10 gap-4'>
            <div onClick={()=> assignActivePage('account')} className='p-2 bg-white shadow w-[10vw] hover:bg-[#2D8FA5]/25 cursor-pointer rounded flex items-center justify-center'>
                <p className='text-sm '>Account</p>
            </div>
             <div onClick={()=> assignActivePage('appearance')} className='p-2 bg-white shadow w-[10vw] hover:bg-[#2D8FA5]/25 cursor-pointer rounded  flex items-center justify-center'>
                <p className='text-sm '>Appearances</p>
            </div>
             {/* <div onClick={()=> assignActivePage('preferences')} className='p-2 bg-white shadow w-[10vw] hover:bg-[#2D8FA5]/25 cursor-pointer rounded flex items-center justify-center'>
                <p className='text-sm '>Preferences</p>
            </div> */}
             {/* <div onClick={()=> assignActivePage('security')} className='p-2 bg-white shadow w-[10vw] hover:bg-[#2D8FA5]/25 cursor-pointer rounded flex items-center justify-center'>
                <p className='text-sm '>Security</p>    
            </div> */}
             <div onClick={()=> assignActivePage('profile')} className='p-2 bg-white shadow w-[10vw] hover:bg-[#2D8FA5]/25 cursor-pointer rounded flex items-center justify-center'>
                <p className='text-sm '>Profile</p>
            </div>
            
        </div>


        <div className='p-10'>
            {renderPages()}
        </div>
    </div>
  )
}

export default Settings