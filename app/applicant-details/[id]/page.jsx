'use client';
import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, Download, Eye, CheckCircle, XCircle, Clock } from 'lucide-react';

const ApplicantDetails = () => {
    const params = useParams();
    const router = useRouter();
    const [applicant, setApplicant] = useState(null);

    // Mock data - in a real app, this would come from an API
    const applicantsData = [
        {
            id: 1,
            name: "Gideon",
            institution: "Valley View University",
            program: "IT",
            documents: "cv.pdf/Letter.pdf",
            passportPicture: "passport_gideon.jpg",
            ghanaCardFront: "ghana_card_front_1.jpg",
            ghanaCardBack: "ghana_card_back_1.jpg",
            nhisCard: "nhis_card_1.jpg",
            messageToHiringTeam: "I am passionate about technology and eager to contribute to your team. I have strong programming skills and experience in web development.",
            status: "pending" // pending, approved, rejected
        },
        {
            id: 2,
            name: "Gloria",
            institution: "Valley View University",
            program: "IT",
            documents: "cv.pdf/Letter.pdf",
            passportPicture: "passport_gloria.jpg",
            ghanaCardFront: "ghana_card_front_2.jpg",
            ghanaCardBack: "ghana_card_back_2.jpg",
            nhisCard: "nhis_card_2.jpg",
            messageToHiringTeam: "I am excited about this opportunity and believe my academic background and internship experience make me a strong candidate for this position.",
            status: "pending"
        },
        {
            id: 3,
            name: "Nick",
            institution: "Valley View University",
            program: "IT",
            documents: "cv.pdf/Letter.pdf",
            passportPicture: "passport_nick.jpg",
            ghanaCardFront: "ghana_card_front_3.jpg",
            ghanaCardBack: "ghana_card_back_3.jpg",
            nhisCard: "nhis_card_3.jpg",
            messageToHiringTeam: "I am looking forward to applying my technical skills in a professional environment and learning from experienced team members.",
            status: "pending"
        },
        {
            id: 4,
            name: "Hallel",
            institution: "Takoradi Technical University",
            program: "IT",
            documents: "cv.pdf/Letter.pdf",
            passportPicture: "passport_hallel.jpg",
            ghanaCardFront: "ghana_card_front_4.jpg",
            ghanaCardBack: "ghana_card_back_4.jpg",
            nhisCard: "nhis_card_4.jpg",
            messageToHiringTeam: "I am committed to continuous learning and growth, and I believe this internship will provide valuable experience for my career development.",
            status: "pending"
        },
        {
            id: 5,
            name: "Kwabena",
            institution: "Ashesi University",
            program: "MIS",
            documents: "cv.pdf/Letter.pdf",
            passportPicture: "passport_kwabena.jpg",
            ghanaCardFront: "ghana_card_front_5.jpg",
            ghanaCardBack: "ghana_card_back_5.jpg",
            nhisCard: "nhis_card_5.jpg",
            messageToHiringTeam: "I am enthusiastic about joining your team and contributing to innovative projects while developing my professional skills.",
            status: "pending"
        },
    ];

    useEffect(() => {
        const applicantId = parseInt(params.id);
        const foundApplicant = applicantsData.find(app => app.id === applicantId);
        
        // Load stored status from localStorage
        const storedData = JSON.parse(localStorage.getItem('applicantStatuses') || '{}');
        const storedStatus = storedData[applicantId];
        
        if (foundApplicant) {
            setApplicant({
                ...foundApplicant,
                status: storedStatus || foundApplicant.status
            });
        }
    }, [params.id]);

    const handleStatusUpdate = (newStatus) => {
        setApplicant(prev => ({
            ...prev,
            status: newStatus
        }));
        
        // Save to localStorage for persistence across components
        const storedData = JSON.parse(localStorage.getItem('applicantStatuses') || '{}');
        storedData[applicant.id] = newStatus;
        localStorage.setItem('applicantStatuses', JSON.stringify(storedData));
        
        // In a real app, you would make an API call here to update the status
        console.log(`Status updated to: ${newStatus} for applicant ${applicant.id}`);
        
        // Show success message
        alert(`Applicant status updated to ${newStatus}`);
    };

    const getStatusButton = (status) => {
        switch (status) {
            case 'approved':
                return (
                    <button className="flex items-center space-x-2 px-4 py-2 bg-green-100 text-green-700 rounded-lg border border-green-300">
                        <CheckCircle size={16} />
                        <span>Approved</span>
                    </button>
                );
            case 'rejected':
                return (
                    <button className="flex items-center space-x-2 px-4 py-2 bg-red-100 text-red-700 rounded-lg border border-red-300">
                        <XCircle size={16} />
                        <span>Rejected</span>
                    </button>
                );
            default:
                return (
                    <button className="flex items-center space-x-2 px-4 py-2 bg-yellow-100 text-yellow-700 rounded-lg border border-yellow-300">
                        <Clock size={16} />
                        <span>Pending</span>
                    </button>
                );
        }
    };

    if (!applicant) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2D8FA5] mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading applicant details...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => router.back()}
                            className="flex items-center space-x-2 text-[#2D8FA5] hover:text-[#1a6b7a] transition-colors"
                        >
                            <ArrowLeft size={20} />
                            <span className='text-sm cursor-pointer'>Back to Applications</span>
                        </button>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-800">Applicant Details</h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Passport Picture and Basic Info */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            {/* Passport Picture */}
                            <div className="text-center mb-6">
                                <div className="w-48 h-48 mx-auto bg-gray-200 rounded-lg overflow-hidden mb-4">
                                    <img
                                        src={`/images/${applicant.passportPicture}`}
                                        alt={`${applicant.name}'s passport picture`}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.target.src = '/images/default-avatar.png';
                                        }}
                                    />
                                </div>
                                <h2 className="text-xl font-semibold text-gray-800">{applicant.name}</h2>
                                <p className="text-gray-600">{applicant.institution}</p>
                                <p className="text-gray-600">{applicant.program}</p>
                            </div>

                            {/* Current Status */}
                            <div className="mb-6">
                                <h3 className="font-semibold text-gray-700 mb-3">Current Status</h3>
                                {getStatusButton(applicant.status)}
                            </div>

                            {/* Status Actions */}
                            <div className="mb-6">
                                <h3 className="font-semibold text-gray-700 mb-3">Update Status</h3>
                                <div className="space-y-2">
                                    <button
                                        onClick={() => handleStatusUpdate('approved')}
                                        className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                                    >
                                        <CheckCircle size={16} />
                                        <span>Approve</span>
                                    </button>
                                    <button
                                        onClick={() => handleStatusUpdate('rejected')}
                                        className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                                    >
                                        <XCircle size={16} />
                                        <span>Reject</span>
                                    </button>
                                    <button
                                        onClick={() => handleStatusUpdate('pending')}
                                        className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
                                    >
                                        <Clock size={16} />
                                        <span>Set to Pending</span>
                                    </button>
                                </div>
                            </div>

                            {/* Basic Information */}
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-semibold text-gray-700 mb-2">Basic Information</h3>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">ID:</span>
                                            <span className="font-medium">#{applicant.id}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Name:</span>
                                            <span className="font-medium">{applicant.name}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Institution:</span>
                                            <span className="font-medium">{applicant.institution}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Program:</span>
                                            <span className="font-medium">{applicant.program}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Documents and Cards */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Documents Section */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Documents</h3>
                            <div className="space-y-3">
                                {applicant.documents.split('/').map((doc, index) => (
                                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                        <span className="text-gray-700">{doc}</span>
                                        <div className="flex space-x-2">
                                            <button className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                                                <Eye size={16} />
                                            </button>
                                            <button className="p-2 text-green-600 hover:bg-green-50 rounded">
                                                <Download size={16} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Ghana Card Section */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Ghana Card</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="text-center">
                                    <div className="w-full h-48 bg-gray-200 rounded-lg overflow-hidden mb-3">
                                        <img
                                            src={`/images/${applicant.ghanaCardFront}`}
                                            alt="Ghana Card Front"
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.target.src = '/images/default-card.png';
                                            }}
                                        />
                                    </div>
                                    <p className="text-sm text-gray-600">Front Side</p>
                                    <div className="flex justify-center space-x-2 mt-2">
                                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                                            <Eye size={16} />
                                        </button>
                                        <button className="p-2 text-green-600 hover:bg-green-50 rounded">
                                            <Download size={16} />
                                        </button>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="w-full h-48 bg-gray-200 rounded-lg overflow-hidden mb-3">
                                        <img
                                            src={`/images/${applicant.ghanaCardBack}`}
                                            alt="Ghana Card Back"
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.target.src = '/images/default-card.png';
                                            }}
                                        />
                                    </div>
                                    <p className="text-sm text-gray-600">Back Side</p>
                                    <div className="flex justify-center space-x-2 mt-2">
                                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                                            <Eye size={16} />
                                        </button>
                                        <button className="p-2 text-green-600 hover:bg-green-50 rounded">
                                            <Download size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* NHIS Card Section */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">NHIS Card</h3>
                            <div className="text-center">
                                <div className="w-full max-w-md h-48 bg-gray-200 rounded-lg overflow-hidden mx-auto mb-3">
                                    <img
                                        src={`/images/${applicant.nhisCard}`}
                                        alt="NHIS Card"
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.target.src = '/images/default-card.png';
                                        }}
                                    />
                                </div>
                                <div className="flex justify-center space-x-2">
                                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                                        <Eye size={16} />
                                    </button>
                                    <button className="p-2 text-green-600 hover:bg-green-50 rounded">
                                        <Download size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Message to Hiring Team */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Message to Hiring Team</h3>
                            <div className="bg-gray-50 rounded-lg p-4">
                                <p className="text-gray-700 leading-relaxed">{applicant.messageToHiringTeam}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplicantDetails; 