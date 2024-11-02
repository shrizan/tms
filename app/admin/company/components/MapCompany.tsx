import React from "react"
import { CONTACT_TAB, PROFILE_TAB } from "../constant/CompanyConstant";
import Profile from "./tabs/Profile";
import Contact from "./tabs/Contact";

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

    case CONTACT_TAB:
      return (
        <Contact />
      );

    default:
      return (<>NA</>);
  }

}

export default MapCompany;