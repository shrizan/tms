import React from "react";
import { FormComponent, FormComponentInfo } from "./form.types";
import FormTitle from "./FormTitle";
import FormComponentView from "./FormComponentView";
import { Col, Row } from "antd";

export type FormItemRendererProps = {
  components: FormComponent[];
}

const FormItemRenderer: React.FC<FormItemRendererProps> = ({ components }) => {

  const renderItems = (isGroup: boolean, items: FormComponentInfo[]) => {
    if (!items || items.length < 1) {
      return (<></>);
    }

    const size = Math.floor(24 / items.length);

    return (
      <Row gutter={[5, 5]}>

        {
          items.map(item => <Col key={item.name} lg={{ span: size }} md={{ span: size }} sm={{ span: 12 }} xs={{ span: 24 }}><FormComponentView {...item} /></Col>)
        }
      </Row>
    );


  }

  return (
    <>
      {
        components.map(({ isGroup, items, title }) => {
          return (
            <>
              <FormTitle title={title} />
              {
                renderItems(isGroup, items)
              }
            </>
          );
        })
      }
    </>
  );

}

export default FormItemRenderer;