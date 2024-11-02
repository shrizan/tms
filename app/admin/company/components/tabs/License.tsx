"use client";
import React from "react";

import { SaveOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Col,
  DatePicker,
  Divider,
  Form,
  Input,
  Row,
  Button,
  Select,
} from "antd";
import { useForm } from "antd/es/form/Form";
import FormItem from "antd/es/form/FormItem";
import FormList from "antd/es/form/FormList";
import TextArea from "antd/es/input/TextArea";
import LicenseCertificationCredentials from "./LicenseCertificationCredentials";

export interface ILicenseCertificationCredentials{
    type: string;
    username: string;
    password: string;
    certificationExpiryDate: string;
    comments: string;
};

export interface ILicense {
  fleetNumber: string;
  rinNumber: string;
  accountNumber: string;
  expiryDate: string;
  canadaBond: string;
  usaBond: string;
  canadaBondExpiryDate: string;
  USABondExpiryDate: string;
  isCTPATCertified: string;
  annualReviewDate: string;
  licenseCertificationsCredentials: ILicenseCertificationCredentials[];
}

const BOOLEAN_TYPES = [
  {value: true, label: "YES" },
  {value: false, label: "NO" },
];



const License = () => {
  const [form] = useForm<ILicense>();
  return (
    <>
      <Form form={form} layout="vertical" onFinish={() => {}} initialValues={ {licenseCertificationsCredentials: [{}]}}>
        <Divider orientation="left">IRP Info</Divider>
        <Row gutter={15}>
          <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
            <FormItem
              label="Fleet Number"
              name={"fleetNumber"}
              rules={[
                {
                  required: true,
                  message: "Fleet Number is required!!!",
                },
              ]}
            >
              <Input placeholder="Fleet Number" />
            </FormItem>
          </Col>

          <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
            <FormItem
              label="RIN Number"
              name={"rinNumber"}
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
              label="Account Number"
              name={"accountNumber"}
              rules={[
                {
                  required: true,
                  message: "Account Number is required!!!",
                },
              ]}
            >
              <Input placeholder="Account Number" />
            </FormItem>
          </Col>

          <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
            <FormItem
              label="Expiry Date"
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
        </Row>

        

        <Row gutter={15}>
          <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
            <FormItem
              label="Canada Bond"
              name={"canadaBond"}
              rules={[
                {
                  required: true,
                  message: "Canada Bond is required!!!",
                },
              ]}
            >
              <Input placeholder="Canada Bond" />
            </FormItem>
          </Col>

          <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
            <FormItem
              label="USA Bond"
              name={"usaBond"}
              rules={[
                {
                  required: true,
                  message: "USA Bond is required!!!",
                },
              ]}
            >
              <Input placeholder="USA Bond" />
            </FormItem>
          </Col>

          <Divider orientation="left">License Certifications Info</Divider>

          <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
            <FormItem
              label="Canada Bond Expiry Date"
              name={"canadaBondExpiryDate"}
              rules={[
                {
                  required: true,
                  message: "Canada Bond Expiry Date is required!!!",
                },
              ]}
            >
              <Input placeholder="SCAC Code" />
            </FormItem>
          </Col>

          <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
            <FormItem
              label="USA Bond Expiry Date"
              name={"usaBondExpiryDate"}
              rules={[
                {
                  required: true,
                  message: "USA Bond Expiry Date is required!!!",
                },
              ]}
            >
              <Input placeholder="USA Bond Expiry Date" />
            </FormItem>
          </Col>

          <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
            <FormItem
              label="Is CTPAT Certified?"
              name={"isCTPATCertified"}
            >
              <Select allowClear options={BOOLEAN_TYPES}></Select>
            </FormItem>
          </Col>

          <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
            <FormItem
              label="Annual Review Date"
              name={"annualReviewDate"}
              rules={[
                {
                  required: true,
                  message: "Annual Review Date is required!!!",
                },
              ]}
            >
             <DatePicker placeholder="Annual Review Date" style={{width:"100%"}}/>
            </FormItem>
          </Col>

        </Row>

        {/* <Row gutter={15}>
        <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
            <FormItem
              label="License Certifications Type"
              name={"type"}
              rules={[
                {
                  required: true,
                  message: "License Certification Type is required!!!",
                },
              ]}
            >
              <Select allowClear options={LicenseCertifications}></Select>
            </FormItem>
          </Col>

          <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
            <FormItem
              label="Username"
              name={"username"}
              rules={[
                {
                  required: true,
                  message: "Username is required!!!",
                },
              ]}
            >
              <Input placeholder="Username" />
            </FormItem>
          </Col>

          <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
            <FormItem
              label="Password"
              name={"password"}
              rules={[
                {
                  required: true,
                  message: "Password is required!!!",
                },
              ]}
            >
              <Input placeholder="Password" />
            </FormItem>
          </Col>

          <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
            <FormItem
              label="Expiry Date"
              name={"certificationExpiryDate"}
              rules={[
                {
                  required: true,
                  message: "Expiry Date is required!!!",
                },
              ]}
            >
             <DatePicker placeholder="Expiry Date" style={{width:"100%"}}/>
            </FormItem>
          </Col>

          <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
            <FormItem
              label="Comments"
              name={"comments"}
            >
              <TextArea placeholder="Comments" />
            </FormItem>
          </Col>

        </Row> */}

        <FormList name={"licenseCertificationsCredentials"}
          rules={[
            {
              validator: (_, licenseCertificationsCredentials) => {
                if (!licenseCertificationsCredentials || licenseCertificationsCredentials.length < 1) {
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
                        <LicenseCertificationCredentials key={key} name={name} restField={restField} /></Col>
                      <Col span={1}>
                        {(index > 0) && <Button icon={<MinusOutlined />} shape="circle" danger onClick={() => remove(name)} />}
                      </Col>
                    </Row>
                  ))
                }
                <Row>
                  <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                    Add License Certifications Credentials
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
    </>
  );
};

export default License;
