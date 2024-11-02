// import FormList from "antd/es/form/FormList";
// import React, { PropsWithChildren } from "react";

// export interface ICustomFormList {
//   name: string;
//   required: boolean;
//   requiredMessage?: string;
//   rules?: unknown[]
// }

// const CustomFormList: React.FC<PropsWithChildren<ICustomFormList>> = ({ name, rules, required, requiredMessage,children }) => {
//   rules = rules ?? []
//   requiredMessage = requiredMessage ?? `At least one ${name} is required!!!`;
//   if (required) {
//     rules.push({
//       validator: (_: object, contactInfo: object) => {
//         if (!contactInfo || (contactInfo as unknown[]).length < 1) {
//           return Promise.reject(new Error(requiredMessage));
//         }
//         else {
//           return Promise.resolve();
//         }
//       }
//     })
//   }


//   return (
//     <FormList name={name}
//       rules={rules as never}
//     >
//       {children}
//     </FormList>
//   );
// }

// export default function CustomFormList({ children }: React.PropsWithChildren) {
//   return (
//     <>
//       {children}
//     </>
//   );
// }