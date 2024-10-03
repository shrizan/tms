"use client";

import { Button, Upload, UploadFile, UploadProps } from "antd";
import { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";

type TMSMultipleFileInputProps = {
    value: string;
    onChange: (value: string) => void;
    label?: string;
}

const TMSMultipleFileInput: React.FC<TMSMultipleFileInputProps> = ({ value, onChange }) => {
    const [uploadFile, setUploadFile] = useState<UploadFile[]>(value ? [{
        uid: value,
        name: value,
        status: "done",
        url: value
    }] : []);

    const fileChange: UploadProps["onChange"] = ({ fileList }) => {
        if (fileList && fileList.length > 0) {
            setUploadFile([fileList[0]]);
            onChange(fileList[0].response?.data?.fileName);
        }
    }

    return (
        <Upload
            action={""}
            fileList={uploadFile}
            onChange={fileChange}
        >
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
    );

}

export default TMSMultipleFileInput;