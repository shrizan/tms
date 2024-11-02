import { Col } from "antd";

export default function FormLayout({ children }: React.PropsWithChildren) {
  return (
    <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 16 }}>
      {children}
    </Col>
  );
}