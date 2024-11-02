import { Col, Input, Row } from "antd";
import FormItem from "antd/es/form/FormItem";

export default function MailingAddress() {
  return (
    <Row gutter={15}>

      <Col md={{ span: 12 }}>
        <FormItem
          label="Department Name"
          name={"departmentName"}
          rules={[{
            required: true,
          }]}
          hasFeedback
        >
          <Input placeholder="Department Name" />
        </FormItem>
      </Col>


      <Col md={{ span: 12 }}>
        <FormItem
          label="Contact Person Name"
          name={"contactPersonName"}
          rules={[{
            required: true,
          }]}
          hasFeedback
        >
          <Input placeholder="Contact person name" />
        </FormItem>
      </Col>

      <Col md={{ span: 12 }}>
        <FormItem
          label="Email"
          name={"email"}
          rules={[{
            required: true,
          }]}
          hasFeedback
        >
          <Input placeholder="Email" />
        </FormItem>
      </Col>

      <Col md={{ span: 12 }}>
        <FormItem
          label="Contact Number"
          name={"contactNumber"}
          rules={[{
            required: true,
          }]}
          hasFeedback
        >
          <Input placeholder="Contact Name" />
        </FormItem>
      </Col>

    </Row>
  );
}