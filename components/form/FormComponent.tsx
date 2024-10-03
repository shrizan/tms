import { Input } from "antd";
import FormItem from "antd/lib/form/FormItem";
import InputNumber from "antd/lib/input-number";
import { FormComponentInfo } from "./form.types";

const FormComponent: React.FC<FormComponentInfo> = ({ label, type, extraText, placeHolder, rules }) => {
    if (type === "EMAIL") {
        return (
            <FormItem
                label={label}
                rules={rules}
                extra={extraText}
                hasFeedback
            >
                <Input placeholder={placeHolder} />
            </FormItem>
        );
    }

    else if (type === "NUMBER") {
        <FormItem
            label={label}
            rules={rules}
            extra={extraText}
            hasFeedback
        >
            <InputNumber placeholder={placeHolder} style={{ width: "100%" }} />
        </FormItem>
    }

    else {
        return (
            <FormItem
                label={label}
                rules={rules}
                extra={extraText}
                hasFeedback
            >
                <Input placeholder={placeHolder} />
            </FormItem>
        );
    }
}

export default FormComponent;