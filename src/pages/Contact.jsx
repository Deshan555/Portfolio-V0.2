import React from 'react';
import { Row, Col, Form, Input, Button, Upload } from 'antd';
import { motion } from 'framer-motion';
import axios from 'axios';
import fing1 from '../assets/fig-01.webp';
import '../theme.css';

const Contact = ({ darkMode }) => {
    const [form] = Form.useForm();

    // https://github.com/axios/axios
// axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.post('https://formsubmit.co/ajax/your@email.com', {
//     name: "FormSubmit",
//     message: "I'm from Devro LABS"
// })
//     .then(response => console.log(response))
//     .catch(error => console.log(error));

    const handleSubmit = (values) => {
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.post('https://formsubmit.co/djayashanka750@gmail.com', {
            name: values.name,
            message: values.message,
            _subject: values._subject
        })
            .then(response => console.log(response))
            .catch(error => console.log(error));
    };

    return (
        <div style={{ marginRight: '10%', marginLeft: '10%', marginTop: 30 }}>
            <Form
                form={form}
                // method="POST"
                // action="https://formsubmit.co/djayashanka750@gmail.com"
                // encType="multipart/form-data"
                onFinish={handleSubmit}
                layout="vertical"
            >
                <Row>
                <Col xs={24} md={12}>
                    <Form.Item
                    label={<span className='font-light' style={{ color: 'white' }}>Subject</span>}
                    name="_subject"
                    rules={[{ required: true, message: 'Please input your subject!' }]}
                >
                    <Input
                    style={{ width: '98%', height: '35px' }}
                    className='customDropdown'
                    type="text" placeholder="Add Subject" />
                </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                    <Form.Item
                    label={<span className='font-light' style={{ color: 'white' }}>Your Name</span>}
                    name="name"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                >
                    <Input
                    style={{ width: '98%', height: '35px' }}
                    className='customDropdown'
                    type="text" placeholder="Your Name" />
                </Form.Item>
                    </Col>

                    <Col xs={24} md={24}>
                    <Form.Item
                    label={<span className='font-light' style={{ color: 'white' }}>Message</span>}
                    name="message"
                    rules={[{ required: true, message: 'Please input your message!' }]}
                >
                    <Input.TextArea 
                                        style={{ width: '99%', height: '60px' }}
                    className='customDropdown'
                    type="text"
                    placeholder="Details of your problem" />
                </Form.Item>

                    </Col>
                </Row>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Send Test
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Contact;