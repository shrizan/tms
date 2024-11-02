import React from "react";
import {
  PROFILE_TAB,
  CONTACT_TAB,
  US_AUTHORITIES_TAB,
  LICENSE_TAB,
} from "../constant/CompanyConstant";
import Profile from "./tabs/Profile";
import Contact from "./tabs/Contact";
import License from "./tabs/License";
import USAuthorities from "./tabs/USAuthorities";

export interface IMapCompany {
  tab: string;
}

const MapCompany: React.FC<IMapCompany> = ({ tab }) => {
  console.log(tab);
  switch (tab) {
    case PROFILE_TAB:
      return <Profile />;
    case CONTACT_TAB:
      return <Contact />;
    case US_AUTHORITIES_TAB:
      return <USAuthorities />;
    case LICENSE_TAB:
      return <License />;

    default:
      return <>NA</>;
  }
};

export default MapCompany;
