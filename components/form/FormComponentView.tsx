import { Input } from "antd";
import FormItem from "antd/lib/form/FormItem";
import InputNumber from "antd/lib/input-number";
import { FormComponentInfo } from "./form.types";
import { Rule } from "antd/es/form";

const FormComponentView: React.FC<FormComponentInfo> = ({ label, type, extraText, placeHolder, rules, name }) => {

    const formItemProps = {
        label: label,
        rules: rules as Rule[],
        extra: extraText,
        hasFeedback: true,
        name: name
    }

    if (type === "EMAIL") {
        return (
            <FormItem
                {...formItemProps}
            >
                <Input placeholder={placeHolder} />
            </FormItem>
        );
    }

    else if (type === "NUMBER") {
        <FormItem
            {...formItemProps}
        >
            <InputNumber placeholder={placeHolder} style={{ width: "100%" }} />
        </FormItem>
    }

    else {
        return (
            <FormItem
                {...formItemProps}
            >
                <Input placeholder={placeHolder} />
            </FormItem>
        );
    }
}

export default FormComponentView;