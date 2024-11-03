"use client"
import React from 'react';
import { SaveOutlined } from "@ant-design/icons";
import {
  Col,
  Divider,
  Form,
  Input,
  Row,
  Button,
  Select,
  DatePicker
} from "antd";
import { useForm } from "antd/es/form/Form";
import FormItem from "antd/es/form/FormItem";

export interface IPayment {
  cardType: string;
  nameOnCard: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

const CARD_TYPES = [
  { value: "DEBIT", label: "DEBIT" },
  { value: "CREDIT", label: "CREDIT" },
];

const Payment = () => {
  const [form] = useForm<IPayment>();
  return (
    <Form form={form} layout="vertical" onFinish={() => { }} initialValues={{ licenseCertificationsCredentials: [{}] }}>
      <Divider orientation="left">Card Info</Divider>
      <Row gutter={15}>
        <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
          <FormItem
            label="Card Type"
            name={"cardType"}
            rules={[
              {
                required: true,
                message: "Card Type is required!!!",
              },
            ]}
          >
            <Select allowClear options={CARD_TYPES}></Select>
          </FormItem>
        </Col>

        <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
          <FormItem
            label="Name On Card"
            name={"nameOnCard"}
            rules={[
              {
                required: true,
                message: "Name On Card is required!!!",
              },
            ]}
          >
            <Input placeholder="Name on Card" />
          </FormItem>
        </Col>

        <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
          <FormItem
            label="Card Number"
            name={"cardNumber"}
            rules={[
              {
                required: true,
                message: "Card Number is required!!!",
              },
            ]}
          >
            <Input placeholder="Account Number" />
          </FormItem>
        </Col>

        <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
          <FormItem
            label="Card Expiry Date"
            name={"expiryDate"}
            rules={[
              {
                required: true,
                message: "Expiry Date is required!!!",
              },
            ]}
          >
            <DatePicker placeholder="Expiry Date" style={{ width: "100%" }} />
          </FormItem>
        </Col>

        <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
          <FormItem
            label="CVV"
            name={"cvv"}
            rules={[
              {
                required: true,
                message: "CVV is required!!!",
              },
            ]}
          >
            <Input placeholder="CVV" />
          </FormItem>
        </Col>
      </Row>


      <FormItem style={{ marginTop: 10 }}>
        <Button htmlType="submit" type="primary" icon={<SaveOutlined />}>
          Save
        </Button>
      </FormItem>
    </Form>
  )
}

export default Payment