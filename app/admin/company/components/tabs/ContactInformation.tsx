import { Col, Input, Row } from "antd";
import FormItem from "antd/es/form/FormItem";

export default function ContactInformation({ fieldName, restField }: { fieldName: number, restField: unknown }) {
  return (
    <Row gutter={15}>

      <Col md={{ span: 12 }}>
        <FormItem
          {...restField as object}
          label="Department Name"
          name={[fieldName, "departmentName"]}
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
          name={[fieldName, "contactPersonName"]}
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
          name={[fieldName, "email"]}
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
          name={[fieldName, "contactNumber"]}
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