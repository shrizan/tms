export type FormProps = {
    title?: string;
    components: FormComponent[];

}

export type FormComponentType = "NUMBER" | "TEXT" | "EMAIL" | "FILE";

export type FormComponent = {
    title?: string;
    isGroup: boolean | false;
    items: FormComponentInfo[]
}

export type FormComponentInfo = {
    type: FormComponentType;
    label: string;
    rules?: any;
    extraText?: string;
    placeHolder?: string;
}