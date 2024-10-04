export type FormProps = {
  title?: string;
  components: FormComponent[];
};

export type FormComponentType = "NUMBER" | "TEXT" | "EMAIL" | "FILE";

export type FormComponent = {
  title?: string;
  isGroup: boolean | false;
  items: FormComponentInfo[];
};

export type FormComponentInfo = {
  name: string;
  type: FormComponentType;
  label: string;
  rules?: unknown;
  extraText?: string;
  placeHolder?: string;
};
