import { Table } from 'antd';
import React from 'react'

const ApplicantStatus = () => {
    const data = [
        {
            id: 1,
            name: "Gideon",
            institution: "Valley View University",
            program: "IT",
            documents: "cv.pdf/Letter.pdf"
        },
        {
            id: 2,
            name: "Gloria",
            institution: "Valley View University",
            program: "IT",
            documents: "cv.pdf/Letter.pdf"
        },
        {
            id: 3,
            name: "Nick",
            institution: "Valley View University",
            program: "IT",
            documents: "cv.pdf/Letter.pdf"
        },
        {
            id: 4,
            name: "Hallel",
            institution: "Takoradi Technical University",
            program: "IT",
            documents: "cv.pdf/Letter.pdf"
        },
        {
            id: 5,
            name: "Kwabena",
            institution: "Ashesi University",
            program: "MIS",
            documents: "cv.pdf/Letter.pdf"
        },

    ];

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
                render: (_, record) => (
                    <button className='text-white bg-[dodgerblue] p-2 rounded cursor-pointer '>Approved</button>
                )
            }
        ]


  return (
    <div>
            <p className='text-sm text-[#818181]'>January 2025</p>
            <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default ApplicantStatus