"use client"

import { Button, Form, Select } from "antd";
import { useForm } from "antd/es/form/Form";
import FormItem from "antd/es/form/FormItem";
import { useRouter } from "next/navigation";
import { COMPANY_TYPES } from "../constant/CompanyConstant";

export interface CompanyTypeForm {
  type: string;
}

export default function CompanyTypeForm() {


  const [form] = useForm<CompanyTypeForm>();

  const router = useRouter();

  return (
    <>
      <Form

        onFinish={(value) => {
          router.push(`/admin/company/add/${value.type}`)
        }}
        layout="vertical"
        form={form}>
        <FormItem
          label="Company Type"
          name={"type"}
          hasFeedback
          rules={[
            { required: true, message: "Company type is required!!!" }
          ]}
        >
          <Select
            allowClear
            options={COMPANY_TYPES}
            placeholder="Select company type"
          >
          </Select>

        </FormItem>

        <FormItem>
          <Button htmlType="submit" type="primary">
            Login
          </Button>
        </FormItem>
      </Form>
    </>
  );

}