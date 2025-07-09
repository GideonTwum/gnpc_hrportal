'use client'
import React, { useState } from 'react'
import Send from '../messages/Send'
import Response from '../messages/Response'

const Messages = () => {
    const [activePage, setActivePage] = useState('send-message')
    const assignActivePage = (getValue) => {
        setActivePage(getValue)
    }

    const renderPages = () => {
        switch(activePage){
            case 'send-message':
                return <Send />
            case 'view-responses':
                return <Response />
            default:
                return <Send />
        }
    }

  return (
    <div className='ml-15 flex flex-col gap-4'>
        <div>
            <h1>Messages</h1>
        </div>
        <div>
            <div className='flex items-center gap-4'>
                <button 
                    onClick={() => assignActivePage('send-message')}
                    className={`text-sm p-2 cursor-pointer rounded ${
                        activePage === 'send-message' 
                            ? 'bg-[#2D8FA5] text-white' 
                            : 'hover:bg-[#2D8FA5] hover:text-white'
                    }`}
                >
                    Send Messages
                </button>
                <button 
                    onClick={() => assignActivePage('view-responses')}
                    className={`text-sm p-2 cursor-pointer rounded ${
                        activePage === 'view-responses' 
                            ? 'bg-[#2D8FA5] text-white' 
                            : 'hover:bg-[#2D8FA5] hover:text-white'
                    }`}
                >
                    View Responses
                </button>
            </div>
            <div className='mt-4'>
                {renderPages()}
            </div>
        </div>
    </div>
  )
}

export default Messages