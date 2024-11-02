import { Col, Input, Row } from "antd";
import FormItem from "antd/es/form/FormItem";

export default function YardAddress({ name, restField }: { name: number, restField: unknown }) {
  return (
    <Row gutter={15}>

      <Col md={{ span: 12 }}>
        <FormItem
          {...restField as object}
          label="Department Name"
          name={[name, "departmentName"]}
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
          {...restField as object}
          label="Contact Person Name"
          name={[name, "contactPersonName"]}
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
          {...restField as object}
          label="Email"
          name={[name, "email"]}
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
          {...restField as object}
          label="Contact Number"
          name={[name, "contactNumber"]}
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