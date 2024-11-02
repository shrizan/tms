"use client"

import { Button, Col, Form, Input, Row } from "antd";
import { useForm } from "antd/es/form/Form";
import FormItem from "antd/es/form/FormItem";
import FormList from "antd/es/form/FormList";
import IIFTAWDTInfoView from "./IIFTAWDTInfoView";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

export interface IIFTAWDTInfo {
  type: string;
  username: string;
  password: string;
  accountNumber: string;
  comments: string;
}

export interface IIFTAWDT {
  iftaNumber: string;
  nyTaxAccountNumber: string;
  kyuNumber: string;

  infos: IIFTAWDTInfo[]
}

export default function IFTAWDTView() {

  const [form] = useForm<IIFTAWDT>();

  return (
    <Form
      layout="vertical"
      initialValues={{
        infos: [{}]
      }}
    >
      <Row gutter={15}>
        <Col md={{ span: 8 }}>
          <FormItem
            hasFeedback
            label="IFTA Number"
            rules={[{ required: true }]}
            name={"iftaNumber"}
          >
            <Input placeholder="IFTA Number" />
          </FormItem>
        </Col>
        <Col md={{ span: 8 }}>
          <FormItem
            hasFeedback
            label="NY Tax Account Number"
            rules={[{ required: true }]}
            name={"nyTaxAccountNumber"}
          >
            <Input placeholder="NY Tax Account Number" />
          </FormItem>
        </Col>
        <Col md={{ span: 8 }}>
          <FormItem
            hasFeedback
            label="KYU Number"
            rules={[{ required: true }]}
            name={"kyuNumber"}
          >
            <Input placeholder="KYU Number" />
          </FormItem>
        </Col>
      </Row>


      <FormList name={"infos"}
        rules={[
          {
            validator: (_, contactInfo) => {
              if (!contactInfo || contactInfo.length < 1) {
                return Promise.reject(new Error('At least one contact info is required.'));
              }
              else {
                return Promise.resolve();
              }
            }
          }
        ]}

      >
        {
          (fields, { add, remove }, { errors }) => (
            <>
              {
                errors && <div style={{ color: "red" }}>{errors.toString()}</div>
              }
              {
                fields.map(({ key, name, ...restField }, index) => (
                  <Row key={key} align={"top"}>
                    <Col span={24}>
                      <IIFTAWDTInfoView key={key} fieldName={name} restField={restField} /></Col>
                  </Row>
                ))
              }
              <Row>
                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                  Add More
                </Button>
              </Row>
            </>
          )
        }
      </FormList>


      <FormItem>
        <Button htmlType="submit" type="primary" style={{ marginTop: 10 }}>
          Login
        </Button>
      </FormItem>

    </Form>
  );
}