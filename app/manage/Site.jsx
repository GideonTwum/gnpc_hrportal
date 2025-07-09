import React, { useState, useEffect } from 'react'
import { IoIosAdd, IoIosRemove, IoIosSave } from "react-icons/io";

const Site = () => {
  // State for all site content
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
    ],
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

  const [newBenefit, setNewBenefit] = useState({ desc: "", icon: "" });
  const [newEligibility, setNewEligibility] = useState("");
  const [newWhatYouGain, setNewWhatYouGain] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  // Load saved content from localStorage on component mount
  useEffect(() => {
    const savedContent = localStorage.getItem('siteContent');
    if (savedContent) {
      setSiteContent(JSON.parse(savedContent));
    }
  }, []);

  // Save content to localStorage
  const saveContent = () => {
    localStorage.setItem('siteContent', JSON.stringify(siteContent));
    alert('Site content saved successfully!');
  };

  // Auto-save content whenever it changes
  useEffect(() => {
    setIsSaving(true);
    localStorage.setItem('siteContent', JSON.stringify(siteContent));
    setTimeout(() => setIsSaving(false), 1000);
  }, [siteContent]);

  // Update internship description
  const updateDescription = (value) => {
    setSiteContent(prev => ({
      ...prev,
      internshipDescription: value
    }));
  };

  // Add new benefit
  const addBenefit = () => {
    if (newBenefit.desc && newBenefit.icon) {
      setSiteContent(prev => ({
        ...prev,
        benefits: [...prev.benefits, { id: Date.now(), ...newBenefit }]
      }));
      setNewBenefit({ desc: "", icon: "" });
    }
  };

  // Remove benefit
  const removeBenefit = (id) => {
    setSiteContent(prev => ({
      ...prev,
      benefits: prev.benefits.filter(benefit => benefit.id !== id)
    }));
  };

  // Add new eligibility field
  const addEligibility = () => {
    if (newEligibility.trim()) {
      setSiteContent(prev => ({
        ...prev,
        eligibility: [...prev.eligibility, newEligibility.trim()]
      }));
      setNewEligibility("");
    }
  };

  // Remove eligibility field
  const removeEligibility = (index) => {
    setSiteContent(prev => ({
      ...prev,
      eligibility: prev.eligibility.filter((_, i) => i !== index)
    }));
  };

  // Add new "What You'll Gain" item
  const addWhatYouGain = () => {
    if (newWhatYouGain.trim()) {
      setSiteContent(prev => ({
        ...prev,
        whatYouGain: [...prev.whatYouGain, newWhatYouGain.trim()]
      }));
      setNewWhatYouGain("");
    }
  };

  // Remove "What You'll Gain" item
  const removeWhatYouGain = (index) => {
    setSiteContent(prev => ({
      ...prev,
      whatYouGain: prev.whatYouGain.filter((_, i) => i !== index)
    }));
  };

  return (
    <div className='p-6 space-y-8'>
      {/* Header */}
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-bold text-[#2D8FA5]'>Manage Applicant Site</h1>
        <div className='flex gap-3 items-center'>
          {isSaving && (
            <span className='text-sm text-green-600 flex items-center gap-1'>
              <div className='w-3 h-3 border-2 border-green-600 border-t-transparent rounded-full animate-spin'></div>
              Auto-saving...
            </span>
          )}
          <button 
            onClick={() => window.open('/demo-applicant-site', '_blank')}
            className='flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors'
          >
            👁️ Preview Site
          </button>
          <button 
            onClick={saveContent}
            className='flex items-center gap-2 bg-[#77C5D6] text-white px-4 py-2 rounded hover:bg-[#2D8FA5] transition-colors'
          >
            <IoIosSave />
            Save All Changes
          </button>
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        {/* Internship Description Section */}
        <div className='bg-white p-6 rounded-lg shadow'>
          <h2 className='text-lg font-semibold text-[#2D8FA5] mb-4'>Internship Description</h2>
          <textarea 
            value={siteContent.internshipDescription}
            onChange={(e) => updateDescription(e.target.value)}
            className='w-full h-32 p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#77C5D6]'
            placeholder='Enter internship description...'
          />
        </div>

        {/* Benefits Section */}
        <div className='bg-white p-6 rounded-lg shadow'>
          <h2 className='text-lg font-semibold text-[#2D8FA5] mb-4'>Internship Benefits</h2>
          
          {/* Current Benefits */}
          <div className='space-y-3 mb-4'>
            {siteContent.benefits.map((benefit) => (
              <div key={benefit.id} className='flex items-center gap-3 p-3 bg-gray-50 rounded-lg'>
                <span className='text-2xl'>{benefit.icon}</span>
                <span className='flex-1 text-sm'>{benefit.desc}</span>
                <button 
                  onClick={() => removeBenefit(benefit.id)}
                  className='text-red-500 hover:text-red-700'
                >
                  <IoIosRemove />
                </button>
              </div>
            ))}
          </div>

          {/* Add New Benefit */}
          <div className='flex gap-2'>
            <input 
              type="text"
              placeholder="Icon (emoji)"
              value={newBenefit.icon}
              onChange={(e) => setNewBenefit(prev => ({ ...prev, icon: e.target.value }))}
              className='flex-1 p-2 border border-gray-300 rounded text-center'
            />
            <input 
              type="text"
              placeholder="Benefit description"
              value={newBenefit.desc}
              onChange={(e) => setNewBenefit(prev => ({ ...prev, desc: e.target.value }))}
              className='flex-1 p-2 border border-gray-300 rounded'
            />
            <button 
              onClick={addBenefit}
              className='flex items-center gap-1 bg-[#77C5D6] text-white px-3 py-2 rounded hover:bg-[#2D8FA5]'
            >
              <IoIosAdd />
              Add
            </button>
          </div>
        </div>

        {/* What You'll Gain Section */}
        <div className='bg-white p-6 rounded-lg shadow'>
          <h2 className='text-lg font-semibold text-[#2D8FA5] mb-4'>What You'll Gain</h2>
          
          {/* Current Items */}
          <div className='space-y-2 mb-4'>
            {siteContent.whatYouGain.map((item, index) => (
              <div key={index} className='flex items-center gap-3 p-2 bg-gray-50 rounded'>
                <span className='text-yellow-500'>✓</span>
                <span className='flex-1 text-sm'>{item}</span>
                <button 
                  onClick={() => removeWhatYouGain(index)}
                  className='text-red-500 hover:text-red-700'
                >
                  <IoIosRemove />
                </button>
              </div>
            ))}
          </div>

          {/* Add New Item */}
          <div className='flex gap-2'>
            <input 
              type="text"
              placeholder="Add new benefit"
              value={newWhatYouGain}
              onChange={(e) => setNewWhatYouGain(e.target.value)}
              className='flex-1 p-2 border border-gray-300 rounded'
            />
            <button 
              onClick={addWhatYouGain}
              className='flex items-center gap-1 bg-[#77C5D6] text-white px-3 py-2 rounded hover:bg-[#2D8FA5]'
            >
              <IoIosAdd />
              Add
            </button>
          </div>
        </div>

        {/* Eligibility Section */}
        <div className='bg-white p-6 rounded-lg shadow'>
          <h2 className='text-lg font-semibold text-[#2D8FA5] mb-4'>Eligibility Fields</h2>
          
          {/* Current Eligibility */}
          <div className='space-y-2 mb-4'>
            {siteContent.eligibility.map((field, index) => (
              <div key={index} className='flex items-center gap-3 p-2 bg-gray-50 rounded'>
                <span className='w-2 h-2 bg-[#2D8FA5] rounded-full'></span>
                <span className='flex-1 text-sm'>{field}</span>
                <button 
                  onClick={() => removeEligibility(index)}
                  className='text-red-500 hover:text-red-700'
                >
                  <IoIosRemove />
                </button>
              </div>
            ))}
          </div>

          {/* Add New Eligibility */}
          <div className='flex gap-2'>
            <input 
              type="text"
              placeholder="Add new field of study"
              value={newEligibility}
              onChange={(e) => setNewEligibility(e.target.value)}
              className='flex-1 p-2 border border-gray-300 rounded'
            />
            <button 
              onClick={addEligibility}
              className='flex items-center gap-1 bg-[#77C5D6] text-white px-3 py-2 rounded hover:bg-[#2D8FA5]'
            >
              <IoIosAdd />
              Add
            </button>
          </div>
        </div>
      </div>

      {/* Program Details Section */}
      <div className='bg-white p-6 rounded-lg shadow'>
        <h2 className='text-lg font-semibold text-[#2D8FA5] mb-4'>Program Details</h2>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>Duration</label>
            <input 
              type="text"
              value={siteContent.duration}
              onChange={(e) => setSiteContent(prev => ({ ...prev, duration: e.target.value }))}
              className='w-full p-2 border border-gray-300 rounded'
            />
          </div>
          
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>Working Hours</label>
            <input 
              type="text"
              value={siteContent.workingHours}
              onChange={(e) => setSiteContent(prev => ({ ...prev, workingHours: e.target.value }))}
              className='w-full p-2 border border-gray-300 rounded'
            />
          </div>
          
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>Time</label>
            <input 
              type="text"
              value={siteContent.time}
              onChange={(e) => setSiteContent(prev => ({ ...prev, time: e.target.value }))}
              className='w-full p-2 border border-gray-300 rounded'
            />
          </div>
          
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>Location</label>
            <input 
              type="text"
              value={siteContent.location}
              onChange={(e) => setSiteContent(prev => ({ ...prev, location: e.target.value }))}
              className='w-full p-2 border border-gray-300 rounded'
            />
          </div>
        </div>
        
        <div className='mt-4'>
          <label className='block text-sm font-medium text-gray-700 mb-2'>Application Deadline</label>
          <input 
            type="text"
            value={siteContent.applicationDeadline}
            onChange={(e) => setSiteContent(prev => ({ ...prev, applicationDeadline: e.target.value }))}
            className='w-full p-2 border border-gray-300 rounded'
          />
        </div>
      </div>

      {/* Application Steps Section */}
      <div className='bg-white p-6 rounded-lg shadow'>
        <h2 className='text-lg font-semibold text-[#2D8FA5] mb-4'>Application Process Steps</h2>
        
        <div className='space-y-4'>
          {siteContent.applicationSteps.map((step, index) => (
            <div key={index} className='flex gap-4 p-4 bg-gray-50 rounded-lg'>
              <div className='flex-shrink-0 w-8 h-8 bg-[#2D8FA5] text-white rounded-full flex items-center justify-center font-bold text-sm'>
                {step.step}
              </div>
              <div className='flex-1 space-y-2'>
                <input 
                  type="text"
                  value={step.title}
                  onChange={(e) => {
                    const newSteps = [...siteContent.applicationSteps];
                    newSteps[index].title = e.target.value;
                    setSiteContent(prev => ({ ...prev, applicationSteps: newSteps }));
                  }}
                  className='w-full p-2 border border-gray-300 rounded font-semibold'
                />
                <textarea 
                  value={step.description}
                  onChange={(e) => {
                    const newSteps = [...siteContent.applicationSteps];
                    newSteps[index].description = e.target.value;
                    setSiteContent(prev => ({ ...prev, applicationSteps: newSteps }));
                  }}
                  className='w-full p-2 border border-gray-300 rounded resize-none text-sm'
                  rows="2"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Site