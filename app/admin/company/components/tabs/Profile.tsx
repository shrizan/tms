"use client"

import { SaveOutlined } from "@ant-design/icons";
import { Button, Checkbox, Col, DatePicker, Divider, Form, Input, Row } from "antd";
import { useForm } from "antd/es/form/Form";
import FormItem from "antd/es/form/FormItem";

export interface IProfile {
  legalName: string;
  dbaName: string;
  businessNumber: string;
  directorName: string;
  wsibNumber: string;
  status: string;
  baseProvice: string;
  nsc: string;
  nscExpireyDate: string;
  insurer: string;
  policy: string;
  insuranceExpiryDate: string;
  hasICBCInsurance: string;
}

export default function Profile() {

  const [form] = useForm<IProfile>();

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={() => { }}
    >
      <Divider orientation="left">Basic Info</Divider>


      <Row gutter={15}>
        <Col xs={{ span: 24 }} md={{ span: 12 }}>
          <FormItem
            label="Legal Name"
            name={"legalName"}
            rules={[{
              required: true,
              message: "Legal name is required!!!"
            }]}>
            <Input placeholder="Legal name" />
          </FormItem>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 12 }}>
          <FormItem
            label="DBA Name"
            name={"dbaName"}
            rules={[{
              required: true,
              message: "DBA name is required!!!"
            }]}>
            <Input placeholder="DBA name" />
          </FormItem>
        </Col>
      </Row>


      <FormItem
        label="Business Number"
        name={"businessNumber"}
        rules={[{
          required: true,
          message: "Business number is required!!!"
        }]}>
        <Input placeholder="Business Number" />
      </FormItem>

      <Row gutter={15}>
        <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
          <FormItem
            label="Director Name"
            name={"directorName"}
            rules={[{
              required: true,
              message: "Director name is required!!!"
            }]}>
            <Input placeholder="Director name" />
          </FormItem>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
          <FormItem
            label="WSIB Number"
            name={"wsibNumber"}
            rules={[{
              required: true,
              message: "WSIB number is required!!!"
            }]}>
            <Input placeholder="WSIB number" />
          </FormItem>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
          <FormItem
            label="Status"
            name={"status"}
            rules={[{
              required: true,
              message: "Status is required!!!"
            }]}>
            <Input placeholder="status" />
          </FormItem>
        </Col>
      </Row>

      <Divider orientation="left">
        NSC Profile
      </Divider>


      <Row gutter={15}>
        <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
          <FormItem
            label="Base Province"
            name={"baseProvince"}
            rules={[{
              required: true,
              message: "Base Province is required!!!"
            }]}>
            <Input placeholder="Base province" />
          </FormItem>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
          <FormItem
            label="NSC"
            name={"nsc"}
            rules={[{
              required: true,
              message: "NSC is required!!!"
            }]}>
            <Input placeholder="NSC number" />
          </FormItem>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
          <FormItem
            label="NSC Expiry"
            name={"nscExpiry"}
            rules={[{
              required: true,
              message: "NSC expiry is required!!!"
            }]}>
            <DatePicker placeholder="NSC Expiry" style={{ width: "100%" }} />
          </FormItem>
        </Col>
      </Row>

      <Divider orientation="left">Insurance Info</Divider>

      <Row gutter={15} align={"middle"}>
        <Col md={{ span: 6 }}>
          <FormItem
            label="Insurer"
            name={"insurer"}
            rules={[{
              required: true,
              message: "Insurer is required!!!"
            }]}>
            <Input placeholder="Insurer" />
          </FormItem>
        </Col>
        <Col md={{ span: 6 }}>
          <FormItem
            label="Policy"
            name={"policy"}
            rules={[{
              required: true,
              message: "Policy is required!!!"
            }]}>
            <Input placeholder="Policy" />
          </FormItem>
        </Col>
        <Col md={{ span: 6 }}>
          <FormItem
            label="Expiry Date"
            name={"expiryDate"}
            rules={[{
              required: true,
              message: "Expiry dater required!!!"
            }]}>
            <DatePicker placeholder="Expiry Date" style={{ width: "100%" }} />
          </FormItem>
        </Col>
        <Col md={{ span: 6 }}>
          <FormItem
            label="Has ICBC Insurance?"
            name={"hasICBCInsurance"}
            valuePropName="checked"
            rules={[{
              required: true,
              message: "Insurer is required!!!"
            }]}>
            <Checkbox>Has ICBC Insurance?</Checkbox>
          </FormItem>
        </Col>
      </Row>


      <FormItem>
        <Button htmlType="submit" type="primary" icon={<SaveOutlined />}>
          Save
        </Button>
      </FormItem>

    </Form>
  );

}