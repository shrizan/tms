import React from 'react';;
import { Col, Input, Row, Select} from "antd";
import FormItem from "antd/es/form/FormItem";

const ServiceProviders = [
    {value:"Drug Test Provider",  label: "Drug Test Provider" },
    { value:"Dash Cam Provider", label: "Dash Cam Provider" },
    { value:"Fuel Provider", label: "Fuel Provider" },
    { value: "ELD Provider" , label: "ELD Provider" }
];

const ServiceProviderCredentials = ({name, restField}: { name: number, restField: unknown }) => {
  return (
    <Row gutter={15}>
    
          <Col md={{ span: 24 }}>
            <FormItem
              {...restField as object}
              label="Service Provider Type"
              name={[name, "type"]}
              rules={[
                {
                  required: true,
                  message: "Service Provider Type is required!!!",
                },
              ]}
              hasFeedback
            >
               <Select allowClear options={ServiceProviders}></Select>
            </FormItem>
          </Col>
    
    
          <Col md={{ span: 12 }}>
            <FormItem
              {...restField as object}
              label="Username"
              name={[name, "username"]}
              rules={[
                {
                  required: true,
                  message: "Username is required!!!",
                },
              ]}
              hasFeedback
            >
              <Input placeholder="Username" />
            </FormItem>
          </Col>
    
          <Col md={{ span: 12 }}>
            <FormItem
              {...restField as object}
              label="Password"
              name={[name, "password"]}
              rules={[
                {
                  required: true,
                  message: "Password is required!!!",
                },
              ]}
              hasFeedback
            >
              <Input placeholder="Password" />
            </FormItem>
          </Col>

    
        </Row>
      );
}

export default ServiceProviderCredentials