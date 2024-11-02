"use client";
import React from "react";

import { SaveOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Col,
  Divider,
  Form,
  Input,
  Row,
  Button,
} from "antd";
import { useForm } from "antd/es/form/Form";
import FormItem from "antd/es/form/FormItem";
import FormList from "antd/es/form/FormList";
import ServiceProviderCredentials from "./ServiceProviderCredentials";

export interface IServiceProviderCredentials{
    type: string;
    username: string;
    password: string;
};

export interface ILicense {
  drugTestProviderName: string;
  dashCamProviderName: string;
  fuelProvider: string;
  eldProvider: string;
  serviceProviderCredentials: IServiceProviderCredentials[];
}

const ServiceProvider = () => {
  const [form] = useForm<ILicense>();
  return (
    <Form form={form} layout="vertical" onFinish={() => {}} initialValues={ {serviceProviderCredentials: [{}]}}>
    <Divider orientation="left">Service Provider</Divider>
    <Row gutter={15}>
      <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
        <FormItem
          label="Drug Test Provider Name"
          name={"drugTestProviderName"}
          rules={[
            {
              required: true,
              message: "Drug Test Provider Name is required!!!",
            },
          ]}
        >
          <Input placeholder="Drug Test Provider Name" />
        </FormItem>
      </Col>
     
      <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
        <FormItem
           label="Dash Cam Provider Name"
          name={"dashCamProviderName"}
          rules={[
            {
              required: true,
              message: "Dash Cam Provider Name is required!!!",
            },
          ]}
        >
          <Input placeholder="Dash Cam Provider Name" />
        </FormItem>
      </Col>
      <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
        <FormItem
          label="Fuel Provider"
          name={"fuelProvider"}
          rules={[
            {
              required: true,
              message: "Fuel Provider is required!!!",
            },
          ]}
        >
          <Input placeholder="Fuel Provider" />
        </FormItem>
      </Col>

      <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
        <FormItem
          label="ELD Provider"
          name={"eldProvider"}
          rules={[
            {
              required: true,
              message: "ELD Provider is required!!!",
            },
          ]}
        >
          <Input placeholder="ELD provider" />
        </FormItem>
      </Col>
      </Row>
    
     <FormList name={"serviceProviderCredentials"}
          rules={[
            {
              validator: (_, serviceProviderCredentials) => {
                if (!serviceProviderCredentials || serviceProviderCredentials.length < 1) {
                  return Promise.reject(new Error('At least one yard address is required.'));
                }
                else {
                  return Promise.resolve();
                }
              }
            }
          ]}
        >
          {
            (fields, { add, remove }) => (
              <>
                {
                  fields.map(({ key, name, ...restField }, index) => (
                    <Row key={key} align={"top"}>
                      <Col span={23}>
                        <ServiceProviderCredentials key={key} name={name} restField={restField} /></Col>
                      <Col span={1}>
                        {(index > 0) && <Button icon={<MinusOutlined />} shape="circle" danger onClick={() => remove(name)} />}
                      </Col>
                    </Row>
                  ))
                }
                <Row>
                  <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                    Add Service Provider Credentials
                  </Button>
                </Row>
              </>
            )
          }
        </FormList>

        <FormItem style={{ marginTop: 10 }}>
          <Button htmlType="submit" type="primary" icon={<SaveOutlined />}>
            Save
          </Button>
        </FormItem>
      </Form>
  )
}

export default ServiceProvider