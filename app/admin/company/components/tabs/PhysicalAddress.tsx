import { Col, Input, Row } from "antd";
import FormItem from "antd/es/form/FormItem";

export default function PhysicalAddress({ name, restField }: { name: number, restField: unknown }) {
  return (
    <Row gutter={15}>

      <Col md={{ span: 12 }}>
        <FormItem
          {...restField as object}
          label="Company Address"
          name={[name, "companyAddress"]}
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
          {...restField as object}
          label="City"
          name={[name, "city"]}
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
          {...restField as object}
          label="Province"
          name={[name, "province"]}
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
          {...restField as object}
          label="Postal Code"
          name={[name, "postalCode"]}
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