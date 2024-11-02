"use client";

import { MinusOutlined, PlusOutlined, SaveOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row } from "antd";
import { useForm } from "antd/es/form/Form";
import FormItem from "antd/es/form/FormItem";
import FormList from "antd/es/form/FormList";
import IIFTAWDTInfoView from "./IIFTAWDTInfoView";
import BorderTollInfo from "./BorderTollInfo";

export interface IBorderToll {
  email: string;
  info: { type: string, username: string, password: string, accountNumber: string, comments: string }[]
}

export default function BorderToll() {
  const [form] = useForm<IBorderToll>();

  return (
    <Form
      layout="vertical"
      initialValues={{ info: [{}] }}
    >
      <FormItem
        label="Registered Email"
        name={"email"}
      >
        <Input placeholder="Registered email" />
      </FormItem>

      <FormList name={"info"}
        rules={[
          {
            validator: (_, info) => {
              if (!info || info.length < 1) {
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
                    <Col span={23}>
                      <BorderTollInfo key={key} fieldName={name} restField={restField} /></Col>
                    <Col span={1}>
                      {
                        (index > 0) && <Button icon={<MinusOutlined />} shape="circle" danger onClick={() => remove(name)} />
                      }
                    </Col>
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
        <Button icon={<SaveOutlined />} htmlType="submit" type="primary" style={{ marginTop: 10 }}>
          Save
        </Button>
      </FormItem>

    </Form>
  );

}