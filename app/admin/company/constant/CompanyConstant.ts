export const LOCAL = "LOCAL";
export const CANADA = "CANADA";
export const CANADA_USA = "CANADA_USA";

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
  [LOCAL, ["Profile", "Contact", "Service Provider", "Payment"]],
  [
    CANADA,
    [
      "Profile",
      "Contact",
      "License",
      "IFTA WDT",
      "Border Toll",
      "Service Provider",
      "Payment",
    ],
  ],
  [
    CANADA_USA,
    [
      "Profile",
      "Contact",
      "US Authorities",
      "License",
      "IFTA WDT",
      "Border Toll",
      "Service Provider",
      "Payment",
    ],
  ],
]);
