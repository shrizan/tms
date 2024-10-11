"use client";

import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import FormItem from "antd/es/form/FormItem";
import Password from "antd/es/input/Password";

export default function LoginForm() {
    const [form] = useForm();
    return (
        <Form
            layout="vertical"
            onFinish={(values: unknown) => {
                console.log(values);
            }}
            form={form}
        >
            <FormItem
                hasFeedback
                label="Email or Username"
                rules={[{ required: true, message: "This field is required!!!" }]}
                name={"email"}
            >
                <Input placeholder="Email or Username" />
            </FormItem>

            <FormItem
                hasFeedback
                label="Password"
                name={"password"}
                rules={[
                    { required: true, message: "This field is required!!!" },
                    { min: 5, message: "Password is required in between 5 to 20" },
                    { max: 20, message: "Password is required in between 5 to 20" }
                ]}>
                <Password placeholder="Password" />
            </FormItem>
            <FormItem>
                <Button htmlType="submit" type="primary">
                    Login
                </Button>
            </FormItem>

        </Form>
    );
}