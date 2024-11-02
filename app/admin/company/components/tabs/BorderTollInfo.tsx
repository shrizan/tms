import { Col, Input, Row } from "antd";
import FormItem from "antd/es/form/FormItem";
import TextArea from "antd/es/input/TextArea";

export default function BorderTollInfo({ fieldName, restField }: { fieldName: number, restField: unknown }) {
  return (
    <Col>

      <FormItem
        {...restField as object}
        hasFeedback
        label="BorderToll Type"
        name={[fieldName, "type"]}
        rules={[{ required: true }]}
      >
        <Input placeholder="Select border toll type" />
      </FormItem>
      <Row gutter={15}>

        <Col md={{ span: 12 }}>
          <FormItem
            {...restField as object}
            hasFeedback
            label="Username"
            name={[fieldName, "username"]}
            rules={[{ required: true }]}
          >
            <Input placeholder="Username" />
          </FormItem>
        </Col>

        <Col md={{ span: 12 }}>
          <FormItem
            {...restField as object}
            hasFeedback
            label="Password"
            name={[fieldName, "password"]}
            rules={[{ required: true }]}
          >
            <Input placeholder="Password" />
          </FormItem>
        </Col>

        <Col md={{ span: 12 }}>
          <FormItem
            {...restField as object}
            hasFeedback
            label="Account Number"
            name={[fieldName, "accountNumber"]}
            rules={[{ required: true }]}
          >
            <Input placeholder="Account Number" />
          </FormItem>
        </Col>

        <Col md={{ span: 12 }}>
          <FormItem
            {...restField as object}
            hasFeedback
            label="Comments"
            name={[fieldName, "comments"]}
            rules={[{ required: true }]}
          >
            <TextArea rows={3} placeholder="Comments"></TextArea>
          </FormItem>
        </Col>

      </Row>
    </Col>
  );
}