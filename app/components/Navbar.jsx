import React from 'react'
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { notification } from 'antd';

const Navbar = () => {
    const [api, contextHolder] = notification.useNotification()
    const openNotification = () => {
        api.open({
            message: 'New Applicants!',
            description: '3 new Applicants from Valley View University 🎉🎉',
            duration: 0,
        });
    }
  return (
    <div>
        <div className='bg-white w-[80vw] p-2 gap-9 flex items-center'>
                {contextHolder}
               <div className='ml-[60rem] cursor-pointer'>
                 <button className='cursor-pointer' onClick={()=>openNotification()}><IoMdNotificationsOutline /></button>
               </div>
               <div className='flex items-center gap-2 cursor-pointer'>
                    <div className='bg-[#ccc] w-[fit-content] p-2 rounded-full'>
                            <FaRegUser />
                    </div>
                            <IoIosArrowDown/>
               </div>
               
        </div>
    </div>
  )
}

export default Navbar