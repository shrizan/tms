import { Col, Input, Row } from "antd";
import FormItem from "antd/es/form/FormItem";

export default function PhysicalAddress() {
  return (
    <Row gutter={15}>

      <Col md={{ span: 12 }}>
        <FormItem
          label="Company Address"
          name={"companyAddress"}
          rules={[{
            required: true,
          }]}
          hasFeedback
        >
          <Input placeholder="Company address" />
        </FormItem>
      </Col>


      <Col md={{ span: 12 }}>
        <FormItem
          label="City"
          name={"city"}
          rules={[{
            required: true,
          }]}
          hasFeedback
        >
          <Input placeholder="City" />
        </FormItem>
      </Col>

      <Col md={{ span: 12 }}>
        <FormItem
          label="Province"
          name={"province"}
          rules={[{
            required: true,
          }]}
          hasFeedback
        >
          <Input placeholder="Province" />
        </FormItem>
      </Col>

      <Col md={{ span: 12 }}>
        <FormItem
          label="Postal Code"
          name={"postalCode"}
          rules={[{
            required: true,
          }]}
          hasFeedback
        >
          <Input placeholder="Postal Code" />
        </FormItem>
      </Col>

    </Row>
  );
}