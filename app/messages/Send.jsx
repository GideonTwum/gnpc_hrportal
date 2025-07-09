import React, { useState } from 'react';
import { 
  Card, 
  Button, 
  Input, 
  Select, 
  Space, 
  Row, 
  Col, 
  Typography,
  Form,
  Divider,
  Tag,
  Avatar,
  Tooltip
} from 'antd';
import { 
  SendOutlined, 
  UserOutlined, 
  FilterOutlined, 
  ReloadOutlined,
  MessageOutlined,
  MailOutlined,
  TeamOutlined,
  SettingOutlined
} from '@ant-design/icons';

const { Title, Text } = Typography;
const { Option } = Select;
const { TextArea } = Input;

const Send = () => {
  const [form] = Form.useForm();
  const [selectedRecipients, setSelectedRecipients] = useState([]);
  const [messageType, setMessageType] = useState('individual');

  // Mock data for recipients
  const recipients = [
    { id: 1, name: 'Sarah Johnson', email: 'sarah.johnson@email.com', department: 'Engineering', status: 'approved' },
    { id: 2, name: 'Michael Chen', email: 'michael.chen@email.com', department: 'Analytics', status: 'pending' },
    { id: 3, name: 'Emily Rodriguez', email: 'emily.rodriguez@email.com', department: 'Design', status: 'approved' },
    { id: 4, name: 'David Kim', email: 'david.kim@email.com', department: 'Engineering', status: 'approved' },
    { id: 5, name: 'Lisa Wang', email: 'lisa.wang@email.com', department: 'Marketing', status: 'declined' },
  ];

  const departments = ['IT', 'HR', 'Admin', 'Geoscience', 'Engineering', 'Analytics', 'Design', 'Marketing'];
  const statuses = ['approved', 'pending', 'rejected'];

  const handleSend = (values) => {
    console.log('Sending message:', values);
    // Handle message sending logic here
  };

  const handleReset = () => {
    form.resetFields();
    setSelectedRecipients([]);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'approved': return 'green';
      case 'pending': return 'orange';
      case 'rejected': return 'red';
      default: return 'default';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <Title level={2} className="mb-2">Send Messages</Title>
        <Text type="secondary">Compose and send messages to interns and applicants</Text>
      </div>

      <Row gutter={24}>
        {/* Message Composition */}
        <Col span={16}>
          <Card 
            title={
              <div className="flex items-center space-x-2">
                <MessageOutlined />
                <span>Compose Message</span>
              </div>
            }
            className="h-fit"
          >
            <Form
              form={form}
              layout="vertical"
              onFinish={handleSend}
              initialValues={{
                messageType: 'individual',
                department: '',
                status: ''
              }}
            >
              {/* Message Type Selection */}
              <Form.Item label="Message Type" name="messageType">
                <Select onChange={setMessageType}>
                  <Option value="individual">Individual Message</Option>
                  <Option value="bulk">Bulk Message</Option>
                  <Option value="department">Department-wide</Option>
                </Select>
              </Form.Item>

              {/* Recipient Selection */}
              <Form.Item label="Recipients" name="recipients">
                <Select
                  mode="multiple"
                  placeholder="Select recipients..."
                  showSearch
                  filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                  onChange={setSelectedRecipients}
                >
                  {recipients.map(recipient => (
                    <Option key={recipient.id} value={recipient.id}>
                      <div className="flex items-center space-x-2">
                        <Avatar size="small" icon={<UserOutlined />} />
                        <span>{recipient.name}</span>
                        <Tag size="small" color={getStatusColor(recipient.status)}>
                          {recipient.status}
                        </Tag>
                      </div>
                    </Option>
                  ))}
                </Select>
              </Form.Item>

              {/* Subject */}
              <Form.Item 
                label="Subject" 
                name="subject"
                rules={[{ required: true, message: 'Please enter a subject' }]}
              >
                <Input 
                  placeholder="Enter message subject..."
                  prefix={<MailOutlined />}
                />
              </Form.Item>

              {/* Message Content */}
              <Form.Item 
                label="Message" 
                name="message"
                rules={[{ required: true, message: 'Please enter your message' }]}
              >
                <TextArea
                  placeholder="Type your message here..."
                  rows={8}
                  showCount
                  maxLength={1000}
                />
              </Form.Item>

              {/* Action Buttons */}
              <Form.Item>
                <Space>
                  <Button 
                    type="primary" 
                    htmlType="submit"
                    icon={<SendOutlined />}
                    size="large"
                  >
                    Send Message
                  </Button>
                  <Button 
                    icon={<ReloadOutlined />}
                    onClick={handleReset}
                    size="large"
                  >
                    Reset
                  </Button>
                </Space>
              </Form.Item>
            </Form>
          </Card>
        </Col>

        {/* Filters and Recipients */}
        <Col span={8}>
          {/* Filters Card */}
          <Card 
            title={
              <div className="flex items-center space-x-2">
                <FilterOutlined />
                <span>Filters</span>
              </div>
            }
            className="mb-4"
          >
            <Space direction="vertical" className="w-full">
              <div>
                <Text strong>Department</Text>
                <Select
                  placeholder="All Departments"
                  style={{ width: '100%' }}
                  allowClear
                >
                  {departments.map(dept => (
                    <Option key={dept} value={dept}>{dept}</Option>
                  ))}
                </Select>
              </div>

              <div>
                <Text strong>Status</Text>
                <Select
                  placeholder="All Status"
                  style={{ width: '100%' }}
                  allowClear
                >
                  {statuses.map(status => (
                    <Option key={status} value={status}>
                      <Tag color={getStatusColor(status)}>
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                      </Tag>
                    </Option>
                  ))}
                </Select>
              </div>

              <Button 
                type="default" 
                icon={<ReloadOutlined />}
                block
              >
                Apply Filters
              </Button>
            </Space>
          </Card>

          {/* Selected Recipients */}
          <Card 
            title={
              <div className="flex items-center space-x-2">
                <TeamOutlined />
                <span>Selected Recipients ({selectedRecipients.length})</span>
              </div>
            }
          >
            {selectedRecipients.length === 0 ? (
              <div className="text-center py-8">
                <UserOutlined className="text-4xl text-gray-300 mb-2" />
                <Text type="secondary">No recipients selected</Text>
              </div>
            ) : (
              <div className="space-y-2">
                {selectedRecipients.map(recipientId => {
                  const recipient = recipients.find(r => r.id === recipientId);
                  return recipient ? (
                    <div key={recipient.id} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                      <div className="flex items-center space-x-2">
                        <Avatar size="small" icon={<UserOutlined />} />
                        <div>
                          <div className="text-sm font-medium">{recipient.name}</div>
                          <div className="text-xs text-gray-500">{recipient.email}</div>
                        </div>
                      </div>
                      <Tag size="small" color={getStatusColor(recipient.status)}>
                        {recipient.status}
                      </Tag>
                    </div>
                  ) : null;
                })}
              </div>
            )}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Send;
