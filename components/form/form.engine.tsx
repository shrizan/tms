'use client'

import { ReactElement } from "react";

import { FormProps } from "./form.types"
import FormTitle from "./FormTitle";
import FormItemRenderer from "./FormItemRenderer";
import { Form } from "antd";

type FormEngineProps<T> = {
    component: FormProps
    onSubmit: (value: T) => void;
}


const TMSForm: <T>(props: FormEngineProps<T>) => ReactElement = ({ onSubmit, component }) => {

    const { title, components } = component;

    return (
        <>
            {/* form title section */}
            <FormTitle title={title} />

            {/* form component section */}
            <Form
                onFinish={(values) => onSubmit(values)}
            >
                <FormItemRenderer components={components} />
            </Form>

        </>
    );

}

export default TMSForm;