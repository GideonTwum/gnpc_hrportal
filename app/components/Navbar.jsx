import React, { useState, useRef, useEffect } from 'react'
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FiSettings, FiUser, FiLogOut } from "react-icons/fi";
import { notification } from 'antd';

const Navbar = () => {
    const [api, contextHolder] = notification.useNotification()
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const dropdownRef = useRef(null)

    const openNotification = () => {
        api.open({
            message: 'New Applicants!',
            description: '3 new Applicants from Valley View University 🎉🎉',
            duration: 0,
        });
    }

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    const handleProfileAction = (action) => {
        console.log(`Profile action: ${action}`)
        setIsDropdownOpen(false)
        // Add navigation logic here based on action
    }

  return (
    <div>
        <div className='bg-white w-[80vw] p-4 gap-9 flex items-center min-h-[70px]'>
                {contextHolder}
               <div className='ml-[70rem] cursor-pointer'>
                 <button className='cursor-pointer' onClick={()=>openNotification()}><IoMdNotificationsOutline /></button>
               </div>
               <div className='relative' ref={dropdownRef}>
                   <div className='flex items-center gap-2 cursor-pointer' onClick={toggleDropdown}>
                        <div className='bg-[#ccc] w-[fit-content] p-2 rounded-full'>
                                <FaRegUser />
                        </div>
                        <IoIosArrowDown className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}/>
                   </div>
                   
                   {/* Dropdown Menu */}
                   {isDropdownOpen && (
                       <div className='absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg border border-gray-200 z-50'>
                           {/* Profile Header */}
                           <div className='px-4 py-3 border-b border-gray-100'>
                               <div className='flex items-center gap-3'>
                                   <div className='bg-[#ccc] w-10 h-10 p-2 rounded-full flex items-center justify-center'>
                                       <FaRegUser />
                                   </div>
                                   <div>
                                       <p className='text-sm font-medium text-gray-900'>Kwabena Asare</p>
                                       <p className='text-xs text-gray-500'>kwabenasare@gmail.com</p>
                                   </div>
                               </div>
                           </div>
                           
                           {/* Menu Items */}
                           <div className='py-1'>
                               <button 
                                   onClick={() => handleProfileAction('profile')}
                                   className='w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors'
                               >
                                   <FiUser className='text-gray-500' />
                                   Profile
                               </button>
                               
                               <button 
                                   onClick={() => handleProfileAction('account')}
                                   className='w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors'
                               >
                                   <FiUser className='text-gray-500' />
                                   Account
                               </button>
                               
                               <button 
                                   onClick={() => handleProfileAction('settings')}
                                   className='w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors'
                               >
                                   <FiSettings className='text-gray-500' />
                                   Settings
                               </button>
                               
                               <div className='border-t border-gray-100 my-1'></div>
                               
                               <button 
                                   onClick={() => handleProfileAction('logout')}
                                   className='w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors'
                               >
                                   <FiLogOut className='text-red-500' />
                                   Logout
                               </button>
                           </div>
                       </div>
                   )}
               </div>
               
        </div>
    </div>  
  )
}

export default Navbar