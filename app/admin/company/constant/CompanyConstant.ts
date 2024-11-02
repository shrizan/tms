export const LOCAL = "LOCAL";
export const CANADA = "CANADA";
export const CANADA_USA = "CANADA_USA";

export const PROFILE_TAB = "Profile";
export const CONTACT_TAB = "Contact";
export const LICENSE_TAB = "License";
export const IFTA_WDT_TAB = "IFTA WDT";
export const BORDER_TOLL_TAB = "Border Toll";
export const SERVICE_PROVIDER_TAB = "Service Provider";
export const PAYMENT_TAB = "Payment";
export const US_AUTHORITIES_TAB = "US Authorities";

export const COMPANY_TYPES = [
  {
    value: LOCAL,
    label: "Local Company",
  },
  {
    value: CANADA,
    label: "Canda",
  },
  {
    value: CANADA_USA,
    label: "Canada/US",
  },
];

export const COMPANY_TAB_MAPPINGS = new Map<string, string[]>([
  [LOCAL, [PROFILE_TAB, CONTACT_TAB, SERVICE_PROVIDER_TAB, PAYMENT_TAB]],
  [
    CANADA,
    [
      PROFILE_TAB,
      CONTACT_TAB,
      LICENSE_TAB,
      IFTA_WDT_TAB,
      BORDER_TOLL_TAB,
      SERVICE_PROVIDER_TAB,
      PAYMENT_TAB,
    ],
  ],
  [
    CANADA_USA,
    [
      PROFILE_TAB,
      CONTACT_TAB,
      US_AUTHORITIES_TAB,
      LICENSE_TAB,
      IFTA_WDT_TAB,
      BORDER_TOLL_TAB,
      SERVICE_PROVIDER_TAB,
      PAYMENT_TAB,
    ],
  ],
]);
