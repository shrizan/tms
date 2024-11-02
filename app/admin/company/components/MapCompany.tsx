import React from "react"
import { PROFILE_TAB, US_AUTHORITIES_TAB, LICENSE_TAB} from "../constant/CompanyConstant";
import Profile from "./tabs/Profile";
import USAuthorities from "./tabs/USAuthorities";
import License from "./tabs/License";

export interface IMapCompany {
  tab: string;
}

const MapCompany: React.FC<IMapCompany> = ({ tab }) => {
  console.log(tab);
  switch (tab) {
    case PROFILE_TAB:
      return (
        <Profile />
      );
    case US_AUTHORITIES_TAB:
      return (
        <USAuthorities />
      );
    case LICENSE_TAB:
      return (
        <License />
      );

    default:
      return (<>NA</>);
  }

}

export default MapCompany;