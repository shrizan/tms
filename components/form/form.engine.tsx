'use client'

import { ReactElement } from "react";

import { FormProps } from "./form.types"
import { Divider } from "antd";
import FormTitle from "./FormTitle";

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

        </>
    );

}

export default TMSForm;