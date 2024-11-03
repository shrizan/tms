"use client"
import { Button, Col, Divider, Form, Row } from "antd";
import { useForm } from "antd/es/form/Form";
import FormList from "antd/es/form/FormList";
import ContactInformation from "./ContactInformation";
import { MinusOutlined, PlusOutlined, SaveOutlined } from "@ant-design/icons";
import FormItem from "antd/es/form/FormItem";
import PhysicalAddress from "./PhysicalAddress";
import MailingAddress from "./MailingAddress";
import YardAddress from "./YardAddress";

export interface IContactInfo {
  departmentName: string;
  contactPersonName: string;
  email: string;
  contactNumber: string;
}

export interface IYardAddress {
  yardAddress: string;
  city: string;
  province: string;
  postalCode: string;
}

export interface IContact {
  contactInfo: IContactInfo[];
  yardAddress: IYardAddress[];
}


export default function Contact() {

  const [form] = useForm<IContact>();

  return (
    <Form
      layout="vertical"
      form={form}
      onFinish={(values) => console.log(values)}
      onFinishFailed={(errorinfo) => console.log("abc", errorinfo)}
      initialValues={{
        contactInfo: [{}],
        yardAddress: [{}]
      }}
    >
      <Divider orientation="left">Contact Info</Divider>
      <FormList name={"contactInfo"}
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
                    <Col span={23}>
                      <ContactInformation key={key} fieldName={name} restField={restField} /></Col>
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
                  Add Contact Info
                </Button>
              </Row>
            </>
          )
        }
      </FormList>


      <Divider orientation="left">Physical Address</Divider>

      <PhysicalAddress />


      <Divider orientation="left">Mailing Address</Divider>
      <MailingAddress />
      <Divider orientation="left">Yard Address</Divider>
      <FormList name={"yardAddress"}
        rules={[
          {
            validator: (_, yardAddress) => {
              if (!yardAddress || yardAddress.length < 1) {
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
                      <YardAddress key={key} name={name} restField={restField} /></Col>
                    <Col span={1}>
                      {(index > 0) && <Button icon={<MinusOutlined />} shape="circle" danger onClick={() => remove(name)} />}
                    </Col>
                  </Row>
                ))
              }
              <Row>
                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                  Add Yard Address
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
  );

}