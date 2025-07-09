import React, { useState, useEffect } from 'react';
import { 
  Table, 
  Card, 
  Tag, 
  Button, 
  Input, 
  Select, 
  Space, 
  Modal, 
  Descriptions, 
  Badge, 
  Tooltip, 
  Avatar,
  Divider,
  Typography,
  Row,
  Col,
  Statistic,
  Progress
} from 'antd';
import { 
  SearchOutlined, 
  FilterOutlined, 
  EyeOutlined, 
  CheckCircleOutlined, 
  CloseCircleOutlined, 
  ClockCircleOutlined,
  UserOutlined,
  CalendarOutlined,
  PhoneOutlined,
  MailOutlined,
  MessageOutlined,
  ExportOutlined,
  ReloadOutlined
} from '@ant-design/icons';

const { Title, Text } = Typography;
const { Option } = Select;

const Response = () => {
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedResponse, setSelectedResponse] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });

  // Mock data - replace with actual API call
  useEffect(() => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      const mockData = [
        {
          id: 1,
          internName: 'Sarah Johnson',
          email: 'sarah.johnson@email.com',
          phone: '+1 (555) 123-4567',
          position: 'Frontend Developer',
          responseDate: '2024-01-15',
          availability: 'available',
          startDate: '2024-02-01',
          endDate: '2024-08-31',
          message: 'I am excited to join the team and available for the full internship period. I have experience with React and JavaScript.',
          status: 'approved',
          department: 'Engineering',
          university: 'MIT',
          gpa: '3.8',
          skills: ['React', 'JavaScript', 'TypeScript', 'CSS'],
          notes: 'Strong candidate with excellent technical skills'
        },
        {
          id: 2,
          internName: 'Michael Chen',
          email: 'michael.chen@email.com',
          phone: '+1 (555) 234-5678',
          position: 'Data Analyst',
          responseDate: '2024-01-14',
          availability: 'unavailable',
          startDate: null,
          endDate: null,
          message: 'Unfortunately, I have accepted another internship offer and will not be available for this position.',
          status: 'declined',
          department: 'Analytics',
          university: 'Stanford',
          gpa: '3.9',
          skills: ['Python', 'SQL', 'Tableau', 'R'],
          notes: 'Candidate declined due to other offer'
        },
        {
          id: 3,
          internName: 'Emily Rodriguez',
          email: 'emily.rodriguez@email.com',
          phone: '+1 (555) 345-6789',
          position: 'UX Designer',
          responseDate: '2024-01-16',
          availability: 'available',
          startDate: '2024-02-15',
          endDate: '2024-07-31',
          message: 'I am available for the internship but can only start in mid-February due to current commitments.',
          status: 'pending',
          department: 'Design',
          university: 'UC Berkeley',
          gpa: '3.7',
          skills: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping'],
          notes: 'Good candidate but needs flexible start date'
        },
        {
          id: 4,
          internName: 'David Kim',
          email: 'david.kim@email.com',
          phone: '+1 (555) 456-7890',
          position: 'Backend Developer',
          responseDate: '2024-01-13',
          availability: 'available',
          startDate: '2024-02-01',
          endDate: '2024-09-30',
          message: 'I am very interested in this opportunity and available for the full duration. I have experience with Node.js and databases.',
          status: 'approved',
          department: 'Engineering',
          university: 'Harvard',
          gpa: '3.6',
          skills: ['Node.js', 'Python', 'MongoDB', 'PostgreSQL'],
          notes: 'Excellent technical background'
        },
        {
          id: 5,
          internName: 'Lisa Wang',
          email: 'lisa.wang@email.com',
          phone: '+1 (555) 567-8901',
          position: 'Marketing Intern',
          responseDate: '2024-01-17',
          availability: 'unavailable',
          startDate: null,
          endDate: null,
          message: 'I have decided to pursue a different opportunity that better aligns with my career goals.',
          status: 'declined',
          department: 'Marketing',
          university: 'NYU',
          gpa: '3.5',
          skills: ['Social Media', 'Content Creation', 'Analytics', 'SEO'],
          notes: 'Candidate chose different opportunity'
        }
      ];
      setResponses(mockData);
      setPagination(prev => ({ ...prev, total: mockData.length }));
      setLoading(false);
    }, 1000);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'approved': return 'green';
      case 'declined': return 'red';
      case 'pending': return 'orange';
      default: return 'default';
    }
  };

  const getAvailabilityColor = (availability) => {
    switch (availability) {
      case 'available': return 'green';
      case 'unavailable': return 'red';
      default: return 'default';
    }
  };

  const getAvailabilityIcon = (availability) => {
    switch (availability) {
      case 'available': return <CheckCircleOutlined />;
      case 'unavailable': return <CloseCircleOutlined />;
      default: return <ClockCircleOutlined />;
    }
  };

  const columns = [
    {
      title: 'Intern',
      key: 'intern',
      render: (_, record) => (
        <div className="flex items-center space-x-3">
          <Avatar icon={<UserOutlined />} />
          <div>
            <div className="font-medium">{record.internName}</div>
            <div className="text-sm text-gray-500">{record.email}</div>
          </div>
        </div>
      ),
      sorter: (a, b) => a.internName.localeCompare(b.internName),
    },

    {
      title: 'Availability',
      key: 'availability',
      render: (_, record) => (
        <Tag 
          color={getAvailabilityColor(record.availability)} 
          icon={getAvailabilityIcon(record.availability)}
        >
          {record.availability.charAt(0).toUpperCase() + record.availability.slice(1)}
        </Tag>
      ),
      filters: [
        { text: 'Available', value: 'available' },
        { text: 'Unavailable', value: 'unavailable' },
      ],
      onFilter: (value, record) => record.availability === value,
    },
    {
      title: 'Status',
      key: 'status',
      render: (_, record) => (
        <Badge 
          status={getStatusColor(record.status)} 
          text={record.status.charAt(0).toUpperCase() + record.status.slice(1)} 
        />
      ),
      filters: [
        { text: 'Approved', value: 'approved' },
        { text: 'Pending', value: 'pending' },
        { text: 'Declined', value: 'declined' },
      ],
      onFilter: (value, record) => record.status === value,
    },
    {
      title: 'Response Date',
      dataIndex: 'responseDate',
      key: 'responseDate',
      render: (date) => (
        <div className="flex items-center space-x-1">
          <CalendarOutlined className="text-gray-400" />
          <span>{new Date(date).toLocaleDateString()}</span>
        </div>
      ),
      sorter: (a, b) => new Date(a.responseDate) - new Date(b.responseDate),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space>
          <Tooltip title="View Details">
            <Button 
              type="primary" 
              icon={<EyeOutlined />} 
              size="small"
              onClick={() => showModal(record)}
            />
          </Tooltip>
        </Space>
      ),
    },
  ];

  const showModal = (record) => {
    setSelectedResponse(record);
    setIsModalVisible(true);
  };

  const handleTableChange = (pagination, filters, sorter) => {
    setPagination(pagination);
  };

  const filteredData = responses.filter(item => {
    const matchesSearch = item.internName.toLowerCase().includes(searchText.toLowerCase()) ||
                         item.email.toLowerCase().includes(searchText.toLowerCase()) ||
                         item.position.toLowerCase().includes(searchText.toLowerCase());
    const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const stats = {
    total: responses.length,
    available: responses.filter(r => r.availability === 'available').length,
    unavailable: responses.filter(r => r.availability === 'unavailable').length,
    approved: responses.filter(r => r.status === 'approved').length,
    pending: responses.filter(r => r.status === 'pending').length,
    declined: responses.filter(r => r.status === 'declined').length,
  };

  return (
    <div >
      <div className="">
        {/* Header */}
        <div className="">
          <Title level={2} className="mb-2">Intern Response Management</Title>
          <Text type="secondary">View and manage all intern responses regarding their availability</Text>
        </div>

        {/* Statistics Cards */}
        <Row gutter={16} className="mb-6">
          <Col span={4}>
            <Card>
              <Statistic
                title="Total Responses"
                value={stats.total}
                prefix={<MessageOutlined />}
              />
            </Card>
          </Col>
          <Col span={4}>
            <Card>
              <Statistic
                title="Available"
                value={stats.available}
                valueStyle={{ color: '#3f8600' }}
                prefix={<CheckCircleOutlined />}
              />
            </Card>
          </Col>
          <Col span={4}>
            <Card>
              <Statistic
                title="Unavailable"
                value={stats.unavailable}
                valueStyle={{ color: '#cf1322' }}
                prefix={<CloseCircleOutlined />}
              />
            </Card>
          </Col>
          <Col span={4}>
            <Card>
              <Statistic
                title="Approved"
                value={stats.approved}
                valueStyle={{ color: '#3f8600' }}
              />
            </Card>
          </Col>
          <Col span={4}>
            <Card>
              <Statistic
                title="Pending"
                value={stats.pending}
                valueStyle={{ color: '#faad14' }}
              />
            </Card>
          </Col>
          <Col span={4}>
            <Card>
              <Statistic
                title="Declined"
                value={stats.declined}
                valueStyle={{ color: '#cf1322' }}
              />
            </Card>
          </Col>
        </Row>

        {/* Filters and Search */}
        <Card className="mb-6">
          <Row gutter={16} align="middle">
            <Col span={8}>
              <Input
                placeholder="Search by name, email, or position..."
                prefix={<SearchOutlined />}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                allowClear
              />
            </Col>
            <Col span={4}>
              <Select
                placeholder="Filter by status"
                value={statusFilter}
                onChange={setStatusFilter}
                style={{ width: '100%' }}
              >
                <Option value="all">All Status</Option>
                <Option value="approved">Approved</Option>
                <Option value="pending">Pending</Option>
                <Option value="declined">Declined</Option>
              </Select>
            </Col>
            <Col span={4}>
              <Button 
                icon={<ReloadOutlined />} 
                onClick={() => window.location.reload()}
              >
                Refresh
              </Button>
            </Col>
            <Col span={8} className="text-right">
              <Button 
                type="primary" 
                icon={<ExportOutlined />}
              >
                Export Data
              </Button>
            </Col>
          </Row>
        </Card>

        {/* Response Table */}
        <Card>
          <Table
            columns={columns}
            dataSource={filteredData}
            rowKey="id"
            loading={loading}
            pagination={{
              ...pagination,
              showSizeChanger: true,
              showQuickJumper: true,
              showTotal: (total, range) => 
                `${range[0]}-${range[1]} of ${total} responses`,
            }}
            onChange={handleTableChange}
            scroll={{ x: 1200 }}
          />
        </Card>

        {/* Detail Modal */}
        <Modal
          title="Intern Response Details"
          open={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          footer={[
            <Button key="back" onClick={() => setIsModalVisible(false)}>
              Close
            </Button>,
            <Button key="message" type="primary" icon={<MessageOutlined />}>
              Send Message
            </Button>,
          ]}
          width={800}
        >
          {selectedResponse && (
            <div>
              <Row gutter={16} className="mb-4">
                <Col span={12}>
                  <Avatar size={64} icon={<UserOutlined />} />
                </Col>
                <Col span={12} className="text-right">
                  <Tag color={getStatusColor(selectedResponse.status)} size="large">
                    {selectedResponse.status.toUpperCase()}
                  </Tag>
                </Col>
              </Row>

              <Descriptions bordered column={2}>
                <Descriptions.Item label="Intern Name" span={2}>
                  <strong>{selectedResponse.internName}</strong>
                </Descriptions.Item>
                <Descriptions.Item label="Email">
                  <div className="flex items-center space-x-2">
                    <MailOutlined />
                    <span>{selectedResponse.email}</span>
                  </div>
                </Descriptions.Item>
                <Descriptions.Item label="Phone">
                  <div className="flex items-center space-x-2">
                    <PhoneOutlined />
                    <span>{selectedResponse.phone}</span>
                  </div>
                </Descriptions.Item>
                <Descriptions.Item label="Position">
                  <Tag color="blue">{selectedResponse.position}</Tag>
                </Descriptions.Item>
                <Descriptions.Item label="Department">
                  {selectedResponse.department}
                </Descriptions.Item>
                <Descriptions.Item label="University">
                  {selectedResponse.university}
                </Descriptions.Item>
                <Descriptions.Item label="GPA">
                  {selectedResponse.gpa}
                </Descriptions.Item>
                <Descriptions.Item label="Availability" span={2}>
                  <Tag 
                    color={getAvailabilityColor(selectedResponse.availability)}
                    icon={getAvailabilityIcon(selectedResponse.availability)}
                    size="large"
                  >
                    {selectedResponse.availability.charAt(0).toUpperCase() + selectedResponse.availability.slice(1)}
                  </Tag>
                </Descriptions.Item>
                {selectedResponse.startDate && (
                  <>
                    <Descriptions.Item label="Start Date">
                      {new Date(selectedResponse.startDate).toLocaleDateString()}
                    </Descriptions.Item>
                    <Descriptions.Item label="End Date">
                      {new Date(selectedResponse.endDate).toLocaleDateString()}
                    </Descriptions.Item>
                  </>
                )}
                <Descriptions.Item label="Response Date">
                  {new Date(selectedResponse.responseDate).toLocaleDateString()}
                </Descriptions.Item>
                <Descriptions.Item label="Skills" span={2}>
                  <Space wrap>
                    {selectedResponse.skills.map((skill, index) => (
                      <Tag key={index} color="green">{skill}</Tag>
                    ))}
                  </Space>
                </Descriptions.Item>
                <Descriptions.Item label="Message" span={2}>
                  <div className="bg-gray-50 p-3 rounded">
                    {selectedResponse.message}
                  </div>
                </Descriptions.Item>
                <Descriptions.Item label="Admin Notes" span={2}>
                  <div className="bg-blue-50 p-3 rounded">
                    {selectedResponse.notes}
                  </div>
                </Descriptions.Item>
              </Descriptions>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default Response;