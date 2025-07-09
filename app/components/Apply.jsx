import React, { useState, useEffect } from 'react'

const Apply = () => {
  const [siteContent, setSiteContent] = useState({
    eligibility: [
      "Information Technology",
      "Human Resources",
      "Finance",
      "Engineering",
      "Communications",
      "Environmental Sciences"
    ],
    duration: "3 months",
    workingHours: "Monday - Friday",
    time: "8:00 AM - 5:00 PM",
    location: "GNPC Head Office",
    applicationDeadline: "December 31, 2024",
    applicationSteps: [
      { step: 1, title: "Click on Apply button", description: "Navigate to the application portal and click the \"Apply Now\" button to begin your application process." },
      { step: 2, title: "Fill form", description: "Complete the online application form with your personal information, educational background, and relevant details." },
      { step: 3, title: "Submit documents", description: "Upload required documents including your CV, Ghana Card, and any additional supporting materials." },
      { step: 4, title: "Finish", description: "Review your application and submit. You will be notified via email if you are selected." }
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
    <div id='apply' className='min-h-screen bg-[#F9FDFA] flex flex-col items-center justify-center py-8 md:py-12 lg:py-16 px-4 md:px-8'>
        <div className='text-center mb-8 md:mb-12'>
            <h1 className='font-bold text-[#2D8FA5] text-2xl md:text-3xl lg:text-4xl mb-3 md:mb-4'>How To Apply</h1>
            <p className='text-[#2D8FA5] text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-4 mb-4'>
              Join our internship program and kickstart your career journey with GNPC
            </p>
            <div className='bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg max-w-md mx-auto'>
              <p className='font-semibold text-sm md:text-base'> Internship Slots Are Now Open!</p>
              <p className='text-xs md:text-sm mt-1'>Applications close on <span className='font-bold'>{siteContent.applicationDeadline}</span></p>
            </div>
        </div>
        
        <div className='max-w-6xl w-full grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12'>
            {/* Eligibility Section */}
            <div className='bg-white rounded-lg p-4 md:p-6 lg:p-8 shadow-lg'>
                <h2 className='font-bold text-[#2D8FA5] text-xl md:text-2xl mb-4 md:mb-6'>Eligibility</h2>
                <div className='space-y-4'>
                    <div>
                        <p className='text-[#2D8FA5] text-base md:text-lg font-semibold mb-3'>Who can apply?</p>
                        <p className='text-[#2D8FA5] text-sm md:text-base leading-relaxed'>
                            The internship is open to tertiary students from accredited institutions 
                            across various fields of study, including but not limited to:
                        </p>
                        <ul className='mt-4 space-y-2'>
                            {siteContent.eligibility.map((field, index) => (
                                <li key={index} className='text-[#2D8FA5] text-xs md:text-sm flex items-center'>
                                    <span className='w-2 h-2 bg-[#2D8FA5] rounded-full mr-3 flex-shrink-0'></span>
                                    {field}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Duration Section */}
            <div className='bg-white rounded-lg p-4 md:p-6 lg:p-8 shadow-lg'>
                <h2 className='font-bold text-[#2D8FA5] text-xl md:text-2xl mb-4 md:mb-6'>Duration</h2>
                <div className='space-y-4'>
                    <div>
                        <p className='text-[#2D8FA5] text-base md:text-lg font-semibold mb-3'>Internship Period</p>
                        <p className='text-[#2D8FA5] text-sm md:text-base leading-relaxed mb-4'>
                            Our internship program runs for a period of {siteContent.duration} providing you with comprehensive hands-on experience in your chosen field.
                        </p>
                        <div className='bg-[#F0F8FF] p-4 rounded-lg mb-4'>
                            <p className='text-[#2D8FA5] text-sm md:text-base font-semibold mb-2'>Program Schedule:</p>
                            <ul className='space-y-2'>
                                <li className='text-[#2D8FA5] text-xs md:text-sm flex items-center'>
                                    <span className='w-2 h-2 bg-[#2D8FA5] rounded-full mr-3 flex-shrink-0'></span>
                                    Duration: {siteContent.duration}
                                </li>
                                <li className='text-[#2D8FA5] text-xs md:text-sm flex items-center'>
                                    <span className='w-2 h-2 bg-[#2D8FA5] rounded-full mr-3 flex-shrink-0'></span>
                                    Working Hours: {siteContent.workingHours}
                                </li>
                                <li className='text-[#2D8FA5] text-xs md:text-sm flex items-center'>
                                    <span className='w-2 h-2 bg-[#2D8FA5] rounded-full mr-3 flex-shrink-0'></span>
                                    Time: {siteContent.time}
                                </li>
                                <li className='text-[#2D8FA5] text-xs md:text-sm flex items-center'>
                                    <span className='w-2 h-2 bg-[#2D8FA5] rounded-full mr-3 flex-shrink-0'></span>
                                    Location: {siteContent.location}
                                </li>
                            </ul>
                        </div>
                        <div className='bg-orange-50 border border-orange-200 p-4 rounded-lg'>
                            <p className='text-[#2D8FA5] text-sm md:text-base font-semibold mb-2'>Application Deadline:</p>
                            <p className='text-[#2D8FA5] text-sm md:text-base'>
                                <span className='font-bold text-orange-600'>{siteContent.applicationDeadline}</span>
                            </p>
                            <p className='text-[#2D8FA5] text-xs md:text-sm mt-2'>
                                Don't miss out! Submit your application before the deadline to be considered for this exciting opportunity.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Application Process Section */}
            <div className='bg-white rounded-lg p-4 md:p-6 lg:p-8 shadow-lg'>
                <h2 className='font-bold text-[#2D8FA5] text-xl md:text-2xl mb-4 md:mb-6'>Application Process</h2>
                <div className='space-y-4 md:space-y-6'>
                    {siteContent.applicationSteps.map((step, index) => (
                        <div key={index} className='flex items-start space-x-3 md:space-x-4'>
                            <div className='flex-shrink-0 w-6 h-6 md:w-8 md:h-8 bg-[#2D8FA5] text-white rounded-full flex items-center justify-center font-bold text-xs md:text-sm'>
                                {step.step}
                            </div>
                            <div>
                                <h3 className='font-semibold text-[#2D8FA5] text-base md:text-lg mb-1 md:mb-2'>{step.title}</h3>
                                <p className='text-[#2D8FA5] text-xs md:text-sm leading-relaxed'>
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Apply 