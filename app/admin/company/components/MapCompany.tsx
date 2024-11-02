import React from "react"
import { PROFILE_TAB } from "../constant/CompanyConstant";
import Profile from "./tabs/Profile";

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

    default:
      return (<>NA</>);
  }

}

export default MapCompany;