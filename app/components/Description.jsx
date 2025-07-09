import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import BenefitCard from '../utility/BenefitCard'

const Description = () => {
  const [siteContent, setSiteContent] = useState({
    internshipDescription: "The internship at GNPC is a comprehensive one-month, onsite program designed to provide students with hands-on experience in a professional environment. Participants benefit from direct mentorship by industry experts, gaining practical skills and insights into the operations of the oil and gas sector.",
    benefits: [
      { id: 1, desc: "Skill Acquisition and Development", icon: "🎯" },
      { id: 2, desc: "Expert Mentorship", icon: "👨‍🏫" },
      { id: 3, desc: "Competitive Stipends", icon: "💰" }
    ],
    whatYouGain: [
      "Real-world project experience",
      "Industry networking opportunities", 
      "Professional development workshops",
      "Certificate of completion"
    ]
  });

  // Load content from localStorage (set by admin)
  useEffect(() => {
    const savedContent = localStorage.getItem('siteContent');
    if (savedContent) {
      setSiteContent(JSON.parse(savedContent));
    }
  }, []);

  // Listen for storage changes to update content in real-time
  useEffect(() => {
    const handleStorageChange = () => {
      const savedContent = localStorage.getItem('siteContent');
      if (savedContent) {
        setSiteContent(JSON.parse(savedContent));
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <div id='description' className='min-h-screen bg-gradient-to-br from-white to-blue-50 gap-8 flex flex-col p-8 md:p-20'>
        {/* Header Section */}
        <div className='flex items-center justify-center mb-8'>
            <div className='text-center'>
                <h1 className='font-bold text-2xl md:text-3xl text-[#2D8FA5] mb-2'>Internship Description</h1>
                <div className='w-24 h-1 bg-[#2D8FA5] mx-auto rounded-full'></div>
            </div>
        </div>

        {/* Main Content */}
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-4 items-center'>
            {/* Image Section */}
            <div className='w-full lg:w-1/2 flex justify-center'>
                <div className=''>
                    <div className=' rounded-xl '></div>
                    <Image 
                        width={400} 
                        height={400} 
                        src={'/images/smilingwoman.jpg'} 
                        alt='Professional woman in oil and gas industry' 
                        className='rounded-xl shadow-lg '
                    />
                </div>
            </div>

            {/* Content Section */}
            <div className='flex-col w-full lg:w-1/2 flex gap-8'>
                {/* Description */}
                <div className='space-y-4'>
                    <h2 className='font-semibold text-xl text-[#2D8FA5] mb-3'>Program Overview</h2>
                    <div className='bg-white p-6 rounded-xl shadow-sm border border-gray-100'>
                        <p className='text-sm md:text-base text-gray-700 leading-relaxed'>
                            {siteContent.internshipDescription}
                        </p>
                    </div>
                </div>

                {/* Benefits Section */}
                <div className='space-y-6'>
                    <div className='text-center lg:text-left'>
                        <h2 className='font-bold text-xl md:text-2xl text-[#2D8FA5] mb-2'>Internship Benefits</h2>
                        <p className='text-sm text-gray-600'>Discover what makes our program unique</p>
                    </div>
                    
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        {siteContent.benefits.map((benefit) => (
                            <BenefitCard 
                                key={benefit.id}
                                desc={benefit.desc}
                                icon={benefit.icon}
                            />
                        ))}
                    </div>
                </div>

                {/* Additional Features */}
                <div className='bg-gradient-to-r from-[#2D8FA5] to-[#4EB0C7] p-6 rounded-xl text-white'>
                    <h3 className='font-semibold text-lg mb-3'>What You'll Gain</h3>
                    <ul className='space-y-2 text-sm'>
                        {siteContent.whatYouGain.map((item, index) => (
                            <li key={index} className='flex items-center gap-2'>
                                <span className='text-yellow-300'>✓</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Description 