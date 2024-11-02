import { COMPANY_TAB_MAPPINGS } from "../constant/CompanyConstant";
import { Tabs } from "antd";
import MapCompany from "./MapCompany";
import FormLayout from "@/app/common/FormLayout";

export interface ICompanyWrapper {
  companyType: string;
}

const CompanyWrapper: React.FC<ICompanyWrapper> = ({ companyType }) => {

  const tabs = COMPANY_TAB_MAPPINGS.get(companyType) ?? [];
  const transformedTabs = tabs.map((value) => ({
    key: value, label: value, children: <FormLayout>
      <MapCompany tab={value} />
    </FormLayout>
  }));

  return (
    <Tabs items={transformedTabs} />
  );
}

export default CompanyWrapper;