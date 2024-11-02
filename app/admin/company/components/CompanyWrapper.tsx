import { COMPANY_TAB_MAPPINGS } from "../constant/CompanyConstant";
import { Tabs } from "antd";

export interface ICompanyWrapper {
  companyType: string;
}

const CompanyWrapper: React.FC<ICompanyWrapper> = ({ companyType }) => {

  const tabs = COMPANY_TAB_MAPPINGS.get(companyType) ?? [];
  const transformedTabs = tabs.map((value) => ({ key: value, label: value, Children: value }));

  return (
    <Tabs items={transformedTabs} />
  );
}

export default CompanyWrapper;