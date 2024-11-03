import React from "react";
import {
  PROFILE_TAB,
  CONTACT_TAB,
  US_AUTHORITIES_TAB,
  LICENSE_TAB,
  IFTA_WDT_TAB,
  BORDER_TOLL_TAB,
  SERVICE_PROVIDER_TAB,
  PAYMENT_TAB
} from "../constant/CompanyConstant";
import Profile from "./tabs/Profile";
import Contact from "./tabs/Contact";
import License from "./tabs/License";
import USAuthorities from "./tabs/USAuthorities";
import IFTAWDTView from "./tabs/IFTAWDT";
import BorderToll from "./tabs/BorderToll";
import ServiceProvider from "./tabs/ServiceProvider";
import Payment from "./tabs/Payment";

export interface IMapCompany {
  tab: string;
}

const MapCompany: React.FC<IMapCompany> = ({ tab }) => {
  switch (tab) {
    case PROFILE_TAB:
      return <Profile />;
    case CONTACT_TAB:
      return <Contact />;
    case US_AUTHORITIES_TAB:
      return <USAuthorities />;
    case LICENSE_TAB:
      return <License />;
    case IFTA_WDT_TAB:
      return <IFTAWDTView />;
    case BORDER_TOLL_TAB:
      return <BorderToll />;
    case SERVICE_PROVIDER_TAB:
      return <ServiceProvider />;
    case PAYMENT_TAB:
      return <Payment />;

    default:
      return <>NA</>;
  }
};

export default MapCompany;
