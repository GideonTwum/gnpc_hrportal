import React from 'react'

const BenefitCard = ({ desc, icon }) => {
  return (
    <div className='bg-white p-4 rounded-lg shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow'>
        <div className='text-3xl mb-3'>{icon}</div>
        <p className='text-sm text-gray-700 font-medium'>{desc}</p>
    </div>
  )
}

export default BenefitCard 