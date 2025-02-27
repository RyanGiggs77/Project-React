import React, { useState, useCallback, useEffect } from "react";
import { Card, Button, Modal, Form, Input, Row, Col } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { Meta } = Card;

const Promo = ({ onAddUser, user }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const showModal = useCallback(() => {
    setIsModalVisible(true);
  }, []);

  const handleCancel = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  const handleOk = useCallback(() => {
    form.validateFields().then((values) => {
      console.log("Promo Added:", values);
      onAddUser(values); // Use the onAddUser prop to add a new user
      setIsModalVisible(false);
    });
  }, [form, onAddUser]);

  useEffect(() => {
    if (!isModalVisible) {
      setTimeout(() => form.resetFields(), 300); // Delay reset for smooth transition
    }
  }, [isModalVisible, form]);

  return (
    <div className="p-5 bg-costum-white min-h-screen">
      <div className="flex flex-row-reverse justify-between items-center mb-4">
        <Button type="primary" className="bg-costum-green-dark hover:bg-costum-greenL" onClick={showModal}>
          Add Promo
        </Button>
      </div>
      
      <Row gutter={[16, 16]}>
        {user.map((promo, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="promo" src="https://th.bing.com/th/id/OIP.274E9cQyF3T6LCZt1SnGfQHaHa?rs=1&pid=ImgDetMain" />}
            >
              <Meta title={promo.title} description={promo.description} />
            </Card>
          </Col>
        ))}
      </Row>
      
      <Modal
        title="Add Promo"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        transitionName="ant-fade"
        maskTransitionName="ant-fade"
        destroyOnClose
      >
        <Form xs={24} sm={12} md={8} lg={6} form={form} layout="vertical">
          <Form.Item key="title" name="title" label="Promo Title" rules={[{ required: true, message: "Please enter title!" }]}> 
            <Input placeholder="Enter promo title" />
          </Form.Item>
          <Form.Item key="description" name="description" label="Description" rules={[{ required: true, message: "Please enter description!" }]}> 
            <Input.TextArea rows={3} placeholder="Enter promo description" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Promo;
