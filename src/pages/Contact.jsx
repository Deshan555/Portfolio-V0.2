import React, { useState } from 'react';
import { Row, Col, Form, Input, Button, message } from 'antd';
import axios from 'axios';
import '../theme.css';
import { MailOutlined } from '@ant-design/icons';

const Contact = ({ darkMode }) => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false); // State to manage loading

    const handleSubmit = async (values) => {
        setLoading(true); // Start loading
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        try {
            const response = await axios.post('https://formsubmit.co/djayashanka750@gmail.com', {
                name: values.name,
                message: values.message,
                _subject: values._subject,
            });

            if (response.status === 200) {
                message.success('Your message has been sent successfully!');
                form.resetFields();
            }
        } catch (error) {
            message.error('There was an error sending your message.');
            console.error(error);
        } finally {
            setLoading(false); // Stop loading
        }
    };

    return (
        <div style={{ marginRight: '10%', marginLeft: '10%', marginTop: 30 }}>
            <Row gutter={[16, 16]} 
            // justify="end"
            >
                <span style={{ fontSize: 45, marginTop: '0px', fontWeight: 'bold' }} className='font-header'>
                    Get in Touch
                </span>
            </Row>
            <Form
                form={form}
                onFinish={handleSubmit}
                layout="vertical"
            >
                <Row>
                    <Col xs={24} md={12}>
                        <Form.Item
                            label={<span className="font-light" style={{ color: 'white' }}>Subject</span>}
                            name="_subject"
                            rules={[{ required: true, message: 'Please input your subject!' }]}
                        >
                            <Input
                                style={{ width: '98%', height: '35px' }}
                                className="customDropdown"
                                type="text"
                                placeholder="Add Subject"
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                        <Form.Item
                            label={<span className="font-light" style={{ color: 'white' }}>Your Name</span>}
                            name="name"
                            rules={[{ required: true, message: 'Please input your name!' }]}
                        >
                            <Input
                                style={{ width: '98%', height: '35px' }}
                                className="customDropdown"
                                type="text"
                                placeholder="Your Name"
                            />
                        </Form.Item>
                    </Col>

                    <Col xs={24} md={24}>
                        <Form.Item
                            label={<span className="font-light" style={{ color: 'white' }}>Message</span>}
                            name="message"
                            rules={[{ required: true, message: 'Please input your message!' }]}
                        >
                            <Input.TextArea
                                style={{ width: '99%', height: '60px' }}
                                className="customDropdown"
                                placeholder="Details of your problem"
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item>
                    <Button type="primary"
                        style={{ borderRadius: '5px', borderColor: '#60AE75', backgroundColor: '#60AE75', color: 'white' }}
                        htmlType="submit" loading={loading} icon={<MailOutlined />}>
                        <span className="font-light">Send Message</span>
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Contact;
