'use client'
import React, { useState } from 'react'
import Site from '../manage/Site'
import Form from '../manage/Form'

const Intern = () => {
    const [activePage, setActivePage] = useState(false)

    const assignActivePage = (getValue) => {
        setActivePage(getValue)
    }

    const renderPages = () => {
        switch(activePage){
            case 'site':
                return <Site />
            case 'form':
                return <Form />
                default:
                    return <Site />

        }
    }
  return (
    <div className='ml-15 flex flex-col gap-4'>
        <h1 className='font-semibold '>Manage Intern Platform</h1>
        <div className='flex flex-col gap-10'>
            <div className='flex items-center gap-10'>
                <button onClick={()=> assignActivePage('site')} className={`p-2 w-30 cursor-pointer ${activePage === 'site' ? 'bg-[#77C5D6]' : ''} text-sm hover:bg-[#77C5D6] rounded`}>Manage Site</button>
                <button onClick={()=> assignActivePage('form')} className={`p-2 w-30 cursor-pointer ${activePage === 'form' ? 'bg-[#77C5D6]' : ''}  text-sm hover:bg-[#77C5D6] rounded`}>Manage Form</button>
            </div>
            <div>
                {renderPages()}
            </div>
        </div>
    </div>
  )
}

export default Intern