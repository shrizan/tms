"use client";

import { Button, Upload, UploadFile, UploadProps } from "antd";
import { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { FileType } from "./File.type";

type TMSFileInputProps = {
    value: FileType;
    onChange: (value: FileType) => void;
    label?: string;
}

const TMSFileInput: React.FC<TMSFileInputProps> = ({ value, onChange }) => {
    const [uploadFile, setUploadFile] = useState<UploadFile[]>(value ? [value as UploadFile] : []);

    const fileChange: UploadProps["onChange"] = ({ fileList }) => {
        if (fileList && fileList.length > 0) {
            setUploadFile([fileList[0]]);
            const { fileName } = fileList[0].response?.data;
            onChange({
                name: fileName,
                status: "Done",
                uid: fileName,
                url: fileName
            });
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

export default TMSFileInput;