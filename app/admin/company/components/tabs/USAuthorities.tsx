"use client";
import React from "react";

import { SaveOutlined } from "@ant-design/icons";
import { Col, DatePicker, Divider, Form, Input, Row, Button } from "antd";
import { useForm } from "antd/es/form/Form";
import FormItem from "antd/es/form/FormItem";

export interface IUSAuthorities {
  usDotNumber: string;
  usDotPin: string;
  biennnialUpdate: string;
  mcNumber: string;
  feinNumber: string;
  carrierCode: string;
  scacCode: string;
  scacCodeExpiryDate: string;
}
const USAuthorities = () => {
  const [form] = useForm<IUSAuthorities>();
  return (
    <>
      <Form form={form} layout="vertical" onFinish={() => {}}>
        <Divider orientation="left">US Authorities Info</Divider>
        <Row gutter={15}>
          <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
            <FormItem
              label="US DOT Number"
              name={"usDotNumber"}
              rules={[
                {
                  required: true,
                  message: "US DOT Number is required!!!",
                },
              ]}
            >
              <Input placeholder="US DOT Number" />
            </FormItem>
          </Col>

          <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
            <FormItem
              label="US DOT Pin"
              name={"usDotPin"}
              rules={[
                {
                  required: true,
                  message: "US DOT Pin is required!!!",
                },
              ]}
            >
              <Input placeholder="US DOT Pin" />
            </FormItem>
          </Col>

          <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
            <FormItem
              label="Biennial Update Due"
              name={"biennialUpdateDue"}
              rules={[
                {
                  required: true,
                  message: "Biennial Update Due is required!!!",
                },
              ]}
            >
              <DatePicker
                placeholder="Biennial Update Due"
                style={{ width: "100%" }}
              />
            </FormItem>
          </Col>

          <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
            <FormItem
              label="MC Number"
              name={"mcNumber"}
              rules={[
                {
                  required: true,
                  message: "MC Number is required!!!",
                },
              ]}
            >
              <Input placeholder="MC Number" />
            </FormItem>
          </Col>

          <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
            <FormItem
              label="FEIN Number"
              name={"feinNumber"}
              rules={[
                {
                  required: true,
                  message: "FEIN Number is required!!!",
                },
              ]}
            >
              <Input placeholder="FEIN Number" />
            </FormItem>
          </Col>

          <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
            <FormItem
              label="Carrier Code"
              name={"carrierCode"}
              rules={[
                {
                  required: true,
                  message: "Carrier Code is required!!!",
                },
              ]}
            >
              <Input placeholder="Carrier Code" />
            </FormItem>
          </Col>

          <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
            <FormItem
              label="SCAC Code"
              name={"scacCode"}
              rules={[
                {
                  required: true,
                  message: "SCAC Code is required!!!",
                },
              ]}
            >
              <Input placeholder="SCAC Code" />
            </FormItem>
          </Col>

          <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
            <FormItem
              label="SCAC Code Expiry Date"
              name={"scacCodeExpiryDate"}
              rules={[
                {
                  required: true,
                  message: "SCAC Code Expiry Date is required!!!",
                },
              ]}
            >
              <Input placeholder="SCAC Code Expiry Date" />
            </FormItem>
          </Col>
        </Row>

        <FormItem>
          <Button htmlType="submit" type="primary" icon={<SaveOutlined />}>
            Save
          </Button>
        </FormItem>
      </Form>
    </>
  );
};

export default USAuthorities;
