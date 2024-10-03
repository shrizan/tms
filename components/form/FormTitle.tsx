import { Divider } from "antd";

type FormTitleProps = {
    title?: string;
}

const FormTitle: React.FC<FormTitleProps> = ({ title }) => {
    if (!title) {
        return <></>;
    }

    return (
        <Divider style={{ margin: 0, padding: 0 }}>
            {title}
        </Divider>
    );
}

export default FormTitle;