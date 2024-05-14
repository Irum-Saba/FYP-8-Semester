import React, { Component } from 'react'
import { Col, Form, Input, Row, TimePicker, message } from "antd";
export class trainerform extends Component {
  render() {
    return (
      <>
    <div>
      <h1 className="text-center">Request for Trainer's Account</h1>
      <Form layout="vertical"  className="m-3">
        <h3 className="text-muted">Personal Details :</h3>
        <Row gutter={20}>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Username"
              name="username"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="Name" />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              required
              rules={[{ required: true }]}
            >
              <Input type="email" placeholder="Email" />
            </Form.Item>
            <Form.Item
              label="CNIC"
              name="cnic"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="CNIC" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Contact"
              name="contact"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="Contact" />
            </Form.Item>
            <Form.Item
              label="Age"
              name="age"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="Age" />
            </Form.Item>
          </Col> 
          <Col xs={24} md={24} lg={8}>
          <Form.Item
              label="Gender"
              name="gender"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="Gender" />
            </Form.Item>
            <Form.Item
              label="Address"
              name="address"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="Gddress" />
            </Form.Item>
          </Col> 
        </Row>
        

        <h3 className="text-muted">Educational Details :</h3>
        <Row gutter={20}>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Institute"
              name="institute"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="Institute" />
            </Form.Item>
            <Form.Item
              label="CGPA/Persentage"
              name="cgpa"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="CGPA/Persentage" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Degree"
              name="degree"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="Degree" />
            </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Session"
              name="session"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="Session" />
            </Form.Item>
            </Col>
            </Row>
            <h3 className="text-muted">About Course :</h3>
        <Row gutter={20}>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Course want to learn"
              name="courselearn"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="Course want to learn" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Field of Interest"
              name="fieldinterest"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="Field of Interest" />
            </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="New thing in course"
              name="newthing"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="New thing in course" />
            </Form.Item>
            
        
            <div className="d-flex justify-content-end">
              <button className="btn btn-primary" type="submit">
                Add
              </button>
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  </>
    )
  }
}

export default trainerform

