import React from 'react';
import { Col, Input, Row, Select, DatePicker} from "antd";
import FormItem from "antd/es/form/FormItem";
import TextArea from "antd/es/input/TextArea";

const LicenseCertifications = [
    {value:"Login.gov",  label: "Login.gov" },
    { value:"PIP Certified", label: "PIP Certified" },
    { value:"Smartway Certified", label: "Smartway Certified" },
    { value: "Alcohol Permit" , label: "Alcohol Permit" },
    { value: "PHMSA", label: "PHMSA" },
    { value: "Hazmat Alliance", label: "Hazmat Alliance" },
    { value: "MOE CC", label: "MOE CC" },
];

const LicenseCertificationCredentials = ({name, restField}: { name: number, restField: unknown }) => {
    return (
        <Row gutter={15}>
    
          <Col md={{ span: 24 }}>
            <FormItem
              {...restField as object}
              label="License Certifications Type"
              name={[name, "type"]}
              rules={[
                {
                  required: true,
                  message: "License Certification Type is required!!!",
                },
              ]}
              hasFeedback
            >
               <Select allowClear options={LicenseCertifications}></Select>
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
    
          <Col md={{ span: 12 }}>
            <FormItem
              {...restField as object}
              label="Expiry Date"
              name={[name, "certificationExpiryDate"]}
              rules={[
                {
                  required: true,
                  message: "Expiry Date is required!!!",
                },
              ]}
              hasFeedback
            >
               <DatePicker placeholder="Expiry Date" style={{width:"100%"}}/>
            </FormItem>
          </Col>

          <Col md={{ span: 12 }}>
            <FormItem
              {...restField as object}
              label="Comments"
              name={[name, "comments"]}
              hasFeedback
            >
              <TextArea placeholder="Comments" />
            </FormItem>
          </Col>
    
        </Row>
      );
}

export default LicenseCertificationCredentials