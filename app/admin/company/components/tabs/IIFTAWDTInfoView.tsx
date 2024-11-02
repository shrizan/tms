import { Col, Input, Row } from "antd";
import FormItem from "antd/es/form/FormItem";
import Password from "antd/es/input/Password";
import TextArea from "antd/es/input/TextArea";

export default function IIFTAWDTInfoView({ fieldName, restField }: { fieldName: number, restField: unknown }) {
  return (
    <>
      <Row gutter={15}>


        <Col md={{ span: 12 }}>
          <FormItem
            {...restField as object}
            hasFeedback
            label="IFTAWDT Type"
            name={[fieldName, "type"]}
            rules={[
              {
                required: true
              }
            ]}
          >
            <Input placeholder="IFTAWDT Type" />
          </FormItem>
        </Col>


        <Col md={{ span: 12 }}>
          <FormItem
            hasFeedback
            label="Account Number"
            name={[fieldName, "accountNumber"]}
            rules={[
              {
                required: true
              }
            ]}
          >
            <Input placeholder="Account Number" />
          </FormItem>
        </Col>



        <Col md={{ span: 12 }}>
          <FormItem
            hasFeedback
            label="Username"
            name={[fieldName, "username"]}
            rules={[
              {
                required: true
              }
            ]}
          >
            <Input placeholder="Username" />
          </FormItem>
        </Col>

        <Col md={{ span: 12 }}>
          <FormItem
            hasFeedback
            label="Password"
            name={[fieldName, "password"]}
            rules={[
              {
                required: true
              }
            ]}
          >
            <Password placeholder="Password" />
          </FormItem>
        </Col>
      </Row>

      <FormItem
        hasFeedback
        label="Password"
        name={[fieldName, "password"]}
        rules={[
          {
            required: true
          }
        ]}
      >
        <TextArea rows={3} placeholder="Comments"></TextArea>
      </FormItem>

    </>
  );
}