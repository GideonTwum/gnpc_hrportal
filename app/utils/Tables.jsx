import { Table } from 'antd';
import { title } from 'process';
import React from 'react'
import { useRouter } from 'next/navigation';

const Tables = () => {
    const router = useRouter();

    const data = [
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
            messageToHiringTeam: "I am passionate about technology and eager to contribute to your team. I have strong programming skills and experience in web development."
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
            messageToHiringTeam: "I am excited about this opportunity and believe my academic background and internship experience make me a strong candidate for this position."
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
            messageToHiringTeam: "I am looking forward to applying my technical skills in a professional environment and learning from experienced team members."
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
            messageToHiringTeam: "I am committed to continuous learning and growth, and I believe this internship will provide valuable experience for my career development."
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
            messageToHiringTeam: "I am enthusiastic about joining your team and contributing to innovative projects while developing my professional skills."
        },

    ];

    const columns = [
        {
            title: "#",
            dataIndex: "id",
            key: "id",
            width: 60
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            width: 120
        },
        {
            title: "Institution",
            dataIndex: "institution",
            key: "institution",
            width: 180
        },
        {
            title: "Program",
            dataIndex: "program",
            key: "program",
            width: 100
        },
        {
            title: "Documents",
            dataIndex: "documents",
            key: "documents",
            width: 150,
            render: (text) => (
                <div className="text-xs">
                    {text.split('/').map((doc, index) => (
                        <div key={index} className="text-blue-600 hover:underline cursor-pointer">
                            {doc}
                        </div>
                    ))}
                </div>
            )
        },
        {
            title: "Actions",
            dataIndex: "actions",
            key: "actions",
            width: 120,
            render: (_, record) => (
                <button 
                    className='text-white bg-[#2D8FA5] p-2 rounded cursor-pointer text-xs'
                    onClick={() => router.push(`/applicant-details/${record.id}`)}
                >
                    View Details
                </button>
            )
        }
    ]
  return (
    <div>
        <p className='text-sm text-[#818181]'>January 2025</p>
        <Table 
            columns={columns} 
            dataSource={data}
            scroll={{ x: 800 }}
            pagination={{
                pageSize: 10,
                showSizeChanger: true,
                showQuickJumper: true,
                showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`
            }}
        />
    </div>
  )
}

export default Tables