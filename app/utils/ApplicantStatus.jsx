import { Table } from 'antd';
import React, { useState, useEffect } from 'react'
import { RefreshCw } from 'lucide-react';

const ApplicantStatus = () => {
    const [data, setData] = useState([
        {
            id: 1,
            name: "Gideon",
            institution: "Valley View University",
            program: "IT",
            documents: "cv.pdf/Letter.pdf",
            status: "pending"
        },
        {
            id: 2,
            name: "Gloria",
            institution: "Valley View University",
            program: "IT",
            documents: "cv.pdf/Letter.pdf",
            status: "pending"
        },
        {
            id: 3,
            name: "Nick",
            institution: "Valley View University",
            program: "IT",
            documents: "cv.pdf/Letter.pdf",
            status: "pending"
        },
        {
            id: 4,
            name: "Hallel",
            institution: "Takoradi Technical University",
            program: "IT",
            documents: "cv.pdf/Letter.pdf",
            status: "pending"
        },
        {
            id: 5,
            name: "Kwabena",
            institution: "Ashesi University",
            program: "MIS",
            documents: "cv.pdf/Letter.pdf",
            status: "pending"
        },
    ]);

    const loadStoredStatuses = () => {
        const storedData = JSON.parse(localStorage.getItem('applicantStatuses') || '{}');
        setData(prevData => 
            prevData.map(applicant => ({
                ...applicant,
                status: storedData[applicant.id] || applicant.status
            }))
        );
    };

    // Load stored statuses from localStorage
    useEffect(() => {
        loadStoredStatuses();
    }, []);

    // Listen for storage changes to update the table
    useEffect(() => {
        const handleStorageChange = () => {
            loadStoredStatuses();
        };

        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    // Function to get status button styling
    const getStatusButton = (status) => {
        switch (status) {
            case 'approved':
                return (
                    <button className='text-white text-sm bg-green-600 p-2 rounded cursor-pointer'>
                        Approved
                    </button>
                );
            case 'rejected':
                return (
                    <button className='text-white text-sm bg-red-600 p-2 rounded cursor-pointer'>
                        Rejected
                    </button>
                );
            case 'pending':
                return (
                    <button className='text-white text-sm bg-yellow-600 p-2 rounded cursor-pointer'>
                        Pending
                    </button>
                );
            default:
                return (
                    <button className='text-white text-sm bg-gray-600 p-2 rounded cursor-pointer'>
                        Pending
                    </button>
                );
        }
    };

    const columns = [
            {
                title: "#",
                dataIndex: "id",
                key: "id"
            },
            {
                title: "Name",
                dataIndex: "name",
                key: "name",
                
            },
            {
                title: "Institution",
                dataIndex: "institution",
                key: "institution"
            },
            {
                title: "Program",
                dataIndex: "program",
                key: "program"
            },
            {
                title: "Documents",
                dataIndex: "documents",
                key: "documents"
            },
            {
                title: "Status",
                dataIndex: "status",
                key: "status",
                render: (status, record) => getStatusButton(status)
            }
        ]

  return (
    <div>
            <div className="flex justify-between items-center mb-4">
                <p className='text-sm text-[#818181]'>January 2025</p>
                <button 
                    onClick={loadStoredStatuses}
                    className="flex items-center space-x-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                    <RefreshCw size={16} />
                    <span className='text-sm'>Refresh</span>
                </button>
            </div>
            <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default ApplicantStatus